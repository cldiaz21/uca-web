// src/components/Home.js
import React from "react";
import Carousel from "./HomeCarousel";
import ClientesCarousel from "./ClientsCarousel";
import AboutHome from "./AboutHome";
import Contact from "./Contact";
import { Building2, Factory, GraduationCap, HardHat, Building, Wrench } from "lucide-react";

const Home = () => {
  return (
    <div>
      {/* Carrusel Principal */}
      <Carousel />

      {/* Sobre Nosotros */}
      <AboutHome />

      {/* Rubros */}
      <section className="rubros-section" id="rubros">
        <div className="container text-center">
          <h2 className="section-title">Sectores Industriales</h2>
          <p className="section-subtitle mb-5">
            Brindamos soluciones especializadas para diversos sectores productivos
          </p>
          <div className="row g-4">
            <div className="col-md-4 col-sm-6">
              <div className="rubro-card">
                <Building2 className="rubro-icon" />
                <h3>Inmobiliaria y Construcción</h3>
                <p>Gestión de materiales peligrosos en proyectos inmobiliarios y obras civiles.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="rubro-card">
                <Factory className="rubro-icon" />
                <h3>Minería</h3>
                <p>Manejo ambiental y disposición segura de residuos mineros.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="rubro-card">
                <Wrench className="rubro-icon" />
                <h3>Demoliciones</h3>
                <p>Control y gestión de residuos en proyectos de demolición.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="rubro-card">
                <GraduationCap className="rubro-icon" />
                <h3>Capacitaciones</h3>
                <p>Formación especializada para profesionales del sector.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="rubro-card">
                <HardHat className="rubro-icon" />
                <h3>Industrial</h3>
                <p>Soluciones para plantas industriales y manufactura.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="rubro-card">
                <Building className="rubro-icon" />
                <h3>Institucional</h3>
                <p>Asesoría a instituciones públicas y privadas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes */}
      <section className="clientes-section" id="clientes">
        <h2 className="section-title text-center mb-5">Nuestros Clientes</h2>
        <ClientesCarousel />
      </section>

      {/* Contacto */}
      <section className="contact-section" id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
