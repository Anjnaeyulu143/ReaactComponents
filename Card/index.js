import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { deletedData } from "../action1";

export const Card = () => {
  const dataFilter = useSelector((state) => state.dataFilter);
  // console.log(dataFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Mr.Anjan</h1>
      {dataFilter.map((item, index) => (
        <div className="d-flex">
          <h1 key={index}>{item.title}</h1>
          <Button
            endIcon={<DeleteIcon />}
            variant="contained"
            style={{
              border: "none",
              outline: "none",
              fontSize: "0.85rem",
              height: "36px",
              marginTop: "5px",
              marginLeft: "5px",
            }}
            onClick={() => dispatch(deletedData(item.id))}
          >
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};
