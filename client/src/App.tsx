import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Nfl from "./components/pages/Nfl";
import AppBar from "./components/ui/AppBar";

function App() {
  return (
    <div className="App">
      <Router>
        <AppBar />
        <Routes>
          <Route path="/nfl" element={<Nfl />} />
          {/* <Route path="/nhl" element={<Nfl />} />
          <Route path="/nba" element={<Nfl />} /> */}
        </Routes>
      </Router>
      <Home />
    </div>
  );
}

export default App;
