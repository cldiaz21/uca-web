import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Services() {
  const servicios = [
    {
      titulo: "Retiro de Asbesto",
      desc: "Retiro seguro y certificado de materiales con asbesto friable y no friable."
    },
    {
      titulo: "Capacitaciones",
      desc: "Entrenamiento en manejo de residuos peligrosos y prevención de riesgos."
    },
    {
      titulo: "Asesorías Ambientales",
      desc: "Planes de muestreo, remediación y validación ambiental."
    }
  ];

  return (
    <Container id="services" className="py-5 text-center">
      <h2 className="mb-4 fw-bold" style={{ color: "#d60000" }}>Nuestros Servicios</h2>
      <Row>
        {servicios.map((s, i) => (
          <Col key={i} md={4} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{s.titulo}</Card.Title>
                <Card.Text>{s.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
