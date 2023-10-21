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
        <Route path="/diversity" element={<Diversity />} />
        <Route path="/phonenumber" element={<PhoneNumber />} />
      </Routes>
    </Router>
  );
}

export default App;
