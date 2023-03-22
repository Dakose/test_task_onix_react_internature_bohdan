import React from "react";
import { render } from "react-dom";
import { Component } from "react";

function Footer () {
    return(
        <>
        <footer>
    <hr className="line1" />
    <div className="footer-contenair container">
      <div className="footer-content">
        <div className="footer-contact">
          <div className="footer-logo">
            <img src={icon} alt="" />
            <p>E-Mentor</p>
          </div>
          <p>
            Образовательная онлайн-платформа для развития и тренировки навыков в
            сфере информационных технологий
          </p>
          <div className="footer-social">
            <a href="#">
              <i className="bx bxl-facebook-circle" />
            </a>
            <a href="#">
              {" "}
              <i className="bx bxl-vk" />
            </a>
            <a href="#">
              <i className="bx bxl-instagram" />
            </a>
          </div>
        </div>
        <ul id="cours">
          <li className="list-title">Обучение</li>
          <li>
            <a href="#">Курсы</a>
          </li>
          <li>
            <a href="#">Вебинары</a>
          </li>
          <li>
            <a href="#">Тренажеры</a>
          </li>
          <li>
            <a href="#">Воркшопы</a>
          </li>
        </ul>
        <ul id="about">
          <li className="">О нас</li>
          <li>
            <a href="#">О платформе</a>
          </li>
          <li>
            <a href="#">Преподаватели</a>
          </li>
          <li>
            <a href="#">Тарифы</a>
          </li>
          <li>
            <a href="#">Отзывы</a>
          </li>
        </ul>
        <ul id="contact">
          <li className="list-title">Контакты</li>
          <li>
            <a href="#">Связаться с нами</a>
          </li>
          <li>
            <a href="#">Консультация</a>
          </li>
          <li>
            <a href="#">Реквизиты</a>
          </li>
          <li>
            <a href="#">Поддержка</a>
          </li>
        </ul>
        <ul id="faq">
          <li className="list-title">Remake for ONIX</li>
          <li>
            My @email
            <a href="mailto:bohdanholubn@gmail.com">bohdanholubn@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
    <hr className="line2" />
    <div className="footer-author container">
      <p className="year">
        ONIX TEST TASK © 2022 - <span id="current-year">2022</span>
      </p>
      <div className="data">
        <p>Политика обработки персональных данных</p>
        <p>Публичная оферта</p>
      </div>
    </div>
    <hr className="line3" />
    <p className="container dev-container">
      <a
        href="https://www.figma.com/file/8OpZzALnqpoekHAoe9toSk/ementor?node-id=0%3A1"
        target="_blank"
      >
        FIGMA © Пример страницы
      </a>
    </p>
    <p className="container dev-container">
      <a
        href="https://github.com/Dakose/test_task_onix_react_internature_bohdan"
        target="_blank"
      >
        GIT © Bohdan Holybnychyi
      </a>
    </p>
  </footer>
        </>
    );
}

export default Footer;