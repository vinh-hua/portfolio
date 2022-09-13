import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from './Pages/About';
import { Landing } from './Pages/Landing';
import { Portfolio } from './Pages/Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route index element={<Landing />} />
          <Route path="blogs" element={<About />} />
          <Route path="contact" element={<Portfolio />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
