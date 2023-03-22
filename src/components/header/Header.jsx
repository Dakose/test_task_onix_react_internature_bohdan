import React from "react";
import { render } from "react-dom";
import { Component } from "react";

function Header () {
    return(
        <>
        <header className="header nav-bar">
    <div className="container nav-bar">
      <a href="#" className="logo">
      <img src={icon} alt="Logo E-M"/>
      </a>
      <nav>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#about" className="nav__link">
              О нас
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link active-link">
              Платформа
            </a>
          </li>
          <li className="nav__item">
            <a href="#cours" className="nav__link">
              Курсы
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Лекции
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Тарифы
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Блог
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu__toggle" id="menu-toggle">
        <i className="bx bx-menu" />
      </div>
    </div>
  </header>
        </>
    );
}

export default Header;