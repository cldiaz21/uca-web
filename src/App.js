import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
