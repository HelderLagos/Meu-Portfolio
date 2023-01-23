import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState , setToggleState] = useState (2);

    const toggleTab = (index) => {
        setToggleState (index);
    }

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualificações</h2>
      <span className="section__subtitle">Minha tragetória de conhecimento
      <br />(Clique nas categorias abaixo)</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={toggleState === 1 ? "qualification__button qualification__active button--flex"
        : "qualification__button button--flex"}

        onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Graduação
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex"
        : "qualification__button button--flex"}
        onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Cursos
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="h3 qualification__title">Análise e Desenvolvimento de sistemas</h3>
                <span className="qualification__subtitle">
                  UniFatecie - Brasil
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2025 (Cursando)
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            
          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">
              <div>
                <h3 className="h3 qualification__title">Curso de GraphQL e Apollo Server + Apollo Client</h3>
                <span className="qualification__subtitle">
                UDEMY
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
                <div></div>

                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="h3 qualification__title">HTML e CSS</h3>
                <span className="qualification__subtitle">
                  UDEMY / Curso em Video
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div>            
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="h3 qualification__title">Next.js e React - Curso Completo - Aprenda com Projetos</h3>
                <span className="qualification__subtitle">
                UDEMY
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
                <div></div>

                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="h3 qualification__title">Curso de JavaScript e TypeScript do básico ao avançado</h3>
                <span className="qualification__subtitle">
                  UDEMY
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div>            
            </div>            

            <div className="qualification__data">
              <div>
                <h3 className="h3 qualification__title">JavaScrips com projetos Reais</h3>
                <span className="qualification__subtitle">
                  UDEMY
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
                <div></div>

                <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="h3 qualification__title">HTML e CSS</h3>
                <span className="qualification__subtitle">
                  UDEMY / Curso em Video
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022
                </div>
              </div>            
            </div>       
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
