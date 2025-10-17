import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3">
      <Container>
        <p className="mb-0">
          © {new Date().getFullYear()} UCA | Asesorías Ambientales | Todos los derechos reservados.
        </p>
      </Container>
    </footer>
  );
}
