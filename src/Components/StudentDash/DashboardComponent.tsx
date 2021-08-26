import { NavLink } from "react-router-dom";
import styles from "./DashboardComponent.module.css";
import { DashboardData } from "./DashboardData";

export function StudentDashboardComponent(props: any) {
  return (
    <>
      <nav className={`${styles.navMenu} ${styles.active}`}>
        <div>
          {/* <img
            src={props.image}
            className={styles.image}
            alt="Profile Picture"
          /> */}
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
