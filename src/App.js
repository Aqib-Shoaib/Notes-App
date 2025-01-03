import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { purple } from "@mui/material/colors";
import AppLayout from "./components/AppLayout";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightmedium: 600,
    fontWeightbold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route path="/" element={<Notes />} />
            <Route path="/create" element={<Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
