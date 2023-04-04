import React from "react";
import { ReactDOM } from 'react';
import PropTypes from 'prop-types';
import { render } from "react-dom";
import { Component } from "react";
import { StarWars } from "../StarWars/StarWars";
import icon from '../imgs/icon.png';
import { ThemeSwitcher, themeSwitcher } from "../buttons/themeSwitcher/ThemeSwitcher.jsx";

function Header () {
    return(
        <>
        <header className="header nav-bar">
    <div className="container nav-bar">
      <a href="#section__hero" className="logo">
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
          <li className="nav__item">
            <a href="/StarWars" className="nav__link">StarWars</a>
          </li>
          <li className="theme-switcher">
            <ThemeSwitcher />
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