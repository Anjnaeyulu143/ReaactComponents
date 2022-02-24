import { increment, decrement } from "../components/action1";

export default function (state = 0, action) {
  switch (action.type) {
    case increment:
      return state + action.payload;
    case decrement:
      return state - action.payload;
    default:
      return state;
  }
}
