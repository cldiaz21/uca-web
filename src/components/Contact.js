import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    telefono: "",
    email: "",
    servicio: "",
    tamanoEmpresa: "",
    sistemaTransaccional: "",
    mensaje: "",
    contactoPor: []
  });

  const servicios = [
    "Retiro de Asbesto",
    "Gestión de Residuos",
    "Evaluaciones Ambientales",
    "Demoliciones",
    "Capacitaciones",
    "Otro"
  ];

  const tamanosEmpresa = [
    "1-10 empleados",
    "11-50 empleados",
    "51-200 empleados",
    "201-500 empleados",
    "Más de 500 empleados"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const contactoPor = [...formData.contactoPor];
      if (checked) {
        contactoPor.push(value);
      } else {
        const index = contactoPor.indexOf(value);
        if (index > -1) {
          contactoPor.splice(index, 1);
        }
      }
      setFormData(prev => ({ ...prev, contactoPor }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Gracias por tu interés. Nos pondremos en contacto contigo pronto.");
    setFormData({
      nombre: "",
      empresa: "",
      telefono: "",
      email: "",
      servicio: "",
      tamanoEmpresa: "",
      sistemaTransaccional: "",
      mensaje: "",
      contactoPor: []
    });
  };

  return (
    <div className="quote-form-container" style={{ paddingTop: '100px' }} id="contact">
      <h2 className="quote-title">¿Quieres recibir una cotización de nuestros servicios?</h2>
      <form onSubmit={handleSubmit} className="quote-form">
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo*</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="empresa">Empresa*</label>
            <input
              type="text"
              id="empresa"
              name="empresa"
              value={formData.empresa}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono*</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="servicio">Servicio de interés*</label>
            <select
              id="servicio"
              name="servicio"
              value={formData.servicio}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">Selecciona un servicio</option>
              {servicios.map(servicio => (
                <option key={servicio} value={servicio}>{servicio}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="tamanoEmpresa">¿Cuál es el tamaño de tu empresa?*</label>
            <select
              id="tamanoEmpresa"
              name="tamanoEmpresa"
              value={formData.tamanoEmpresa}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">Selecciona un rango</option>
              {tamanosEmpresa.map(tamano => (
                <option key={tamano} value={tamano}>{tamano}</option>
              ))}
            </select>
          </div>

          <div className="form-group full-width">
            <label htmlFor="sistemaTransaccional">¿Tu empresa cuenta con sistemas transaccionales?*</label>
            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  id="sistemaTransaccionalSi"
                  name="sistemaTransaccional"
                  value="Si"
                  checked={formData.sistemaTransaccional === "Si"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="sistemaTransaccionalSi">Sí</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="sistemaTransaccionalNo"
                  name="sistemaTransaccional"
                  value="No"
                  checked={formData.sistemaTransaccional === "No"}
                  onChange={handleChange}
                />
                <label htmlFor="sistemaTransaccionalNo">No</label>
              </div>
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="mensaje">Mensaje*</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="form-control"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="form-group full-width">
            <label>¿Cómo prefieres que te contactemos?*</label>
            <div className="checkbox-group">
              <div className="checkbox-option">
                <input
                  type="checkbox"
                  id="contactoEmail"
                  name="contactoPor"
                  value="Email"
                  checked={formData.contactoPor.includes("Email")}
                  onChange={handleChange}
                />
                <label htmlFor="contactoEmail">Email</label>
              </div>
              <div className="checkbox-option">
                <input
                  type="checkbox"
                  id="contactoTelefono"
                  name="contactoPor"
                  value="Teléfono"
                  checked={formData.contactoPor.includes("Teléfono")}
                  onChange={handleChange}
                />
                <label htmlFor="contactoTelefono">Teléfono</label>
              </div>
              <div className="checkbox-option">
                <input
                  type="checkbox"
                  id="contactoWhatsApp"
                  name="contactoPor"
                  value="WhatsApp"
                  checked={formData.contactoPor.includes("WhatsApp")}
                  onChange={handleChange}
                />
                <label htmlFor="contactoWhatsApp">WhatsApp</label>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-danger submit-btn">
          Solicitar Cotización
        </button>
      </form>
    </div>
  );
};

export default Contact;
