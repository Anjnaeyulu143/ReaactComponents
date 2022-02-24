import axios from "axios";
import api from "../../config/api";
import * as taskActionType from "./taskActionType";

export const getTask = () => async (dispatch) => {
  try {
    dispatch({ type: taskActionType.GET_TASK_BEGINS });
    const result = await axios.get(`${api.API_BASE_URL}/tasks`);
    setTimeout(() => {
      dispatch({
        type: taskActionType.GET_TASK_SUCCESS,
        payload: result.data,
      });
    }, 3000);
  } catch (error) {
    console.log(error);
    dispatch({ type: taskActionType.GET_TASK_FAILURE });
  }
};

export const addTask = (taskData) => async (dispatch) => {
  try {
    dispatch({ type: taskActionType.ADD_TASK_BEGINS });
    const result = await axios.post(`${api.API_BASE_URL}/tasks`, taskData);
    dispatch({
      type: taskActionType.ADD_TASK_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: taskActionType.ADD_TASK_FAILURE });
    throw error;
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    dispatch({ type: taskActionType.DELETE_TASK_BEGINS });
    await axios.delete(`${api.API_BASE_URL}/tasks/${id}`);
    dispatch({
      type: taskActionType.DELETE_TASK_SUCCESS,
      payload: id,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: taskActionType.DELETE_TASK_FAILURE });
    throw error;
  }
};

export const updateTask = (taskData) => async (dispatch) => {
  try {
    dispatch({ type: taskActionType.UPDATE_TASK_BEGINS });
    const result = await axios.put(
      `${api.API_BASE_URL}/tasks/${taskData.id}`,
      taskData
    );
    dispatch({
      type: taskActionType.UPDATE_TASK_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: taskActionType.UPDATE_TASK_FAILURE });
    throw error;
  }
};
