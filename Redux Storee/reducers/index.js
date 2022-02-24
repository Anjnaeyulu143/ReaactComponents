import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedinReducer from "./isLogged";
import searchReducer from "./search";
export const rootReducer = combineReducers({
  counter: counterReducer,
  isLoggedin: isLoggedinReducer,
  filterData: searchReducer,
});
