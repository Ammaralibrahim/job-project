import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Diversity from './Pages/Diversity';
import PhoneNumber from './Pages/PhoneNumber';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Diversity" element={<Diversity />} />
        <Route path="/PhoneNumber" element={<PhoneNumber />} />
      </Routes>
    </Router>
  );
}

export default App;
