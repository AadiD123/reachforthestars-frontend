import React from "react";
import styles from "./Registration.module.css";
const Registration = () => {
  return (
   <div className="container">
    <h1 className={styles.title}>Registration</h1>
    <div className="row">
        <div className="col-12">
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 style={{color:"black", fontSize:"40px", marginBottom:"20px"}}>Tutoring</h1>
                    <div style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.button}>
                        <button className={styles.clicks}>Join as Tutor</button>
                    </div>
                    <div className={styles.button}>
                    <button className={styles.clicks}>Get Tutored</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12">
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 style={{color:"black", fontSize:"40px", marginBottom:"20px"}}>Seasonal Camps</h1>
                    <div style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  </div>
                </div>
                <div id={styles.moreInfo}>
                    <div>
                        <button className={styles.clicks}>More Info</button>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="col-12">
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1 style={{color:"black", fontSize:"40px", marginBottom:"20px"}}>AP Peer Tutoring</h1>
                    <div style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.button}>
                        <button className={styles.clicks}>Join as Tutor</button>
                    </div>
                    <div className={styles.button}>
                    <button className={styles.clicks}>Get Tutored</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
  );
};

export default Registration;
