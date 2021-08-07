import { useRef } from "react";
import styles from "./Home.module.css";
import comet from "../../Assets/Images/comet.jpeg";
import hands from "../../Assets/Images/hands.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  const myRef = useRef();

  const executeScroll = () => window.scrollTo();

  // run this function from an event handler or an effect to execute scroll

  const items = [
    {
      title: "Our Mission",
      path: "#",
    },
    {
      title: "Recruiting",
      path: "#",
    },
    {
      title: "Tutoring Resources",
      path: "#",
    },
    {
      title: "Our Programs",
      path: "#",
    },
    {
      title: "Blog",
      path: "#",
    },
  ];

  return (
    <div>
      <img className={styles.image} src={comet} alt="comet" />
      <h1 className={styles.tagline}>
        The Sky's
        <br />
        Not the
        <br />
        Limit
      </h1>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div className={styles.refBar}>
          {items.map((item, index) => {
            return (
              <Link to={item.path}>
                <button className={styles.button} key={index}>
                  {item.title}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.cardContainer}>
          <div className={styles.ourMission}>
            <h1>~Our Mission~</h1>
            <p>
              As an international organization of volunteers, our goal is to
              help students across the world by providing access to online
              learning. Our services are meant to assist both children and their
              parents by bridging the gap in education during these difficult
              times. At-home boredom is a reality for many children, and our
              organization strives to create activities that ignite their
              creativity and encourage their love for learning.
            </p>
            <Link to="#">
              <button className={styles.contactUsButton}>Contact Us</button>
            </Link>
          </div>
          <div>
            <img
              src={hands}
              alt="hands"
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div className={styles.ourMission}></div>
          <div className={styles.ourMission}>
            <h1>~Our Recruiting~</h1>
            <p>
              During the months of June and July, Reach For The Stars will be
              recruiting members for our Core Team.
            </p>
            <br />​
            <p>
              This is the team that runs the entire organization. For more
              information about each position, check the document linked below.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
