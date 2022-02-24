import React, { useContext } from "react";
import { Container, Divider, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Context } from "../CartContext";

export const Header = () => {
  const { cart } = useContext(Context);

  return (
    <>
      <Container fixed={true}>
        <Toolbar>
          <Typography variant="h6">React Context Api</Typography>
          <div className="ml-auto d-flex">
            <Link to="/" className="text-decoration-none">
              <Typography variant="h6" color="text-secondary" ml={1}>
                Home
              </Typography>
            </Link>
            <Link to="/cart" className="text-decoration-none">
              <Typography variant="h6" color="text-secondary" ml={1}>
                Cart{`(${cart.length})`}
              </Typography>
            </Link>
          </div>
        </Toolbar>
        <Divider />
      </Container>
    </>
  );
};
