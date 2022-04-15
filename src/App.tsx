import "./App.css";
import raw from "./styles/muiTheme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Buttons from "./components/Buttons";

const theme = createTheme(raw);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Buttons />
      </div>
    </ThemeProvider>
  );
}

export default App;
