import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataList } from "../store/Action";
import { Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () => {
  const dataListSelector = useSelector((state) => state.data.dataList);
  console.log(dataListSelector);
  const dataLoadingSelector = useSelector((state) => state.data.cardLoading);
  console.log(dataLoadingSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(getDataList());
  };

  return (
    <div>
      <h1>Your need to render somthing in this home page</h1>
      {dataListSelector.map((eachItem) => (
        <Link
          to={`/cardDetails/${eachItem.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Container className="mt-3">
            <Card key={eachItem.id}>
              <Card.Body>
                <Card.Title>{eachItem.title}</Card.Title>
                <Card.Text>{eachItem.body}</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Link>
      ))}
    </div>
  );
};
