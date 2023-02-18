import React from "react";
import "./HeaderHzb.css";
import logo from "./img/logo_ua.png";
import language from "./img/ua.png";
import profile from "./img/profile.png";
import basket from "./img/3081817.png";

function HeaderHzb() {
  return (
    <header className="header container">
      <div className="header_logo">
        <img src={logo} alt="Логотип" />
      </div>
      <nav className="header_nav">
        <ul className="menu">
          <li className="nav_items">
            <a href="#">Інформація</a>
          </li>
          <li>
            <a href="#">Продукція</a>
          </li>
          <li>
            <a href="#">Про Нас</a>
          </li>
          <li>
            <a href="#">Контакти</a>
          </li>
        </ul>
      </nav>
      <div className="header_box">
        <div className="header_nav_img ">
          <img className="header_box_img" src={language} alt="language" />
        </div>
        <div>
          <img className="header_box_img" src={profile} alt="profile" />
        </div>
        <div>
          <img className="header_box_img" src={basket} alt="basket" />
        </div>
      </div>
    </header>
  );
}

export default HeaderHzb;
