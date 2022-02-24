import React, { useState } from "react";
import "./index.css";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RouteModal } from "../RouteModal";
export const RouteNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const modal = (val) => {
    setShowModal(val);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="ml-auto">
            <Link to="/" className="link">
              <h1>Home</h1>
            </Link>
            <Link to="/services" className="link">
              <h1>Services</h1>
            </Link>
            <Link to="/contact" className="link">
              <h1>Contact</h1>
            </Link>
            <Button variant="outline-light" onClick={() => setShowModal(true)}>
              Sign In
            </Button>
          </Nav>
        </Container>
      </Navbar>
      {showModal && <RouteModal bool={showModal} modalShow={modal} />}
    </>
  );
};
