import React from 'react';
import { Shield, Users, Award, Leaf } from 'lucide-react';

const AboutHome = () => {
  const stats = [
    {
      icon: <Shield size={32} />,
      value: "10+",
      label: "Años de Experiencia",
    },
    {
      icon: <Users size={32} />,
      value: "500+",
      label: "Clientes Satisfechos",
    },
    {
      icon: <Award size={32} />,
      value: "100%",
      label: "Certificados",
    },
    {
      icon: <Leaf size={32} />,
      value: "1000+",
      label: "Proyectos Completados",
    },
  ];

  return (
    <section className="about-home-section" id="about-home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="section-title text-start">Experiencia y Compromiso Ambiental</h2>
            <p className="about-description">
              En UCA SPA, nos dedicamos a proporcionar soluciones integrales en gestión ambiental y manejo de residuos peligrosos,
              con un enfoque especial en el retiro seguro de asbesto. Nuestra experiencia de más de una década nos posiciona
              como líderes en el sector.
            </p>
            <p className="about-description">
              Contamos con un equipo altamente calificado y certificado, comprometido con la excelencia en cada proyecto.
              Utilizamos tecnología de punta y seguimos estrictos protocolos de seguridad para garantizar resultados óptimos.
            </p>
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Personal certificado y especializado</div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Tecnología y equipamiento de última generación</div>
              </div>
              <div className="feature">
                <div className="feature-icon">✓</div>
                <div className="feature-text">Cumplimiento de normativas nacionales e internacionales</div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;