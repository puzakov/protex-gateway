import React from "react";

export default () => { 
  return (
    
    <div className="ui-mobile">

      <header className="ui-mobile__header">
        <span></span>
        <h1 className="ui-mobile__header__logo">Протекс</h1>
      </header>

      <footer className="ui-mobile__footer">
        <button className="ui-mobile__footer__clear">Сбросить PIN</button>
        <button className="ui-mobile__footer__faceid"></button>
      </footer>

      <div className="ui-mobile__main">
        
        <div className="ui-pin">
          <h2 className="ui-pin__title">Введите PIN</h2>
          <div className="ui-pin__progress">
            <div className="ui-pin__progress__item -active"></div>
            <div className="ui-pin__progress__item -active"></div>
            <div className="ui-pin__progress__item"></div>
            <div className="ui-pin__progress__item"></div>
          </div>
          <div className="ui-pin__keyboard">
            <button className="ui-pin__keyboard__item">
              <div>1</div>
              <span>&nbsp;</span>
            </button>
            <button className="ui-pin__keyboard__item">
              <div>2</div>
              <span>ABC</span>
            </button>
            <button className="ui-pin__keyboard__item">
              <div>3</div>
              <span>DEF</span>
            </button>
            <button className="ui-pin__keyboard__item">
              <div>4</div>
              <span>GHI</span>
            </button>
            <button className="ui-pin__keyboard__item">
              <div>5</div>
              <span>JKL</span>
            </button>
            <button className="ui-pin__keyboard__item">
              <div>6</div>
              <span>MNO</span>
            </button>
            <button className="ui-pin__keyboard__item">
              <div>7</div>
              <span>PQRS</span>
            </button>
            <button className="ui-pin__keyboard__item">
              <div>8</div>
              <span>TUV</span>
            </button>
            <button className="ui-pin__keyboard__item">
              <div>9</div>
              <span>WXYZ</span>
            </button>
            <button className="ui-pin__keyboard__item">
              <div>0</div>
            </button>
          </div>
        </div>

      </div>

    </div>

  );
}