import { addTask, removeTask } from "./Actions";

const initialState = {
  tasks: [1, "anjan", "vinay"],
};

const taskReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case addTask:
      console.log(payload);
      return {
        ...state,
        tasks: payload,
      };
    case removeTask:
      console.log(payload);
      return {
        ...state,
        tasks: payload,
      };
    default:
      return state;
  }
};

export default taskReducer;
