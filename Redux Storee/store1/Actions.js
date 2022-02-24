export const addTask = "ADD_TASK";
export const removeTask = "REMOVE_TASK";

export const addItem = (item) => (dispatch, getState) => {
  const { taskList } = getState();
  const { tasks } = taskList;
  const updatedList = [...taskList.tasks, item];

  dispatch({
    type: addTask,
    payload: updatedList,
  });
};

export const removeItem = (item) => (dispatch, getState) => {
  console.log(item);
  const { taskList } = getState();
  const removedList = taskList.tasks.filter((eachItem) => eachItem !== item);
  dispatch({
    type: removeTask,
    payload: removedList,
  });
};
