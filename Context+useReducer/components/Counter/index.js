import React, { useContext, useState } from "react";
import { Button, Container, Typography } from "@mui/material";
import { Context } from "../CartContext";
import { Row, Col, Form } from "react-bootstrap";

export const Counter = () => {
  const {
    counter: { count },
    todolist: { todoList },
    tododispatch,
    dispatch,
  } = useContext(Context);
  const [value, setValue] = useState("");
  console.log(value);
  console.log(todoList);
  return (
    <>
      <Container>
        <Typography variant="h5" color="primary" className="text-center">
          Counter :{count}
        </Typography>
        <Row>
          <Col md={4}>
            <Button
              fullWidth
              variant="outlined"
              className="m-1"
              onClick={() =>
                dispatch({
                  type: "INCREASE",
                  payload: 5,
                })
              }
            >
              Increment
            </Button>
          </Col>
          <Col md={4}>
            <Button
              fullWidth
              variant="outlined"
              className="m-1"
              onClick={() =>
                dispatch({
                  type: "RESET",
                  payload: 0,
                })
              }
            >
              Reset
            </Button>
          </Col>
          <Col md={4}>
            <Button
              fullWidth
              variant="outlined"
              className="m-1"
              onClick={() =>
                dispatch({
                  type: "DECREASE",
                  payload: 5,
                })
              }
            >
              Decrement
            </Button>
          </Col>
        </Row>
        <Form.Control
          type="text"
          className="m-1"
          placeholder="Enter your item"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          variant="contained"
          className="m-1"
          onClick={() => {
            if (value !== "") {
              tododispatch({
                type: "ADD_TODO",
                payload: value,
              });
            }
            setValue("");
          }}
        >
          Add
        </Button>
      </Container>
    </>
  );
};
