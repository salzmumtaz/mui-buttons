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

const theme = createTheme(raw);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ height: "100vh" }}>
        <div className="App">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="button" element={<Buttons />} />
              <Route path="checkbox" element={<CheckBox />} />
              <Route path="radiobuttons" element={<RadioButtons />} />
              <Route path="switch" element={<Switches />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
