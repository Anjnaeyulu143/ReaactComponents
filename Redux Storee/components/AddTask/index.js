import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Spinner,
} from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/task/taskAction";

export const AddTask = () => {
  const [showModal, setShowModal] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskstatus, setTaskStatus] = useState("pending");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const addTaskLoadingSelector = useSelector(
    (state) => state.task.addTaskLoading
  );

  console.log(addTaskLoadingSelector);

  const clear = () => {
    setTaskName("");
    setTaskStatus("pending");
  };

  const onHide = () => {
    setShowModal(false);
  };

  const handleTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(taskName, taskstatus);
    try {
      await dispatch(
        addTask({
          title: taskName,
          isCompleted: taskstatus === "Completed",
        })
      );
      clear();
    } catch (error) {
      console.log(error);
    }

    setShowModal(false);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col className="d-flex justify-content-end">
          <Button onClick={() => setShowModal(true)}>
            <AddIcon />
            Add Task
          </Button>
        </Col>
      </Row>
      <Modal
        show={showModal}
        onHide={() => onHide()}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form autoComplete="off" noValidate>
            <Form.Group className="mb-3" controlId="taskId">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Task Title"
                value={taskName}
                onChange={handleTaskName}
              />
            </Form.Group>
            <p>{error}</p>
            <fieldset>
              <Form.Group
                as={Row}
                onChange={(e) => setTaskStatus(e.target.value)}
              >
                <Form.Label as="legend" column sm={2}>
                  Task Status
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Pending"
                    name="taskstatus"
                    id="Pending"
                    value="Pending"
                    defaultChecked
                  />
                  <Form.Check
                    type="radio"
                    label="completed"
                    name="taskstatus"
                    id="completed"
                    value="Completed"
                  />
                </Col>
              </Form.Group>
            </fieldset>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => onHide()}>
            Close
          </Button>
          <Button onClick={() => handleSubmit()}>
            {addTaskLoadingSelector && <Spinner animation="border" size="sm" />}
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
