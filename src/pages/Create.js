import {
  Button,
  Container,
  Typography,
  TextField,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from "react-router-dom";

//the tutor taught how to style the components as you wish using makeStyled that is deprecated, but this down here
//is the new way, you can also use "sx" prop, google it or ask CHATGPT , it will guide you, moreover,
//this way of styling also resembles that of "styled-components" library that is another great npm package

// const CustomBtn = styled(Button)({
//   fontSize: 60,
//      backgroundColor: "violet",
//      "&:hover": {
//        background: "blue",
//      },
// });

// const CustomTitle = styled(Typography)({
//   title: {
//     textDecoration: "underline",
//     marginBottom: 20,
//   },
// });

const textFieldStyles = {
  marginTop: "20px",
  marginBottom: "20px",
  display: "block",
};

export default function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setdetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setdetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setdetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/"));
    }
  };

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

      <form noValidate onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          className="textField"
          sx={textFieldStyles}
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
          className="textField"
          sx={textFieldStyles}
        />

        <FormControl sx={textFieldStyles}>
          <FormLabel>Choose a Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel control={<Radio />} label="Money" value="money" />
            <FormControlLabel control={<Radio />} label="Todos" value="todos" />
            <FormControlLabel control={<Radio />} label="Work" value="work" />
            <FormControlLabel
              control={<Radio />}
              label="Reminders"
              value="reminders"
            />
          </RadioGroup>
        </FormControl>

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
