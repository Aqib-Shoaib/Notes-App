import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import NoteCard from "../components/NoteCard";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(function () {
    fetch("http://localhost:8000/notes")
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ textAlign: "center", padding: 2 }}>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ textAlign: "center", padding: 2 }}>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ textAlign: "center", padding: 2 }}>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ textAlign: "center", padding: 2 }}>4</Paper>
        </Grid>
      </Grid> */}

      <Grid container spacing={3}>
        {notes.map((val) => (
          <Grid item key={val.id} xs={12} md={6} lg={4}>
            <NoteCard note={val} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
