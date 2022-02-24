import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const RouteModal = ({ bool, modalShow }) => {
  const [errMsg, setErrMsg] = useState("");
  const [passErr, setPassErr] = useState("");
  return (
    <div>
      <Modal
        show={bool}
        onHide={() => modalShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="mr-autl">
            Sign In
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-1">
            <label htmlFor="UserName">User Name</label>
            <input
              type="text"
              class="form-control"
              id="UserName"
              onBlur={(e) =>
                e.target.value === "" ? setErrMsg("Requird*") : setErrMsg("")
              }
            />
            <p className="text-danger">{errMsg}</p>
          </div>
          <div className="p-1">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              onBlur={(e) =>
                e.target.value === "" ? setPassErr("Requird*") : setPassErr("")
              }
            />
            <p className="text-danger">{passErr}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="m-auto">
            <Button onClick={() => modalShow(false)}>Sign In</Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
