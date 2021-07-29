import React from "react";
import styles from "./IndividualAbout.module.css";
import * as FaIcons from "react-icons/fa";
const IndividualAbout = () => {
  return (
    <div>
      <h1 className={styles.title}>Meet the Team</h1>
    <div id="slides" className="carousel slide" data-ride="carousel">

  
    <ul className="carousel-indicators" >
      <li data-target="#slides" data-slide-to="0" className="active"></li>
      <li data-target="#slides" data-slide-to="1"></li>
      <li data-target="#slides" data-slide-to="2"></li>
    </ul>
    
    
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className={styles.item}>
          <div className={styles.box}>
           <div className={styles.imageCenter}><img src="https://lh3.googleusercontent.com/proxy/9F8-sYc3toodFQb7enQZmH1tKdHuFRMejfPIHqIY2bjyLhdVyh_Z6LgeiyKDyynq9PTZ0hRwIJ0PUD1OY-dfJ3iEEJUQnaiVpOjaxj1U7athfkMvVrOKQZ3V7cIl-Q" width="200px" height="200px" className={styles.image}></img></div> 
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
           <div className={styles.imageCenter}><img src="https://lh3.googleusercontent.com/proxy/9F8-sYc3toodFQb7enQZmH1tKdHuFRMejfPIHqIY2bjyLhdVyh_Z6LgeiyKDyynq9PTZ0hRwIJ0PUD1OY-dfJ3iEEJUQnaiVpOjaxj1U7athfkMvVrOKQZ3V7cIl-Q" width="200px" height="200px" className={styles.image}></img></div> 
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
           <div className={styles.imageCenter}><img src="https://lh3.googleusercontent.com/proxy/9F8-sYc3toodFQb7enQZmH1tKdHuFRMejfPIHqIY2bjyLhdVyh_Z6LgeiyKDyynq9PTZ0hRwIJ0PUD1OY-dfJ3iEEJUQnaiVpOjaxj1U7athfkMvVrOKQZ3V7cIl-Q" width="200px" height="200px" className={styles.image}></img></div> 
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
    </div>
    
   
    <a className="carousel-control-prev" href="#slides" data-slide="prev" style={{color:"black"}}>
     
      <FaIcons.FaAngleLeft style={{color:"black"}}/>
    </a>
    <a className="carousel-control-next" href="#slides" data-slide="next">
      
      <FaIcons.FaAngleRight style={{color:"black"}}/>
    </a>
  </div>
  
  </div>
  );
};

export default IndividualAbout;