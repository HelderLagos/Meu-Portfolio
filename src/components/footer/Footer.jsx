import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Helder Lagos</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Projetos
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>
        <span className="footer__copy">© Criado por Helder Lagos. Todos os direitos reservados</span>
      </div>
    </footer>
  );
};

export default Footer;
