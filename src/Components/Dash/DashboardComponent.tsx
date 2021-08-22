import { Link, NavLink } from "react-router-dom";
import styles from "./DashboardComponent.module.css";
import { DashboardData } from "./DashboardData";

export function DashboardComponent() {
  return (
    <>
      <nav className={`${styles.navMenu} ${styles.active}`}>
        <div>
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            className={styles.image}
            alt="Profile Picture"
          />
        </div>
        <ul className={styles.navMenuItems}>
          {DashboardData.map((item, index) => {
            return (
              <NavLink to={item.path} activeClassName={styles.activeTab}>
                <li key={index} className={item.cName}>
                  {item.title}
                </li>
              </NavLink>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
