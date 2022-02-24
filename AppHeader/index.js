import React, { useState } from "react";
import { Modal, Navbar } from "react-bootstrap";

export const AppHeader = () => {
  //   const [bool, setBool] = useState(false);

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>Today Task Tracker</Navbar.Brand>
      </Navbar>
      {/* <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={() => setBool(true)}>
          Click
        </button>
      </div>
      <Modal show={bool}>
        <Modal.Header>Modal Heading</Modal.Header>
        <Modal.Body>Hello, Everyone</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" onClick={() => setBool(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};
