import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Nfl from "./components/pages/Nfl";
import AppBar from "./components/ui/AppBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/ui/Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <AppBar />
          <Routes>
            <Route path="/nfl" element={<Nfl />} />
            {/* <Route path="/nhl" element={<Nfl />} />
          <Route path="/nba" element={<Nfl />} /> */}
          </Routes>
        </Router>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
