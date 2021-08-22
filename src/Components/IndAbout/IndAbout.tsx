import React from "react";
import styles from "./IndAbout.module.css";

function IndAbout(props: any) {
    const { name, text } = props;
    return(
        <div className="carousel-item active">
        <div className={styles.item}>
          <div className={styles.box}>
           <div className={styles.imageCenter}><img alt = "person" src="https://lh3.googleusercontent.com/proxy/9F8-sYc3toodFQb7enQZmH1tKdHuFRMejfPIHqIY2bjyLhdVyh_Z6LgeiyKDyynq9PTZ0hRwIJ0PUD1OY-dfJ3iEEJUQnaiVpOjaxj1U7athfkMvVrOKQZ3V7cIl-Q" width="200px" height="200px" className={styles.image} /></div> 
            <div className={styles.info}>
                {text}
            </div>
            <h1 className={styles.namepos}>{name}</h1>
          </div>
        </div>
        
      </div>
    );
}

export default IndAbout;