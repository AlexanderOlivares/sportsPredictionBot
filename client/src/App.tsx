import React, { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Nfl from "./components/pages/Nfl";
import AppBar from "./components/ui/AppBar";
import theme from "./components/ui/Theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = React.useState<PaletteMode>("light");

  const theme = createTheme({
    palette: {
      mode: darkMode,
      primary: {
        main: "#009688",
      },
      secondary: {
        main: "#ff7043",
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Router>
            <AppBar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/nfl" element={<Nfl />} />
              {/* <Route path="/nhl" element={<Nfl />} />
          		<Route path="/nba" element={<Nfl />} /> */}
            </Routes>
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
