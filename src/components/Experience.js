import React from 'react';

const Experience = () => (
  <section id="experience" className="experience-section">
    <div className="container">
      <h2 className="section-title">Áreas de Experiencia</h2>
      <div className="row text-center">
        {['Minería', 'Constructoras e Inmobiliarias', 'Demoliciones', 'Capacitaciones', 'Otros'].map((area, i) => (
          <div key={i} className="col-md-3 mb-3">
            <div className="experience-card">{area}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
