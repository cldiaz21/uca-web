import React from "react";
import { Container, Button } from "react-bootstrap";

export default function Home() {
  return (
    <div
      id="home"
      className="text-center text-light d-flex align-items-center justify-content-center"
      style={{
        height: "90vh",
        backgroundColor: "#d60000",
        backgroundSize: "cover"
      }}
    >
      <Container>
        <h1 className="display-3 fw-bold">UCA Asesorías Ambientales</h1>
        <p className="lead mb-4">
          Expertos en retiro, manipulación y gestión de materiales con asbesto.
        </p>
        <Button variant="light" size="lg" href="#services">
          Conoce nuestros servicios
        </Button>
      </Container>
    </div>
  );
}
