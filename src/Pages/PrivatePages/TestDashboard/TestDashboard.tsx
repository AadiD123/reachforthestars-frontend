import { Link } from "react-router-dom";
import styles from "./TestDashboard.module.css";

const TestDashboard = () => {
  return (
    <ul className={styles.navMenuItems}>
      <li className={styles.list}>
        <Link to="/testdashboard">
          <span className={styles.span}>Dashboard</span>
        </Link>
      </li>
      <li className={styles.list}>
        <Link to="/tutoringfaq">
          <span className={styles.span}>Dashboard</span>
        </Link>
      </li>
      <li className={styles.list}>
        <Link to="/testdashboard">
          <span className={styles.span}>Dashboard</span>
        </Link>
      </li>
      <li className={styles.list}>
        <Link to="/testdashboard">
          <span className={styles.span}>Dashboard</span>
        </Link>
      </li>
    </ul>
  );
};

export default TestDashboard;
