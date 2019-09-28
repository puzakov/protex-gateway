import React, { Component } from "react";

class CertsList extends Component {
  state = { step: 1 };

  interval1 = null;
  interval2 = null;

  findStepCls = step => {
    switch (step) {
      default:
      case 1:
        return "";
      case 2:
        if (this.interval1 === null) {
          this.interval1 = setInterval(async () => {
            const response = await fetch(
              "https://uecolog-api.herokuapp.com/protex/status"
            );
            const result = await response.json();
            if (result.step == 2) {
              this.setState({ step: 3 });
              clearInterval(this.interval1);
            }
          }, 2000);
        }
        return "-show-qr";
      case 3:
          if (this.interval2 === null) {
            this.interval2 = setInterval(async () => {
              const response = await fetch(
                "https://uecolog-api.herokuapp.com/protex/status"
              );
              const result = await response.json();
              if (result.step == 3) {
                this.setState({ step: 4 });
                clearInterval(this.interval2);
              }
            }, 2000);
          }
          return "-show-loader";
      case 4:
        setTimeout(() => {
          window.close();
        }, 2000);
        return "-show-success";
    }
  };

  render() {
    const curentStepCls = this.findStepCls(this.state.step);

    return (
      <div className="ui-popup">
        <div className="ui-popup__inner">
          <div className="ui-popup__logo">Протекс</div>

          <div className="ui-card">
            <header className="ui-card__main">
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

            <div className={`ui-card__switcher ${curentStepCls}`}>
              {/*
          Доп. классы (переключают по шагам, могут использоваться вместе):
          -show-qr
          -show-loader
          -show-success
          */}

              <div className="ui-card__switcher__item" data-id="list">
                <div className="ui-card__action">
                  Выберите ЭЦП для подписания документа
                </div>

                <div
                  className="ui-list"
                  onClick={() => {
                    this.setState({ step: 1 });
                  }}
                >
                  <div className="ui-signature">
                    <input type="radio" name="signature" />
                    <span className="ui-signature__background"></span>
                    <span className="ui-signature__name">
                      Пучкин Вячеслав Витальевич
                    </span>
                    <span className="ui-signature__info">
                      <span className="ui-kv">
                        <label>ИНН:</label>
                        <span>590584994669</span>
                      </span>
                    </span>
                  </div>

                  <div className="ui-signature">
                    <input type="radio" name="signature" />
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

                  <div className="ui-signature">
                    <input type="radio" name="signature" />
                    <span className="ui-signature__background"></span>
                    <span className="ui-signature__name">
                      ООО «Интернет-прорыв»
                    </span>
                    <span className="ui-signature__info">
                      <span className="ui-kv">
                        <label>Роль:</label>
                        <span>Генеральный директор</span>
                      </span>
                      <span className="ui-kv">
                        <label>ИНН:</label>
                        <span>2465077031</span>
                      </span>
                      <span className="ui-kv">
                        <label>КПП:</label>
                        <span>246501001</span>
                      </span>
                      <span className="ui-kv">
                        <label>ОГРН:</label>
                        <span>1032402649872</span>
                      </span>
                    </span>
                  </div>
                </div>

                <footer className="ui-card__footer">
                  <button
                    className="ui-button -forward"
                    onClick={() => {
                      this.setState({ step: 2 });
                    }}
                  >
                    Подтвердить
                  </button>
                </footer>
              </div>

              <div className="ui-card__switcher__item" data-id="qr">
                <div className="ui-card__action">
                  Отсканируйте QR-код с помощью мобильного приложения
                </div>

                <div className="ui-qr -confirm"></div>
              </div>

              <div className="ui-loader ui-card__switcher__loader">
                <div className="ui-loader__indicator"></div>
                <div className="ui-loader__title">Обработка запроса</div>
                <div className="ui-loader__subtitle">
                  Запрос в Удостоверяющий Центр...
                </div>
              </div>

              <div className="ui-success ui-card__switcher__success">
                <div className="ui-success__indicator"></div>
                <div className="ui-success__title">Операция подтверждена</div>
                <div className="ui-success__subtitle">
                  Возврат к документу...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CertsList;
