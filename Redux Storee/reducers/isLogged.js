import { signUp } from "../actions";

const isLoggedinReducer = (state = false, action) => {
  switch (action.type) {
    case signUp:
      return !state;
    default:
      return state;
  }
};

export default isLoggedinReducer;
