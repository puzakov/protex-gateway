import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import createStore from "./store";
import { Provider } from "react-redux";
import './index.scss';

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
