import { ADD_DATA, LOADING } from "./ActionType";

const initialData = {
  dataList: [],
  pageNumStart: 0,
  pageNumEnd: 10,
  cardLoading: true,
};

const dataReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case ADD_DATA:
      return {
        ...state,
        dataList: payload.slice(state.pageNumStart, state.pageNumEnd),
      };
    case LOADING:
      return {
        ...state,
        cardLoading: payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
