import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <Container id="contact" className="py-5 text-center">
      <h2 className="fw-bold mb-4" style={{ color: "#d60000" }}>Contáctanos</h2>
      <Form className="mx-auto" style={{ maxWidth: "600px" }}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Nombre" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Correo electrónico" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={4} placeholder="Mensaje" required />
        </Form.Group>
        <Button variant="danger" type="submit">
          Enviar mensaje
        </Button>
      </Form>
    </Container>
  );
}
