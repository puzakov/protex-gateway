import React from "react";
import { Link } from "react-router-dom";

export default () => { 
  return (
    <div className="ui-popup">
      <div className="ui-popup__inner -gosuslugi">
      
        <div className="gu">
        
          <header className="gu__header">
            <h1 className="gu__header__logo">Госуслуги</h1>
            <h2 className="gu__header__title">
              Единая система<br/>
              идентификации и аутентификации
            </h2>
          </header>

          <div className="gu__title">Вход</div>

          <nav className="gu__tabs">
            <div className="gu__tabs__item -active">Телефон или почта</div>
            <div className="gu__tabs__item">СНИЛС</div>
          </nav>

          <div className="gu__form">
          
            <div className="gu__form__item">
              <input type="text" className="gu-input" placeholder="Мобильный телефон или почта"/>
            </div>
          
            <div className="gu__form__item">
              <input type="password" className="gu-input" placeholder="Пароль"/>
            </div>

            <div className="gu__form__item">
              <div className="gu-checkbox">
                <input type="checkbox"/>
                <label>Чужой компьютер</label>
              </div>
            </div>

            <div className="gu__form__item -margin-top -to-center">
              <Link className="gu-button" to="/certs">Войти</Link>
              <a href="https://esia.gosuslugi.ru/recovery" className="gu-link">Я не знаю пароль</a>
            </div>

            <div className="gu__form__item -margin-top -to-center">
              <p className="gu-paragraph">
                <a href="https://esia.gosuslugi.ru/registration/" className="gu-link">Зарегистрируйтесь</a>
                &nbsp;
                для полного доступа к сервисам
              </p>
              <p className="gu-paragraph">
                <a href="#" className="gu-link">Войти с помощью электронной подписи</a>
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}