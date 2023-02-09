import React from 'react';
import {render} from 'react-dom';
import './App.jsx';

function App() {
  return (
    <>
    
  {/* Header */}
  <header className="header nav-bar">
    <div className="container nav-bar">
      <a href="#" className="logo">
        <img src="./imgs/icon.png" alt="Logo E-Mentor" />
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
  {/* main */}
  <main>
    {/* section hero */}
    <section className="section__hero">
      <div className="hero container">
        <div className="left-part">
          <div className="social">
            <a href="#">
              <i className="bx bxl-facebook-circle" />
            </a>
            <a href="#">
              <i className="bx bxl-vk" />
            </a>
            <a href="#">
              <i className="bx bxl-instagram" />
            </a>
          </div>
          <div className="left-img">
            <img src="imgs/1.png" alt="" />
          </div>
        </div>
        <div className="description">
          <div className="mentor">
            <img src="imgs/icon.png" alt="Logo E-Mentor" />
            <p>E-Mentor</p>
          </div>
          <h1>Образовательная онлайн-платформа</h1>
          <p>
            Курсы и видео-лекции по дизайну, копирайтингу, SMM, таргету и многим
            другим направлениям
          </p>
          <a href="#" className="hero-button">
            Все направления
          </a>
        </div>
        <div className="right-part">
          <div className="right-img">
            <img src="imgs/2.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    {/* section training */}
    <section className="section__training" id="down">
      <div className="container">
        <div className="about-training">
          <h1>100+</h1>
          <p> теоретических и практических курсов для разного уровня</p>
        </div>
        <div className="about-training">
          <h1>3 000</h1>
          <p> часов видео-лекций и вебинаров от лучших преподавателей</p>
        </div>
        <div className="about-training">
          <h1>15</h1>
          <p> направлений обучения востребованным профессиям</p>
        </div>
        <div className="about-training">
          <h1>2 000</h1>
          <p>учеников уже занимаются на нашей платформе</p>
        </div>
      </div>
    </section>
    {/* section teacher*/}
    <section className="section__teacher">
      <div className="teacher container">
        <div className="teacher__description">
          <h1>Учитесь у лучших</h1>
          <p>
            Наши преподаватели – профессионалы, которые добились успеха в своей
            области. Лид-дизайнеры известных студий, маркетологи крупнейших
            компаний, редакторы популярных медиа: получайте опыт из первых рук,
            в любое время.
          </p>
          <p>
            Кураторы курсов – наши лучшие выпускники, будут помогать и
            поддерживать вас на протяжении всего обучения.{" "}
          </p>
          <a href="#">Все преподаватели</a>
        </div>
        <div className="teacher__content">
          <div className="box box1">
            <img src="imgs/01.png" alt="Катя, ведущий дизайнер TailGroup" />
            <p>Катя, ведущий дизайнер TailGroup</p>
          </div>
          <div className="box box1">
            <img src="imgs/02.png" alt="Марина, маркетолог Headers Market" />
            <p>Марина, маркетолог Headers Market</p>
          </div>
          <div className="box box1">
            <img src="imgs/03.png" alt="Сава, PR-менеджер Central Media" />
            <p>Сава, PR-менеджер Central Media</p>
          </div>
          <div className="box box1">
            <img src="imgs/04.png" alt="Паша, основатель LeadCompany" />
            <p>Паша, основатель LeadCompany</p>
          </div>
          <div className="box box1">
            <img src="imgs/05.png" alt="Саша, главный редактор Just Journal" />
            <p>Саша, главный редактор Just Journal</p>
          </div>
          <div className="box box1">
            <img src="imgs/06.png" alt="Лёня, ведущий разработчик Ymail" />
            <p>Лёня, ведущий разработчик Ymail</p>
          </div>
        </div>
      </div>
    </section>
    {/* section form training*/}
    <section className="training">
      <div className="form-training container">
        <div className="part-left">
          <img src="imgs/07.png" alt="Выбирайте свой формат обучения" />
          <div className="dashed-contour" />
        </div>
        <div className="part-right">
          <h1>Выбирайте свой формат обучения</h1>
          <p>
            Смотрите видео-лекции в удобное для вас время, обучайтесь на
            тренажере, участвуйте в интенсивных воркшопах с командой или
            проходите курс с гибким расписанием. На нашей платформе каждый
            найдет подходящий формат.
          </p>
          <a href="#">Все курсы</a>
        </div>
      </div>
    </section>
    {/* section courses*/}
    <section className="cours">
      <div className="cours-section container">
        <h1>Популярные курсы</h1>
        <div className="cours-content">
          <a href="#">
            <img src="imgs/08.png" alt="Motion design" />
          </a>
          <a href="#">
            <img src="imgs/09.png" alt="Motion design" />
          </a>
          <a href="#">
            <img src="imgs/10.png" alt="Motion design" />
          </a>
          <a href="#">
            <img src="imgs/11.png" alt="Motion design" />
          </a>
        </div>
        <a href="#cours" className="btn-cours">
          Все курсы
        </a>
      </div>
    </section>
    {/* section consulting*/}
    <section className="consulting">
      <div className="section-consulting container">
        <div className="gauche" />
        <div className="droite">
          <h1>Присоединяйтесь к E-Mentor сейчас</h1>
          <p>
            Выберите подходящий тариф и формат обучения, пройдите 2 урока и мы
            подарим вам дополнительные лекции по любому направлению бесплатно!
          </p>
          <a href="#">Выбрать тариф</a>
        </div>
      </div>
    </section>
  </main>
  {/* section footer*/}
  <footer>
    <hr className="line1" />
    <div className="footer-contenair container">
      <div className="footer-content">
        <div className="footer-contact">
          <div className="footer-logo">
            <img src="imgs/icon.png" alt="" />
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
  <a href="#" className="up-btn">
    <i className="bx bx-up-arrow-alt" />
  </a>
</>

  );
}

export default App;
