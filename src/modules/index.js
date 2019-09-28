import { combineReducers } from "redux";
// import { fork } from "redux-saga/effects";
import reducer from "./reducer";

export default combineReducers({
  state: reducer,
});

// export function* rootSaga() {
  // yield fork(operatorSaga);
// }
