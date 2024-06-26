import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import MovingBackground from "./Components/MovingBackground/MovingBackground";
import ScrollingElements from "./Components/ScrollingElement/ScrollingElements";

// Custom theme for MUI
const theme = createTheme({
  typography: {
    fontFamily: "Rubik, sans-serif", // Custom font family
  },
  palette: {
    background: {
      default: "#000000", // linear gradient for background
    },
    text: {
      primary: "#fff", // text color
      secondary: "#000", //secondary text color
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="non-scrollable-background">
        <MovingBackground />
        <div className=".scrollable-content">
          <ScrollingElements />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
