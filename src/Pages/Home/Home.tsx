import React from "react";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.hero}>
        <img style = {{zIndex: -1, width: "100%", position: "absolute", top: "0", bottom: '0', left: "0", right: "0"}} src = "http://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
     alt = "comet" />
      <div className={styles.heroInner}>
        <h1 className={styles.title}>
          The Sky's
          <br />
          Not the
          <br />
          Limit
        </h1>
      </div>
    </div>
  );
};

export default Home;
