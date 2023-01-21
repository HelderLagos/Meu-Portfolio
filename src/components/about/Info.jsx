import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experiência</h3>
        <span className="about__subtitle">
          Desenvolvimento Fullstack
        </span>
      </div>

      <div className="about__box">
        <i class="bx bx-certification about__icon"></i>

        <h3 className="h3b about__title">Especialidade</h3>
        <span className="about__subtitle">
          JavaScript e ReactJs
        </span>
      </div>

      <div className="about__box">
        <i class="bx bxs-graduation about__icon"></i>

        <h3 className="h3 about__title">Graduação</h3>
        <span className="graduation">
          Analise e desenvolvimento de sistemas
        </span>
      </div>
    </div>
  );
};

export default Info;
