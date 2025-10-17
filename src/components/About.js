// src/components/About.js
import React from "react";
import { Shield, Users, Award } from "lucide-react"; // íconos SVG modernos
import ursula from "../assets/img/team/team1.jpg";
import javier from "../assets/img/team/team2.jpg";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container py-5" style={{ marginTop: '80px' }}>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="section-title text-center mb-4">
              <span className="text-danger">Quiénes</span> Somos
            </h2>
            <p className="section-intro text-center mb-5">
              En <strong>UCA Asesorías Ambientales</strong> somos especialistas en el retiro,
              gestión y remediación de materiales con asbesto, además de ofrecer
              asesorías técnicas y capacitaciones a empresas del rubro industrial,
              constructivo y medioambiental.
            </p>
          </div>
        </div>

        <div className="row justify-content-center features-row g-4 mb-5">
          <div className="col-md-4">
            <div className="feature-card text-center p-4">
              <div className="icon-wrapper mb-4">
                <Shield className="feature-icon" size={40} />
              </div>
              <h4 className="feature-title">Seguridad y Cumplimiento</h4>
              <p className="feature-text">
                Garantizamos protocolos bajo norma sanitaria y ambiental vigentes
                para cada operación en terreno.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card text-center p-4">
              <div className="icon-wrapper mb-4">
                <Users className="feature-icon" size={40} />
              </div>
              <h4 className="feature-title">Equipo Especializado</h4>
              <p className="feature-text">
                Profesionales con amplia experiencia en la gestión de residuos y
                control de exposición a contaminantes.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="feature-card text-center p-4">
              <div className="icon-wrapper mb-4">
                <Award className="feature-icon" size={40} />
              </div>
              <h4 className="feature-title">Calidad Certificada</h4>
              <p className="feature-text">
                Cada proyecto se desarrolla con altos estándares técnicos y
                respaldo documental validado por la autoridad sanitaria.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="text-center mb-5">Nuestro Equipo Directivo</h3>
          </div>
        </div>

        <div className="row team-section justify-content-center g-4">
          <div className="col-md-5">
            <div className="team-card text-center">
              <div className="team-image-wrapper mb-4">
                <img
                  src={ursula}
                  alt="Ursula Consuegra Muñoz"
                  className="team-photo"
                />
              </div>
              <h5 className="team-name mb-2">Ursula Consuegra Muñoz</h5>
              <p className="team-position text-danger mb-3">Directora Técnica</p>
              <p className="team-description">
                Lidera el desarrollo técnico y asegura la calidad de nuestros servicios
                con más de 15 años de experiencia en el sector.
              </p>
            </div>
          </div>

          <div className="col-md-5">
            <div className="team-card text-center">
              <div className="team-image-wrapper mb-4">
                <img
                  src={javier}
                  alt="Javier León Coldeira"
                  className="team-photo"
                />
              </div>
              <h5 className="team-name mb-2">Javier León Coldeira</h5>
              <p className="team-position text-danger mb-3">Gerente de Operaciones</p>
              <p className="team-description">
                Responsable de la planificación y ejecución de proyectos, garantizando
                eficiencia y seguridad en cada operación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
