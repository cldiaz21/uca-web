import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function About() {
  return (
    <Container id="about" className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2 className="fw-bold mb-3" style={{ color: "#d60000" }}>Sobre UCA</h2>
          <p>
            UCA es una empresa fundada en 2018 con un equipo de profesionales especializados 
            en el retiro, remediación y validación ambiental de materiales que contienen asbesto.
            Nos destacamos por nuestra eficacia, compromiso y cumplimiento normativo.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="https://images.unsplash.com/photo-1593642632559-0c3ba3b32f3f"
            alt="Equipo UCA"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  );
}
