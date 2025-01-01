import { Button, Container, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
      console.log(title, details);
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
