import React, { useState } from "react";
import "./services.css";

const Services = () => {
    const [toggleState , setToggleState] = useState (0);

    const toggleTab = (index) => {
        setToggleState (index);
    }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Projetos</h2>
      <span className="section__subtitle">Estes são apenas alguns dos meus projetos</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">
              Meu Portfólio <br /> Pessoal
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

              <h3 className="services__modal-title">Portfólio pessoal (ReactJs)</h3>
              <p className="services__modal-description">
              Neste portfólio, utilizei meus conhecimentos para organizar e apresentar
              de maneira agradável, meu currículo.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    ReacJs foi a tecnologia princial utilizada.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Procurei manter uma oganização no meu CSS puro pois gosto assim.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Botão para download do meu curriculo atualizado, APIs de contato e 
                    boas práticas.
                  </p>
                </li>

                <li>
                  <a className="link__gh" href="https://github.com/HelderLagos/Meu-Portfolio.git" target="_blank">Clique e veja o código aqui</a>
                </li>
              
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">
              Buscador de <br /> CEP (ReactJs)
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

              <h3 className="services__modal-title">Buscador de CEP (ReactJs) </h3>
              <p className="services__modal-description">
                Utilizando uma API Pública, mostro meus conhecimentos de uma maneira
                simples de como consumir e utilizar dados externos interativamente.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    API Públia ViaCEP
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Projeto desenvolvido em ReactJS
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    CSS Puro
                  </p>
                </li>

                <li>
                  <a className="link__gh" href="https://github.com/HelderLagos/Buscador-CEP-ReactJS.git" target="_blank">Clique e veja o código aqui</a>
                  <a className="link__gh" href="https://buscadorcepreact.vercel.app/" target="_blank">Ou utilize ele clicando aqui</a>
                </li>                
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">
              TO-DO <br /> List (NextJS)
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

              <h3 className="services__modal-title">TO-DO List (NextJS)</h3>
              <p className="services__modal-description">
                Neste pequeno projeto, utilizei Next Js para desenvolver uma aplicação de 
                lista de tarefas com opções de adição, remoção e conclusão de tarefas.
                
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Desenvolvido em Next Js.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    CSS Puro.
                  </p>
                </li>              

                <li>
                  <a className="link__gh" href="https://github.com/HelderLagos/Next-todo.git" target="_blank">Clique e veja o código aqui</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <a className="link__gh more__projects" href="https://github.com/HelderLagos" target="_blank"> <i class="uil uil-fire"> CONFIRA MAIS DOS MEUS PROJETOS RECENTES AQUI</i>
      </a>
      
    </section>
  );
};

export default Services;
