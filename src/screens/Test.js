import React from "react";

class Test extends React.Component {
  authWindow = null;
  state = {
    text: ""
  };

  render() {
    return (
      <>
        <button
          onClick={e => {
            window.open("https://protex-gate.herokuapp.com/auth", "win", "width=800,height=600"); // a window object
          }}
        >
          Open Link in Popup
        </button>
        <span>{this.state.text}</span>
      </>
    );
  }
}

export default Test;
