import { combineReducers } from "redux";
import counter1 from "./counter1";
import dataReducer from "./data";

export const allReducers = combineReducers({
  counter1,
  dataFilter: dataReducer,
});
