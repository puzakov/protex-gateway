import { combineReducers } from "redux";
import { handleActions } from "redux-actions";

const isLoading = handleActions(
  {
  },
  false
);


export default combineReducers({
  isLoading,
});
