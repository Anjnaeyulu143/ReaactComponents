import React, { useState } from "react";
import { Container } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { SingleProduct } from "../SingleProduct";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setData(response.data.slice(0, 20));
  }, []);

  console.log(data);

  return (
    <>
      <Container>
        <SingleProduct data={data} key={data.id} />
      </Container>
    </>
  );
};
