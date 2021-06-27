// import React, {useState } from "react";
// import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { IconContext } from "react-icons";

import styles from "./Navbar.module.css";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {

  return (
    <nav className="navbar" id= "navs" style={{height: "80px"}}> 
     <Sidebar />
    <div className="navbarSupportedContent" style = {{display: 'flex', justifyContent: 'flex-end'}}> 
        <button className={`${styles.navbarbuttonstyling} btn my-2 my-sm-0`} id = "button-one" type="button">Contact</button>
        <button className={`${styles.navbarbuttonstyling} btn my-2 my-sm-0`} type="button">Donate</button> 
        <button className={`${styles.navbarbuttonstyling} btn my-2 my-sm-0`} type="button">Login</button> 
    
    
    </div> 
  </nav>
  );
}

export default Navbar;
