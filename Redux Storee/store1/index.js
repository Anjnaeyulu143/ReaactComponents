import { createStore, combineReducers, applyMiddleware } from "redux";
import taskReducer from "./Reducers";
import thunk from "redux-thunk";

const initialReducer = combineReducers({
  taskList: taskReducer,
});
const store = createStore(initialReducer, applyMiddleware(thunk));
export default store;
