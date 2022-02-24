import * as taskActionType from "./taskActionType";

const intialTaskState = {
  taskList: [1, 2, 2],
  getTaskLoading: false,
  addTaskLoading: false,
  deleteTaskLoading: false,
  updateTaskLoading: false,
};

const taskReducer = (state = intialTaskState, { type, payload }) => {
  switch (type) {
    case taskActionType.GET_TASK_BEGINS:
      console.log(payload);
      return {
        ...state,
        getTaskLoading: true,
      };
    case taskActionType.GET_TASK_SUCCESS:
      console.log(payload);
      return {
        ...state,
        taskList: payload,
        getTaskLoading: false,
      };
    case taskActionType.GET_TASK_FAILURE:
      console.log(payload);
      return {
        ...state,
        getTaskLoading: false,
      };
    case taskActionType.ADD_TASK_BEGINS:
      return {
        ...state,
        getTaskLoading: true,
      };
    case taskActionType.ADD_TASK_SUCCESS:
      console.log(payload);
      return {
        ...state,
        taskList: [...state.taskList, payload],
        getTaskLoading: false,
      };
    case taskActionType.ADD_TASK_FAILURE:
      console.log(payload);
      return {
        ...state,
        getTaskLoading: false,
      };
    case taskActionType.DELETE_TASK_BEGINS:
      return {
        ...state,
        deleteTaskLoading: true,
      };
    case taskActionType.DELETE_TASK_SUCCESS:
      console.log(payload);
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== payload),
        deleteTaskLoading: false,
      };
    case taskActionType.DELETE_TASK_FAILURE:
      console.log(payload);
      return {
        ...state,
        deleteTaskLoading: false,
      };
    case taskActionType.UPDATE_TASK_BEGINS:
      return {
        ...state,
        updateTaskLoading: true,
      };
    case taskActionType.UPDATE_TASK_SUCCESS:
      console.log(payload);
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === payload.id ? payload : task
        ),
        updateTaskLoading: false,
      };
    case taskActionType.UPDATE_TASK_FAILURE:
      console.log(payload);
      return {
        ...state,
        updateTaskLoading: false,
      };
    default:
      return state;
  }
};

export default taskReducer;
