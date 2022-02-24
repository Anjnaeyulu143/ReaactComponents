import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.css";

import { getTask, deleteTask, updateTask } from "../../store/task/taskAction";

export const TaskList = () => {
  const dispatch = useDispatch();
  const [deleteTaskId, setDeleteTaskId] = useState(null);
  const [updateTaskId, setUpdateTaskId] = useState(null);

  const taskSelectorList = useSelector((state) => state.task.taskList);
  const getTaskLoadingSelector = useSelector(
    (state) => state.task.getTaskLoading
  );

  const removeTaskLoading = useSelector(
    (state) => state.task.deleteTaskLoading
  );

  const updateTaskLoading = useSelector(
    (state) => state.task.updateTaskLoading
  );

  console.log(updateTaskLoading);

  useEffect(() => {
    getTaskList();
  }, []);

  const getTaskList = () => {
    dispatch(getTask());
  };

  const remove = (id) => {
    setDeleteTaskId(id);
    dispatch(deleteTask(id));
  };

  const update = (task) => {
    setUpdateTaskId(task.id);
    dispatch(
      updateTask({
        ...task,
        isCompleted: true,
      })
    );
  };

  return (
    <Container>
      {!getTaskLoadingSelector && taskSelectorList.length === 0 && (
        <h1 className="text-center mt-3" style={{ fontSize: "2rem" }}>
          Task List is Empty
        </h1>
      )}
      {getTaskLoadingSelector && (
        <Spinner
          animation="border"
          style={{ position: "fixed", top: "50%", left: "50%", color: "blue" }}
        />
      )}
      <Row className="mt-5">
        <Col>
          <ul className="list-group">
            {taskSelectorList.map((item) => (
              <li
                className={`${
                  item.isCompleted ? "task-completed" : "task-pending"
                } list-group-item d-flex justify-content-between align-items-center`}
                key={item.id}
              >
                <span>{item.title}</span>
                <div>
                  {!item.isCompleted && (
                    <Button
                      variant="outline-primary"
                      className="mr-3"
                      onClick={() => update(item)}
                    >
                      <i className="fas fa-check"></i>
                      {updateTaskLoading && item.id === updateTaskId && (
                        <Spinner animation="border" />
                      )}
                    </Button>
                  )}
                  <Button variant="outline-danger">
                    <DeleteIcon onClick={() => remove(item.id)} />
                    {removeTaskLoading && item.id === deleteTaskId && (
                      <Spinner animation="border" size="sm" />
                    )}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
