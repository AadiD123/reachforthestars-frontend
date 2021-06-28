import React from "react";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className={styles.title}>
            The Sky's
            <br />
            Not the
            <br />
            Limit
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
