import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">
          Design, Fotografia, FScial midia e Tecnologias
        </span>
      </div>

      <div className="about__box">
        <i class="bx bx-certification about__icon"></i>

        <h3 className="h3b about__title">Certificações e Cursos</h3>
        <span className="about__subtitle">
          JavaScript | ReactJS | NextJS | Git | GraphQL | Framework diversos
        </span>
      </div>

      <div className="about__box">
        <i class="bx bxs-graduation about__icon"></i>

        <h3 className="h3 about__title">Graduação</h3>
        <span className="graduation">
          Análise e Desenvolvimento de Sistemas
        </span>
      </div>
    </div>
  );
};

export default Info;
