import axios from "axios";
import { ADD_DATA, LOADING } from "./ActionType";
import api from "../../../config/api";

export const getDataList = () => async (dispatch) => {
  try {
    const result = await axios.get(api.API_BASE_URL);
    dispatch({
      type: ADD_DATA,
      payload: result.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const isLoading = (val) => {
  return {
    type: LOADING,
    payload: val,
  };
};
