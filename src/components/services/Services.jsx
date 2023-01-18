import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState , setToggleState] = useState (0);

    const toggleTab = (index) => {
        setToggleState (index);
    }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Serviços</h2>
      <span className="section__subtitle">O que estou oferecendo</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Produto <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(1)}>
            Ver Mais
            <i
              className="uil uil-arrow-right 
            services__button-icon"
            ></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>

            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)}
                className="uil uil-times 
                    services__modal-close"
              ></i>

              <h3 className="services__modal-title">Produto Designer</h3>
              <p className="services__modal-description">
                Trabalho com mais de 3 anos de experiência. Providenciando
                trabalhos de qualidade para clientes e companias.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desenvolvo interfaces de usuário.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Crio elementos interativos UX.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desenvolvimento de páginas web.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Posiciono a marca da sua empresa.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desig e mockups dos produtos para sua empresa.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Ui/Ux <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(2)}>
            Ver Mais
            <i
              className="uil uil-arrow-right 
            services__button-icon"
            ></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)}
                className="uil uil-times 
                    services__modal-close"
              ></i>

              <h3 className="services__modal-title">Ui/Ux Designer</h3>
              <p className="services__modal-description">
                Trabalho com mais de 3 anos de experiência. Providenciando
                trabalhos de qualidade para clientes e companias.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desenvolvo interfaces de usuário.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Crio elementos interativos UX.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desenvolvimento de páginas web.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Posiciono a marca da sua empresa.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desig e mockups dos produtos para sua empresa.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              Visual <br /> Designer
            </h3>
          </div>
          <span className="services__button" onClick={() => toggleTab(3)}>
            Ver Mais
            <i
              className="uil uil-arrow-right 
            services__button-icon"
            ></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)}
                className="uil uil-times 
                    services__modal-close"
              ></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Trabalho com mais de 3 anos de experiência. Providenciando
                trabalhos de qualidade para clientes e companias.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desenvolvo interfaces de usuário.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Crio elementos interativos UX.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desenvolvimento de páginas web.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Posiciono a marca da sua empresa.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desig e mockups dos produtos para sua empresa.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
