// const counter = useSelector((state) => state.counter);
// const isLogged = useSelector((state) => state.isLogged);
// const dispatch = useDispatch();
// import { useSelector, useDispatch } from "react-redux";
// import { increment } from "./actions";
// import { decrement } from "./actions";

export const increment = "INCREMENT";
export const decrement = "DECREMENT";
export const signUp = "SIGNUP";
export const titleId = "TITLEID";

export const incrementnum = (n) => {
  return {
    type: increment,
    payload: n,
  };
};

export const decrementnum = () => {
  return {
    type: decrement,
  };
};

export const signup = () => {
  return {
    type: signUp,
  };
};

export const search = (name) => {
  return {
    type: titleId,
    payload: name,
  };
};
