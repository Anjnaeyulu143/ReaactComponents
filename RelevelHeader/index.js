import React from "react";
import { filterdata } from "../action1";
import { useDispatch } from "react-redux";
import "./index.css";

export const RelevelHeader = () => {
  const dispatch = useDispatch();
  return (
    <div className="relevelheader">
      <h1 className="relevelheader__title">Relevel</h1>
      <input
        type="search"
        placeholder="Search"
        className="form-control w-50"
        onChange={(e) => dispatch(filterdata(e.target.value))}
      />
    </div>
  );
};
