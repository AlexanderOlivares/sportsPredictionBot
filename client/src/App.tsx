import React from "react";
import "./App.css";
import Home from "./components/pages/home";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Drawer from "./components/ui/drawer";
import Nfl from "./components/pages/nfl";

function App() {
  return (
    <div className="App">
      <Router>
        <Drawer />
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
