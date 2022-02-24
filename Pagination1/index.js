import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagin1 from "./Pagin1";

export const Pagination1 = () => {
  const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  const [data, setData] = useState([]);
  const [perpage, setPerpage] = useState([]);

  useEffect(() => {
    api.get("/").then((res) => {
      setData(res.data);
      setPerpage(res.data.slice(0, 10));
    });
  }, []);

  const pageHandler = (pageNumber) => {
    setPerpage(data.slice(pageNumber * 10 - 10, pageNumber * 10));
  };
  console.log(data);
  console.log(perpage);
  return (
    <div>
      {perpage.map((item, index) => (
        <h1 key={index} style={{ fontSize: "2rem" }}>
          {item.title}
        </h1>
      ))}
      <Pagin1 data={data} pageHandler={pageHandler} />
    </div>
  );
};
