import { combineReducers } from "redux";
import dataReducer from "./Reducers";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  data: dataReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
