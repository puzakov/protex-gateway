import React from "react";

class Test extends React.Component {
  authWindow = null;
  state = {
    text: ""
  };

  render() {
    return (
      <>
        <div className="ui-test">
          <div className="ui-test__inner">
            <button
              className="ui-test__button"
              onClick={e => {
                window.open("https://protex-gate.herokuapp.com/auth", "win", "width=800,height=750"); // a window object
              }}
            >
              Подписать с использованием Протекс
            </button>
            <span>{this.state.text}</span>
          </div>
        </div>
      </>
    );
  }
}

export default Test;
