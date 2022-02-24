import React, { useState, useContext } from "react";
import { Navbar, Button, Modal, Alert } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { CardsContext } from "../CardsContext";

export const AppHeader = () => {
  const [bool, setBool] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [desc, setDesc] = useState("");
  const [cards, setCards] = useContext(CardsContext);

  const onHide = () => {
    setError("");
    setTitle("");
    setDesc("");
    setBool(false);
  };

  const titleName = (e) => {
    setTitle(e.target.value);
  };

  const descName = (e) => {
    setDesc(e.target.value);
  };

  const onHandleSubmit = () => {
    if (title.length > 30 || title.length === 0) {
      setBool(true);
      setError("Hey, You need to enter something");
    }

    if (desc.length > 30 || desc.length === 0) {
      setBool(true);
      setError("Hey, You need to enter something");
    } else {
      setCards([
        ...cards,
        {
          title,
          disc: desc,
          id: uuidv4(),
        },
      ]);
      setTitle("");
      setDesc("");
      setBool(false);
    }
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Relevel Unacadamy</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button
            className="bg-light text-primary"
            style={{ fontSize: "1.1rem" }}
            onClick={() => setBool(true)}
          >
            Add Card
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal
        show={bool}
        onHide={() => onHide()}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mt-4">
            <label htmlFor="title-name">Title Name</label>
            <input
              type="text"
              className="form-control"
              id="title-name"
              placeholder="Enter Title Names"
              value={title}
              onChange={titleName}
            />
          </div>
          <div className="mt-4">
            <label htmlFor="discription">Discription</label>
            <input
              type="text"
              className="form-control"
              id="discription"
              placeholder="Enter discription"
              value={desc}
              onChange={descName}
            />
          </div>
        </Modal.Body>
        {error.length > 0 && <Alert variant="danger">{error}</Alert>}
        <Modal.Footer>
          <Button onClick={() => onHide()} variant="danger">
            Close
          </Button>
          <Button onClick={() => onHandleSubmit()} variant="primary">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
