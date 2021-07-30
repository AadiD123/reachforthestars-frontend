// import React, {useState } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { IconContext } from "react-icons";

import styles from "./Navbar.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { NavbarData } from "./NavbarData";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar"
      id="navs"
      style={{
        backgroundColor: "none",
        position: "absolute",
        marginTop: "0px",
        width: "100%",
        height: "80px",
        zIndex: 2,
      }}
    >
      <Sidebar />
      <div
        className="navbarSupportedContent"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        {NavbarData.map((item, index) => {
          return (
            <Link className={styles.navLink} to={item.path}>
              <button
                className={`${styles.navbarbuttonstyling} btn my-2 my-sm-0`}
                key={index}
              >
                {item.title}
              </button>
            </Link>
          );
        })}
      </div>
      <div style={{ width: "100%", height: "50px" }}></div>
    </nav>
  );
}

export default Navbar;
