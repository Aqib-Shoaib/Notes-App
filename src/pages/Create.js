import { Button, Container, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        color="textSecondary"
      >
        Create a new note
      </Typography>

      <Button
        type="submit"
        color="secondary"
        variant="contained"
        onClick={() => console.log("s")}
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
      <br />
    </Container>
  );
}
