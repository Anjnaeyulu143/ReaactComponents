import React, { useState } from "react";
import "./index.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header__2() {
  const [boolean, setBoolean] = useState(false);
  return (
    <>
      <nav className="header__2">
        <h1>Relevel-Crack</h1>
        <div className="header2__menuIcon">
          {boolean ? (
            <CloseIcon onClick={() => setBoolean(!boolean)} />
          ) : (
            <MenuIcon onClick={() => setBoolean(!boolean)} />
          )}
        </div>
        <div
          className={boolean ? "header2__navlink_active" : "header2__navlink"}
        >
          <h1>Home</h1>
          <h1>Contact Us</h1>
          <h1>Services</h1>
          <h1>Contact Us</h1>
        </div>
      </nav>
      <center>
        <div className="header2__btn1">
          <p>Content</p>
        </div>
        <div className="btn__style">
          <p>Check</p>
        </div>
      </center>
    </>
  );
}
