import React, { Component } from "react";
import "./Header.scss";
import "./main";
import logo from "../assets/logo.svg";
import vidoe from "../assets/video.svg";
import sad from "../assets/21.png";
import sade from "../assets/3.png";
import people from "../assets/peole_1.svg";
import q from "../assets/q.png";
import d from "../assets/d.svg";
import g from "../assets/g.png";
import v from "../assets/v.png";
import footer_card_2 from "../assets/footer_card.svg";
import footer_card_3 from "../assets/g.svg";
import footer_card_4 from "../assets/footer_card_4.svg";

export class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="container header">
            <div className="nav-brend">
              <img src={logo} alt="no img?" />
            </div>
            <div className="nav-middle">
              <ul>
                <li>
                  <a href="/#">Продукция</a>
                  <hr />
                  <a href="/#">Сертификаты</a>
                  <hr />
                  <a href="/#">Наша команда</a>
                  <hr />
                  <a href="/#">О нас</a>
                  <hr />
                  <a href="/#">Новости</a>
                  <hr />
                  <a href="/#">Вакансии </a>
                  <hr />
                  <a href="/#">Контакты</a>
                  <hr />
                </li>
              </ul>
            </div>
            <div className="nav-btn">
              <a href="/#">RU</a>
              <hr />
              <a href="/#">EN</a>
            </div>
          </div>
        </header>
        <main>
          <div className="navbar container">
            <div className="left">
              <p>LEANGROUP - тубы и этикетки</p>
              <h4>Ламинатные тубы</h4>
              <h2>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY Do-it-Yourself.
              </h2>
              <button>Каталог</button>
            </div>
          </div>
          <div className="container">
            <div className="one_pg">
              <h1>
                О компании <span>LEANGROUP</span>
              </h1>
              <div className="one_pg_1">
                <div className="one_pg-1">
                  <img src={vidoe} alt="no img?" />
                </div>
                <div className="one_pg-2">
                  <p>
                    Компания ООО «ЛеанГрупп» начала свою деятельность в 1999
                    году и на сегодняшний день является ведущей компанией по
                    производству ламинатных и экструзионных туб. <br /> <br />
                    Имея две технологии – для производства ламинатных и
                    экструзионных туб, мы предлагаем вам широкий спектр
                    возможностей. Большим преимуществом является собственный
                    печатный цех в ламинате и in-line печать в экструзии с
                    возможностью различных дополнительных опций декора. Особое
                    внимание уделяется работе с поставщиками для контроля и
                    поддержания качества производимой нами продукции. <br />
                    <br /> С января 2018 года компания стала членом Европейской
                    Ассоциации производителей туб (ETMA), что подтверждает
                    сильную позицию бренда и на рынке Европы.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="cardsss">
              <h1>
                Качество продукции подтверждают <span>сертификаты</span>
              </h1>
              <div className="cards">
                <img src={sad} alt="no img?" />
                <img src={sad} alt="no img?" />
                <img src={sad} alt="no img?" />
                <img src={sad} alt="no img?" />
                <img src={sad} alt="no img?" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="two_pg">
              <h1>
                Наша <span>продукция</span>
              </h1>
              <div className="two_pg_btn">
                <button>Ламинатные тубы</button>
                <button>Экструзионные тубы</button>
                <button>Другая упаковка</button>
              </div>
              <div className="two_pg_cards">
                <img src={sade} alt="no img?" />
                <img src={sade} alt="no img?" />
                <img src={sade} alt="no img?" />
                <img src={sade} alt="no img?" />
                <img src={sade} alt="no img?" />
              </div>
              <button className="btn_Eww">Перейти в каталог</button>
            </div>
          </div>
          <div className="container">
            <div className="forom_img">
              <h1>
                Получить подробную <span>информацию</span>
              </h1>
              <p>
                Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее
                время
              </p>
              <form action="https://openshop.uz/?lang=en&srsltid=AfmBOor3mwYBBnqrEKEH1IP_4oqCvuTBYrxeH2tXyVqv_D8w0seWdcdC">
                <div className="uses">
                  <div className="use_1">
                    <input type="text" placeholder="Ваше имя" />
                  </div>
                  <div className="use_2">
                    <input type="text" placeholder="+375 (29) 0000000" />
                  </div>
                </div>
              </form>
              <div>
                <textarea
                  className="textArea"
                  placeholder="Комментарий"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="one_pg-people">
              <h1>
                Наша <span>команда</span>
              </h1>
              <div className="people-cards">
                <div className="people_card">
                  <img src={people} alt="" />
                  <h5>Войнич Дарья</h5>
                  <p>Заместитель директора по продажам</p>
                  <span>+375 (17) 270-53-77 (317)</span>
                </div>
                <div className="people_card">
                  <img src={q} alt="" />
                  <h5>Войнич Дарья</h5>
                  <p>Заместитель директора по продажам</p>
                  <span>+375 (17) 270-53-77 (317)</span>
                </div>
                <div className="people_card">
                  <img src={d} alt="" />
                  <h5>Войнич Дарья</h5>
                  <p>Заместитель директора по продажам</p>
                  <span>+375 (17) 270-53-77 (317)</span>
                </div>
                <div className="people_card">
                  <img src={g} alt="" />
                  <h5>Войнич Дарья</h5>
                  <p>Заместитель директора по продажам</p>
                  <span>+375 (17) 270-53-77 (317)</span>
                </div>
                <div className="people_card">
                  <img src={v} alt="" />
                  <h5>Войнич Дарья</h5>
                  <p>Заместитель директора по продажам</p>
                  <span>+375 (17) 270-53-77 (317)</span>
                </div>
              </div>
              <button>Наша команда</button>
            </div>
          </div>
          <div className="container">
            <div className="footer">
              <h1>Новости</h1>
              <div className="footer_cards">
                <div className="footer_card">
                  <img src={footer_card_2} alt="No img?" />
                  <h6>28.01.2022</h6>
                  <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
                </div>
                <div className="footer_card footer_card_2">
                  <img src={footer_card_3} alt="No img?" />
                  <h6>21.01.2022</h6>
                  <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
                </div>
                <div className="footer_card footer_card_3">
                  <img src={footer_card_4} alt="No img?" />
                  <h6>16.12.2021</h6>
                  <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
                </div>
              </div>
              <button>Все новости</button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default Header;
