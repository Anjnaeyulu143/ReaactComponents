import { Typography } from "@mui/material";
import React from "react";

export const Rating = ({ rate }) => {
  console.log(rate);
  return (
    <>
      <Typography>Rating</Typography>
      {[...Array(5)].map((_, i) => {
        return <span>{rate > i ? "Hi" : "Bye"}</span>;
      })}
    </>
  );
};
