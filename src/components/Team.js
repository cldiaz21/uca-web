import React from 'react';
import team1 from '../assets/img/team1.jpg';
import team2 from '../assets/img/team2.jpg';

const Team = () => {
  return (
    <section id="team">
      <div className="container text-center">
        <h2>Nuestro Equipo</h2>
        <div className="row">
          <div className="col-md-6 team-member">
            <img src={team1} alt="Ursula Consuegra Muñoz" />
            <h4>Ursula Consuegra Muñoz</h4>
            <p>Gerente General</p>
          </div>
          <div className="col-md-6 team-member">
            <img src={team2} alt="Javier Leon Coldeira" />
            <h4>Javier Leon Coldeira</h4>
            <p>Gestión de Proyectos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
