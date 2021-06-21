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
    icon: <AiIcons.AiFillHome />,
    cName: `${styles.navText}`,
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoIosPaper />,
    cName: `${styles.navText}`,
  },
];
