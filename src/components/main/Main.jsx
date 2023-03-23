import React from "react";
import { render } from "react-dom";
import { Component } from "react";
// import images
import icon from '../imgs/icon.png';
import leftfoto from '../imgs/leftfoto.png';
import rightfoto from '../imgs/rightfoto.png';
import one from '../imgs/01.png';
import two from '../imgs/02.png';
import three from '../imgs/03.png';
import four from '../imgs/04.png';
import five from '../imgs/05.png';
import six from '../imgs/06.png';
import seven from '../imgs/07.png';
import eight from '../imgs/08.png';
import nine from '../imgs/09.png';
import ten from '../imgs/10.png';
import eleven from '../imgs/11.png';


function Main () {
    return (
        <>
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
          <img src={leftfoto} alt="LeftFoto"/>
          </div>
        </div>
        <div className="description">
          <div className="mentor">
            <img src={icon} alt="Logo E-M"/>
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
          <img src={rightfoto} alt="rightfoto"/>
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
          <p>Наши преподаватели – профессионалы, которые добились успеха в своей области. Лид-дизайнеры известных студий, маркетологи крупнейших компаний, редакторы популярных медиа: получайте опыт из первых рук, в любое время.</p>
          <p>Кураторы курсов – наши лучшие выпускники, будут помогать и поддерживать вас на протяжении всего обучения.{" "}</p>
          <a href="#">Все преподаватели</a>
        </div>
        <div className="teacher__content">
          <div className="box box1">
            <img src={one} alt="Катя, ведущий дизайнер TailGroup" />
            <p>Катя, ведущий дизайнер TailGroup</p>
          </div>
          <div className="box box1">
            <img src={two} alt="Марина, маркетолог Headers Market" />
            <p>Марина, маркетолог Headers Market</p>
          </div>
          <div className="box box1">
            <img src={three} alt="Сава, PR-менеджер Central Media" />
            <p>Сава, PR-менеджер Central Media</p>
          </div>
          <div className="box box1">
            <img src={four} alt="Паша, основатель LeadCompany" />
            <p>Паша, основатель LeadCompany</p>
          </div>
          <div className="box box1">
            <img src={five} alt="Саша, главный редактор Just Journal" />
            <p>Саша, главный редактор Just Journal</p>
          </div>
          <div className="box box1">
            <img src={six} alt="Лёня, ведущий разработчик Ymail" />
            <p>Лёня, ведущий разработчик Ymail</p>
          </div>
        </div>
      </div>
    </section>
    {/* section form training*/}
    <section className="training">
      <div className="form-training container">
        <div className="part-left">
          <img src={seven} alt="Выбирайте свой формат обучения" />
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
            <img src={eight} alt="Motion design" />
          </a>
          <a href="#">
            <img src={nine} alt="Motion design" />
          </a>
          <a href="#">
            <img src={ten} alt="Motion design" />
          </a>
          <a href="#">
            <img src={eleven} alt="Motion design" />
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
        </>
    );
}

export default Main;