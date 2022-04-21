import "./App.css";
import raw from "./styles/muiTheme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Buttons from "./components/Buttons";
import { Avatar, Button, Paper, Grid, Typography } from "@mui/material";
import RadioButtons from "./components/RadioButtons";
import Switches from "./components/Switches";
import CheckBox from "./components/CheckBox";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Sliders from "./components/Sliders";
import Ratings from "./components/Ratings";
import ToggleButtons from "./components/ToggleButtons";

const theme = createTheme(raw);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ height: "200vh" }}>
        <div className="App">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="button" element={<Buttons />} />
              <Route path="checkbox" element={<CheckBox />} />
              <Route path="radiobuttons" element={<RadioButtons />} />
              <Route path="switch" element={<Switches />} />
              <Route path="slider" element={<Sliders />} />
              <Route path="rating" element={<Ratings />} />
              <Route path="toggle" element={<ToggleButtons />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
