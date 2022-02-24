const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, payload],
      };
    default:
      return state;
  }
};

export default todoReducer;
