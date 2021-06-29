import React from "react";
// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

//Styles
import styles from "./Sidebar.module.css";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    cName: `${styles.navTextTop}`,
  },
  {
    title: "Events",
    path: "/events",
    cName: `${styles.navTextTop}`,
  },
  {
    title: "Registration",
    path: "/registration",
    cName: `${styles.navTextTop}`,
  },
  {
    title: "About",
    path: "/about",
    cName: `${styles.navTextTop}`,
  },
  {
    title: "Join Our Team",
    path: "/join-our-team",
    cName: `${styles.navTextTop}`,
  },
];
