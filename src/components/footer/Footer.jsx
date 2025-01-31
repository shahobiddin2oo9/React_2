import React, { Component } from "react";
import "../header/Header.scss";
import "../footer/Footer.scss";
import footer_logo from "../assets/logo.svg";
import footer_img from "../assets/img.svg";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <div className="container">
            <div className="logo_imges">
              <img src={footer_logo} alt="No img?" />
              <img src={footer_img} alt="No img?" />
            </div>
            <hr />
            <div className="footer_text">
              <ul>
                <li>
                  <p>Продукция</p>
                  <a href="#/">Ламинатные тубы</a>
                  <a href="#/">Экструзионные тубы</a>
                  <a href="#/">Другая упаковка</a>
                </li>
                <li>
                  <p>Компания</p>
                  <a href="#/">О нас</a>
                  <a href="#/">Наша команда</a>
                  <a href="#/">Сертификаты</a>
                </li>
                <li>
                  <p>Разделы</p>
                  <a href="#/">Контакты</a>
                  <a href="#/">Новости</a>
                  <a href="#/">Вакансии</a>
                </li>
                <ol>
                  <li>
                    <p>Беларусь</p>
                    <a href="#/">+375 (17) 270 53 77</a>
                    <a href="#/">+375 (17) 270 53 78</a>
                  </li>
                  <li>
                    <p>Европа</p>
                    <a href="#/">+48 73 1111 044</a>
                  </li>
                  <li>
                    <p>Москва</p>
                    <a href="#/">+7 (495) 280 73 44</a>
                    <a href="#/">+7 (495) 280 73 44</a>
                  </li>
                  <li>
                    <p>Екатеринбург</p>
                    <a href="#/">+7 (343) 346 82 06</a>
                  </li>
                </ol>
              </ul>
              <h3>
                © 2022 Leangroup. All Rights Reserved. Разработка и продвижение
                сайтов SkyWeb.by
              </h3>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
