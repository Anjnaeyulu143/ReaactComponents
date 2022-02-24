import React, { useContext, useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { Context } from "../CartContext";
import { SingleProduct } from "../SingleProduct";
export const Cart = () => {
  const { cart } = useContext(Context);
  console.log(cart);
  return (
    <>
      <Typography></Typography>
      <Container>
        <SingleProduct data={cart} key={cart.id} />
      </Container>
    </>
  );
};
