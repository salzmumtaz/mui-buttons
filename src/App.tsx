import "./App.css";
import raw from "./styles/muiTheme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Buttons from "./components/Buttons";
import { Avatar, Button, Paper, Grid, Typography } from "@mui/material";

const theme = createTheme(raw);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div className="App">
          <Buttons />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
