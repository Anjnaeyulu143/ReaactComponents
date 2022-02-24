import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";

export const Header = () => {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);

  return (
    <nav className="navbar">
      <div className="menu-icon">
        {clicked ? (
          <CloseIcon onClick={() => setClicked(!clicked)} />
        ) : (
          <MenuIcon onClick={() => setClicked(!clicked)} />
        )}
      </div>
      <div className={clicked ? "nav-links-active" : "nav-links"}>
        <h1>Home</h1>
        <h1>Services</h1>
        <h1>Contact Us</h1>
        <h1>Products</h1>
      </div>
    </nav>
  );
};
