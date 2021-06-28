import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";

//Styles
import styles from "./Sidebar.module.css";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#060b26" }}>
        <div className={styles.navbar}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link to="#" className={styles.menuBars}>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <h1>Reach For The Stars</h1>
          </div>
          <div>
            <Link to="/contact">
              <button className={`${styles.navbarbuttonstyling} btn my-2 my-sm-0`} type="button">
                Contact
              </button>
            </Link>
            <Link to="/donate">
              <button className={`${styles.navbarbuttonstyling} btn my-2 my-sm-0`} type="button">
                Donate
              </button>
            </Link>
            <Link to="/login">
              <button className={`${styles.navbarbuttonstyling} btn my-2 my-sm-0`} type="button">
                Login
              </button>
            </Link>
          </div>
        </div>
        <nav className={sidebar ? `${styles.navMenu} ${styles.active}` : `${styles.navMenu}`}>
          <ul className={styles.navMenuItems} onClick={showSidebar}>
            <li className={styles.navbarToggle}>
              <Link to="#" className={styles.menuBars}>
                <AiIcons.AiOutlineClose style={{ color: "white" }} />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span className={styles.span}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
