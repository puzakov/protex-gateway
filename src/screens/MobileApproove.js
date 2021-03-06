import React, { Component } from "react";

class MobileApproove extends Component {
  state = { step: 1 };

  findStepCls = () => {
    const { step } = this.state;
    switch (step) {
      default:
      case 1:
        return "";
      case 2:
        setTimeout(() => {
          this.setState({ step: 3 });
        }, 2000);
        return "-show-loader";
      case 3:
        return "-show-success";
    }
  };

  render() {
    return (
      <div className="ui-mobile">
        <header className="ui-mobile__header">
          <span></span>
          <h1 className="ui-mobile__header__logo">Протекс</h1>
        </header>

        <footer className="ui-mobile__button">
          <button
            className="ui-button -forward"
            onClick={() => {
              this.setState({ step: 2 }, () => {
                const response = fetch(
                  "https://uecolog-api.herokuapp.com/protex/step/3"
                ).then(response => response.json());
              });
            }}
          >
            Подтвердить
          </button>
        </footer>

        <div className={`ui-mobile__main ${this.findStepCls()}`}>
          <header className="ui-card__main -no-paddings">
            <div className="ui-card__main__name">
              Пучкин Вячеслав Витальевич
            </div>
            <div className="ui-kv">
              <label>ИНН:</label>
              <span>590584994669</span>
            </div>
          </header>

          <div className="ui-card__what">
            <div className="ui-card__what__name">
              Заявление на регистрацию ККТ
            </div>
            <div className="ui-card__what__from">Запрос с nalog.ru</div>
          </div>

          <div className="ui-signature">
            <input type="radio" name="signature" defaultChecked />
            <span className="ui-signature__background"></span>
            <span className="ui-signature__name">
              ИП Пучкин Вячеслав Витальевич
            </span>
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
        <div className="ui-loader ui-main__loader">
          <div className="ui-loader__indicator"></div>
          <div className="ui-loader__title">Обработка запроса</div>
          <div className="ui-loader__subtitle">
            Запрос в Удостоверяющий Центр...
          </div>
        </div>

        <div className="ui-success ui-main__success">
          <div className="ui-success__indicator"></div>
          <div className="ui-success__title">Операция подтверждена</div>
          <div className="ui-success__subtitle">
            Документов на подпись не найдено
          </div>
        </div>
      </div>
    );
  }
}

export default MobileApproove;
