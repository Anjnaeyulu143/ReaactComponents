import React, { useState, useEffect } from "react";
import { Card, Button, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { isLoading } from "../store/Action";
import axios from "axios";

export const CardDetails = (props) => {
  // const { id } = useParams();

  const { id } = props.match.params;

  const { history } = props;
  const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/posts/${id}`,
  });
  const dispatch = useDispatch();
  const dataLoadingSelector = useSelector((state) => state.data.cardLoading);
  console.log(dataLoadingSelector);

  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await api.get("/");

    setData(result.data);
    dispatch(isLoading(false));
    console.log(result.data);
    if (result.status === 200) {
    }
  }, []);

  const goBack = () => {
    dispatch(isLoading(true));
    history.replace("/");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      {dataLoadingSelector ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <Card style={{ width: "25rem" }} className="p-3">
          <Card.Body>
            <Card.Title>{`Card Id:   ${data.id}`}</Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ textTransform: "capitalize" }}
            >
              {data.title}
            </Card.Subtitle>
            <Card.Text style={{ textTransform: "capitalize" }}>
              {data.body}
            </Card.Text>
          </Card.Body>
          <Button onClick={() => goBack()} variant="outline-primary">
            Go Back
          </Button>
        </Card>
      )}
    </div>
  );
};
