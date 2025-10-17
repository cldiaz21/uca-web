import React from 'react';
import { ShieldCheck, Factory, Building2, Wrench, GraduationCap } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      icon: <ShieldCheck size={48} />, 
      title: 'Retiro de Asbesto', 
      desc: 'Retiro y remediación segura de materiales contaminados siguiendo protocolos estrictos y normativas vigentes.',
      features: [
        'Identificación y evaluación de materiales',
        'Plan de trabajo seguro',
        'Disposición final certificada'
      ]
    },
    { 
      icon: <Factory size={48} />, 
      title: 'Gestión de Residuos', 
      desc: 'Asesoría integral para empresas generadoras y transportistas en el manejo responsable de residuos.',
      features: [
        'Clasificación y segregación',
        'Transporte autorizado',
        'Documentación legal'
      ]
    },
    { 
      icon: <Building2 size={48} />, 
      title: 'Evaluaciones Ambientales', 
      desc: 'Planes de manejo y cumplimiento normativo para asegurar la sustentabilidad de tu proyecto.',
      features: [
        'Estudios de impacto ambiental',
        'Auditorías de cumplimiento',
        'Planes de mitigación'
      ]
    },
    { 
      icon: <Wrench size={48} />, 
      title: 'Demoliciones', 
      desc: 'Supervisión técnica y control de residuos en obra, garantizando seguridad y cumplimiento ambiental.',
      features: [
        'Planificación estratégica',
        'Control de contaminantes',
        'Gestión de escombros'
      ]
    },
    { 
      icon: <GraduationCap size={48} />, 
      title: 'Capacitaciones', 
      desc: 'Formación especializada en seguridad y prevención de riesgos ambientales para tu equipo.',
      features: [
        'Talleres prácticos',
        'Certificaciones oficiales',
        'Actualización normativa'
      ]
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="container" style={{ paddingTop: '100px' }}>
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle text-center mb-5">
          Soluciones integrales en gestión ambiental y manejo de residuos peligrosos
        </p>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <ul className="service-features">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
