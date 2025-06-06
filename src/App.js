import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import APropos from './pages/APropos';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/apropos" element={<APropos />} />
      </Routes>
    </Router>
  );
}
