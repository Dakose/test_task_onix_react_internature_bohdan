import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <header>

      {/* <!-- Header --> */}
          <header class="">
            <div class="container nav-bar">
              <a href="#" class="logo">
                <img src="imgs/icon.png" alt="Logo E-Mentor"></img>
              </a>
      
              <nav>
                <ul class="nav__list">
                  <li class="nav__item">
                    <a href="#about" class="nav__link">О нас</a>
                  </li>
      
                  <li class="nav__item">
                    <a href="#" class="nav__link active-link">Платформа</a>
                  </li>
      
                  <li class="nav__item">
                    <a href="#cours" class="nav__link">Курсы</a>
                  </li>
      
                  <li class="nav__item">
                    <a href="#" class="nav__link">Лекции</a>
                  </li>
      
                  <li class="nav__item">
                    <a href="#" class="nav__link">Тарифы</a>
                  </li>
      
                  <li class="nav__item">
                    <a href="#" class="nav__link">Блог</a>
                  </li>
      
                  <li class="nav__item">
                    <a href="#contact" class="nav__link">Контакты</a>
                  </li>
                </ul>
              </nav>
      
              <div class="menu__toggle" id="menu-toggle">
                <i class="bx bx-menu"></i>
              </div>
            </div>
          </header>

      {/* <!-- main --> */}
          <main>
            {/* <!-- section hero --> */}
          <section class="section__hero">
            <div class="hero container">

              <div class="left-part">
                <div class="social">
                  <a href="#">
                    <i class="bx bxl-facebook-circle"></i>
                  </a>
        
                  <a href="#">
                    <i class="bx bxl-vk"></i>
                  </a>
        
                  <a href="#">
                    <i class="bx bxl-instagram"></i>
                  </a>
                </div>

                <div class="left-img">
                  <img src="imgs/1.png" alt=""></img>
                </div>
              </div>

              <div class="description">
                <div class="mentor">
                  <img src="imgs/icon.png" alt="Logo E-Mentor"></img>
                    <p>E-Mentor</p>
                </div>

                <h1>Образовательная онлайн-платформа</h1>
                <p>Курсы и видео-лекции по дизайну, копирайтингу, SMM, таргету и многим другим направлениям</p>

                <a href="#" class="hero-button">Все направления</a>
                        
              </div>

              <div class="right-part">
                <div class="right-img">
                  <img src="imgs/2.png" alt=""></img>
                </div>
              </div>
                  
            </div>
          </section>

          {/* <!-- section training --> */}
          <section class="section__training" id="down">
            <div class="container">
              <div class="about-training">
                <h1>100+</h1>
                  <p> теоретических и практических курсов для разного уровня</p>
              </div>

              <div class="about-training">
                <h1>3 000</h1>
                  <p>часов видео-лекций и вебинаров от лучших преподавателей</p>
              </div>

              <div class="about-training">
                <h1>15</h1>
                <p> направлений обучения востребованным профессиям</p>
              </div>

              <div class="about-training">
                <h1>2 000</h1>
                  <p>учеников уже занимаются на нашей платформе</p>
              </div>
            </div>
                
          </section>

            
            {/* <!-- section teacher--> */}
          <section class="section__teacher">
            <div class="teacher container">
              <div class="teacher__description">
                <h1>Учитесь у лучших</h1>
                <p>Наши преподаватели – профессионалы, которые добились успеха в своей области. Лид-дизайнеры известных студий,
                            маркетологи крупнейших компаний,
                            редакторы популярных медиа: получайте опыт из первых рук, в любое время.
                </p>
        
                <p>Кураторы курсов – наши лучшие выпускники, будут помогать     и поддерживать вас на протяжении всего обучения. </p>
                <a href="#">Все преподаватели</a>
              </div>
        
              <div class="teacher__content">
                <div class="box box1">
                  <img src="imgs/01.png" alt="Катя, ведущий дизайнер TailGroup"></img>
                  <p>Катя, ведущий дизайнер TailGroup</p>
                </div>
        
                <div class="box box1">
                  <img src="imgs/02.png" alt="Марина, маркетолог Headers Market"></img>
                  <p>Марина, маркетолог Headers Market</p>
                </div>
        
                <div class="box box1">
                  <img src="imgs/03.png" alt="Сава, PR-менеджер Central Media"></img>
                  <p>Сава, PR-менеджер Central Media</p>
                </div>
        
                <div class="box box1">
                  <img src="imgs/04.png" alt="Паша, основатель LeadCompany"></img>
                  <p>Паша, основатель LeadCompany</p>
                </div>
        
                <div class="box box1">
                  <img src="imgs/05.png" alt="Саша, главный редактор Just Journal"></img>
                  <p>Саша, главный редактор Just Journal</p>
                </div>
        
                <div class="box box1">
                  <img src="imgs/06.png" alt="Лёня, ведущий разработчик Ymail"></img>
                  <p>Лёня, ведущий разработчик Ymail</p>
                </div>
              </div>
            </div>
          </section>
        
            {/* <!-- section form training--> */}
          <section class="training">
            <div class="form-training container">
              <div class="part-left">
                <img src="imgs/07.png" alt="Выбирайте свой формат обучения"></img>
                <div class="dashed-contour"></div>
              </div>
        
              <div class="part-right">
                <h1>Выбирайте свой формат обучения</h1>
                <p>Смотрите видео-лекции в удобное для вас время, обучайтесь на тренажере, участвуйте в интенсивных воркшопах
                            с командой или проходите курс с гибким расписанием.
                            На нашей платформе каждый найдет подходящий формат.
                </p>
                <a href="#">Все курсы</a>
        
              </div>
            </div>
          </section>
        
            {/* <!-- section courses--> */}
          <section class="cours">
            <div class="cours-section container">
              <h1>Популярные курсы</h1>
              <div class="cours-content">
                <a href="#">
                  <img src="imgs/08.png" alt="Motion design"></img>
                </a>
            
                <a href="#">
                  <img src="imgs/09.png" alt="Motion design"></img>
                </a>
            
                <a href="#">
                  <img src="imgs/10.png" alt="Motion design"></img>
                </a>
            
                <a href="#">
                  <img src="imgs/11.png" alt="Motion design"></img>
                </a>
              </div>
        
              <a href="#cours" class="btn-cours">Все курсы</a>
        
            </div>
          </section>
        
          {/* <!-- section consulting--> */}
          <section class="consulting">
            <div class="section-consulting container">
              <div class="gauche"></div>
              <div class="droite">
                <h1>Присоединяйтесь  к E-Mentor сейчас</h1>
                <p>Выберите подходящий тариф и формат обучения, пройдите 2 урока и мы подарим вам дополнительные лекции по любому направлению бесплатно!</p>
                <a href="#">Выбрать тариф</a>
              </div>
            </div>
          </section>
          </main>

      {/* <!-- section footer--> */}
          <footer>
          <hr class="line1">
          <div class="footer-contenair container">
            <div class="footer-content">
              <div class="footer-contact">
                <div class="footer-logo">
                  <img src="imgs/icon.png" alt=""></img>
                  <p>E-Mentor</p>
                </div>

                <p>Образовательная онлайн-платформа для развития и тренировки навыков
                            в сфере информационных технологий
                        </p>

                <div class="footer-social">
                  <a href="#"><i class="bx bxl-facebook-circle"></i></a>
                  <a href="#"> <i class="bx bxl-vk"></i></a>
                  <a href="#"><i class="bx bxl-instagram"></i></a>
                </div> 
              </div>

              <ul id="cours">
                <li class="list-title">Обучение</li>
                <li><a href="#">Курсы</a></li>
                <li><a href="#">Вебинары</a></li>
                <li><a href="#">Тренажеры</a></li>
                <li><a href="#">Воркшопы</a></li>
              </ul>

              <ul id="about">
                <li class="">О нас</li>
                <li><a href="#">О платформе</a></li>
                <li><a href="#">Преподаватели</a></li>
                <li><a href="#">Тарифы</a></li>
                <li><a href="#">Отзывы</a></li>
              </ul>

              <ul id="contact">
                <li class="list-title">Контакты</li>
                <li><a href="#">Связаться с нами</a></li>
                <li><a href="#">Консультация</a></li>
                <li><a href="#">Реквизиты</a></li>
                <li><a href="#">Поддержка</a></li>
              </ul>

              <ul id="faq">
                <li class="list-title">Remake for ONIX</li>
                <li>My @email 
                  <a href="mailto:bohdanholubn@gmail.com">bohdanholubn@gmail.com</a>
                </li>
              </ul>


              </div>
            </div>

            <hr class="line2">

            <div class="footer-author container">
              <p class="year">ONIX TEST TASK © 2022 - <span id="current-year">2022</span></p>
                <div class="data">
                  <p>Политика обработки персональных данных</p>
                  <p>Публичная оферта</p>
                </div>
            </div>

            <hr class="line3">
            <p class="container dev-container">
                
              <a href="https://www.figma.com/file/8OpZzALnqpoekHAoe9toSk/ementor?node-id=0%3A1" target="_blank">FIGMA © Пример страницы</a>
            </p>
            <p class="container dev-container">
              <a href="https://github.com/Dakose/test_task_onix_react_internature_bohdan" target="_blank">GIT © Bohdan Holybnychyi</a>
                
            </p>
            
          </footer>


          <a href="#" class="up-btn">
            <i class="bx bx-up-arrow-alt"></i>
          </a>

      {/* <!-- cdn javascript --> */}
          <script src="js/index.js" defer=""></script>
        
        </body>
      </header>
    
    
    </div>
  );
}

export default App;
