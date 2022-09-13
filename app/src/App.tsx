import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from './Pages/Navigation';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Portfolio } from './Pages/Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
      
     </BrowserRouter>
    </div>
  );
}

export default App;
