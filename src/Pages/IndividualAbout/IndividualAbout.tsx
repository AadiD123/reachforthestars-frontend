import React from "react";
import styles from "./IndividualAbout.module.css";
import * as FaIcons from "react-icons/fa";
import { useParams } from "react-router";
import IndAbout from "../../Components/IndAbout/IndAbout";
const IndividualAbout = () => {
  let name: string | null = localStorage.getItem("name");
  let text: string | null = localStorage.getItem("text");
  let src: string | null = localStorage.getItem("src");

  return (
    <div className="mainContainer">
      <h1 className="title">Meet the Team</h1>
      <div id="slides" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <IndAbout name={name} text={text} src={src}></IndAbout>
          {/* <div className="carousel-item active">
        <div className={styles.item}></div>
          <div className={styles.box}>
           <div className={styles.imageCenter}><img alt = "person" src="https://lh3.googleusercontent.com/proxy/9F8-sYc3toodFQb7enQZmH1tKdHuFRMejfPIHqIY2bjyLhdVyh_Z6LgeiyKDyynq9PTZ0hRwIJ0PUD1OY-dfJ3iEEJUQnaiVpOjaxj1U7athfkMvVrOKQZ3V7cIl-Q" width="200px" height="200px" className={styles.image} /></div> 
            <div className={styles.info}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quia! Assumenda repellat laboriosam ipsam minus. Velit natus, delectus aut magni molestiae ut corrupti repellendus, eaque minima doloribus nam, vero officiis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quia! Assumenda repellat laboriosam ipsam minus. Velit natus, delectus aut magni molestiae ut corrupti repellendus, eaque minima doloribus nam, vero officiis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quia! Assumenda repellat laboriosam ipsam minus. Velit natus, delectus aut magni molestiae ut corrupti repellendus, eaque minima doloribus nam, vero officiis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quia! Assumenda repellat laboriosam ipsam minus. Velit natus, delectus aut magni molestiae ut corrupti repellendus, eaque minima doloribus nam, vero officiis.
            </div>
            <h1 className={styles.namepos}>Full Name, Position in RFTS</h1>
          </div>
        </div>
        
      </div> */}
          {/* <div className="carousel-item">
      <div className={styles.item}>
          <div className={styles.box}>
           <div className={styles.imageCenter}><img alt = "person" src="https://lh3.googleusercontent.com/proxy/9F8-sYc3toodFQb7enQZmH1tKdHuFRMejfPIHqIY2bjyLhdVyh_Z6LgeiyKDyynq9PTZ0hRwIJ0PUD1OY-dfJ3iEEJUQnaiVpOjaxj1U7athfkMvVrOKQZ3V7cIl-Q" width="200px" height="200px" className={styles.image} /></div> 
            <div className={styles.info}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quia! Assumenda repellat laboriosam ipsam minus. Velit natus, delectus aut magni molestiae ut corrupti repellendus, eaque minima doloribus nam, vero officiis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quia! Assumenda repellat laboriosam ipsam minus. Velit natus, delectus aut magni molestiae ut corrupti repellendus, eaque minima doloribus nam, vero officiis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quia! Assumenda repellat laboriosam ipsam minus. Velit natus, delectus aut magni molestiae ut corrupti repellendus, eaque minima doloribus nam, vero officiis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quia! Assumenda repellat laboriosam ipsam minus. Velit natus, delectus aut magni molestiae ut corrupti repellendus, eaque minima doloribus nam, vero officiis.
            </div>
            <h1 className={styles.namepos}>Full Name, Position in RFTS</h1>
          </div>
        </div>
      </div>
      <div className="carousel-item">
      <div className={styles.item}>
          <div className={styles.box}>
           <div className={styles.imageCenter}><img alt = "person" src="https://lh3.googleusercontent.com/proxy/9F8-sYc3toodFQb7enQZmH1tKdHuFRMejfPIHqIY2bjyLhdVyh_Z6LgeiyKDyynq9PTZ0hRwIJ0PUD1OY-dfJ3iEEJUQnaiVpOjaxj1U7athfkMvVrOKQZ3V7cIl-Q" width="200px" height="200px" className={styles.image} /></div> 
            <div className={styles.info}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quia! Assumenda repellat laboriosam ipsam minus. Velit natus, delectus aut magni molestiae ut corrupti repellendus, eaque minima doloribus nam, vero officiis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quia! Assumenda repellat laboriosam ipsam minus. Velit natus, delectus aut magni molestiae ut corrupti repellendus, eaque minima doloribus nam, vero officiis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quia! Assumenda repellat laboriosam ipsam minus. Velit natus, delectus aut magni molestiae ut corrupti repellendus, eaque minima doloribus nam, vero officiis.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, quia! Assumenda repellat laboriosam ipsam minus. Velit natus, delectus aut magni molestiae ut corrupti repellendus, eaque minima doloribus nam, vero officiis.
            </div>
            <h1 className={styles.namepos}>Full Name, Position in RFTS</h1>
          </div>
        </div>
      </div> */}
        </div>
      </div>
    </div>
  );
};

export default IndividualAbout;
