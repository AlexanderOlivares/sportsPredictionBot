import React, { useState } from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Nfl from "./components/pages/Nfl";
import AppBar from "./components/ui/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode } from "@mui/material";
import About from "./components/pages/About";
import Footer from "./components/ui/footer";

function App() {
  const [darkMode, setDarkMode] = useState<PaletteMode>("light");

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
              <Route path="/about" element={<About />} />
              {/* <Route path="/mlb" element={<Mlb />} />
               <Route path="/nba" element={<Nba />} /> */}
            </Routes>
            <Footer />
          </Router>
        </CssBaseline>
      </ThemeProvider>
    </div>
  );
}

export default App;
