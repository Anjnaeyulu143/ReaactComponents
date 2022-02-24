import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Typography } from "@mui/material";

export const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        position: "relative",
        bottom: 0,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography gutterBottom>Copy right @copy Notezipper</Typography>
    </footer>
  );
};
