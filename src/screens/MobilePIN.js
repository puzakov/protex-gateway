import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const buttons = [
  { digit: 1, text: "" },
  { digit: 2, text: "ABC" },
  { digit: 3, text: "DEF" },
  { digit: 4, text: "GHI" },
  { digit: 5, text: "JKL" },
  { digit: 6, text: "MNO" },
  { digit: 7, text: "PQRS" },
  { digit: 8, text: "TUV" },
  { digit: 9, text: "WXYS" },
  { digit: 0, text: "" }
];

class MobilePIN extends Component {
  state = { counter: 0 };

  componentDidMount() {
    const response = fetch(
      "https://uecolog-api.herokuapp.com/protex/step/2"
    ).then(response => response.json());
  }

  render() {
    const { counter } = this.state;
    if (counter >= 4) return (<Redirect to="/approve"/>)
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
              {[0, 1, 2, 3].map(item => {
                const active = counter > item ? "-active" : "";
                return (
                  <div className={`ui-pin__progress__item ${active}`}></div>
                );
              })}
            </div>
            <div className="ui-pin__keyboard">
              {buttons.map(({ digit, text }) => {
                return (
                  <button
                    className="ui-pin__keyboard__item"
                    onClick={() => {
                      this.setState({ counter: counter + 1 });
                    }}
                  >
                    <div>{digit}</div>
                    <span>{text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MobilePIN;
