import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./Pages/Navigation";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Experience } from "./Pages/Experience";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/portfolio/" element={<Navigation />}>
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/experience" element={<Experience />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
