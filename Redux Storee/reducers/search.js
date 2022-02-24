import { titleId } from "../actions";
import { Data } from "../components/RelevelHeader/Data";

const initialState = { contents: Data, value: "", works: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case titleId: {
      const { value } = action;
      const works = state.contents.filter((val) => val.includes(value));
      return { ...state, value, works };
    }
    default:
      return state;
  }
}
