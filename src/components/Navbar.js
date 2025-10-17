import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="navbar-dark" style={{ backgroundColor: "#d60000" }}>
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-white">
          UCA
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="text-white">Inicio</Nav.Link>
            <Nav.Link href="#services" className="text-white">Servicios</Nav.Link>
            <Nav.Link href="#about" className="text-white">Nosotros</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
