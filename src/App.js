// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Página principal con todas las secciones
function HomePage() {
  return (
    <main>
      <Home />
    </main>
  );
}

// Página de Quiénes Somos
function AboutPage() {
  return (
    <main>
      <About />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quienes-somos" element={<AboutPage />} />
        <Route path="/servicios" element={<main><Services /></main>} />
        <Route path="/contacto" element={<main><Contact /></main>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
