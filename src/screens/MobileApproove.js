import React from "react";

export default () => { 
  return (
    
    <div className="ui-mobile">

      <header className="ui-mobile__header">
        <span></span>
        <h1 className="ui-mobile__header__logo">Протекс</h1>
      </header>

      <footer className="ui-mobile__button">
        <button className="ui-button -forward">Подтвердить</button>
      </footer>

      <div className="ui-mobile__main">
        
          <header className="ui-card__main -no-paddings">
            <div className="ui-card__main__name">Пучкин Вячеслав Витальевич</div>
            <div className="ui-kv">
              <label>ИНН:</label>
              <span>590584994669</span>
            </div>
          </header>

          <div className="ui-card__what">
            <div className="ui-card__what__name">Заявление на регистрацию ККТ</div>
            <div className="ui-card__what__from">Запрос с nalog.ru</div>
          </div>
          
          <div className="ui-signature">
            <input type="radio" name="signature" checked/>
            <span className="ui-signature__background"></span>
            <span className="ui-signature__name">ИП Пучкин Вячеслав Витальевич</span>
            <span className="ui-signature__info">
              <span className="ui-kv">
                <label>ИНН:</label>
                <span>590584994669</span>
              </span>
              <span className="ui-kv">
                <label>ОГРНИП:</label>
                <span>590584994669</span>
              </span>
            </span>
          </div>
        
      </div>

    </div>

  );
}