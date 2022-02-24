const counterReducer = (state, { type, payload }) => {
  switch (type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + payload,
      };
    case "DECREASE":
      return {
        ...state,
        count: state.count - payload,
      };
    case "RESET":
      return {
        ...state,
        count: payload,
      };
    default:
      return state;
  }
};

export default counterReducer;
