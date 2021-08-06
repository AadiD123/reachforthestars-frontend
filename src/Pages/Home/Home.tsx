import { useRef } from "react";
import styles from "./Home.module.css";
import comet from "./comet.jpeg";
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "bisque",
          width: "100%",
          marginTop: "400px",
          height: "100%",
          padding: "50px 0 50px 0",
        }}
      >
        <div className="row" style={{ padding: "2px" }}>
          <div
            className="col-12 col-sm-8 col-md-6 col-lg-4"
            style={{ marginTop: "20px" }}
          >
            <div
              className="card"
              style={{
                padding: "20px",
                paddingLeft: "10px",
                backgroundColor: "rgb(215,235,242)",
              }}
            >
              <h1
                style={{ fontSize: "40px", fontWeight: "bold", margin: "auto" }}
              >
                ~ OUR MISSION ~
              </h1>
              <p style={{ width: "78%", fontSize: "18px", margin: "auto" }}>
                As an international organization of volunteers, our goal is to
                help students across the world by providing access to online
                learning. Our services are meant to assist both children and
                their parents by bridging the gap in education during these
                difficult times. At-home boredom is a reality for many children,
                and our organization strives to create activities that ignite
                their creativity and encourage their love for learning.
              </p>
              <br />
              <button
                className={styles.contactusbutton}
                style={{ margin: "auto" }}
              >
                Contact Us!
              </button>
            </div>
          </div>
          <div
            className="col-12 col-sm-8 col-md-6 col-lg-4"
            style={{ marginTop: "20px" }}
          >
            <div className="card">
              <div>
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  alt="image"
                  width="480"
                  height="440"
                />
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className={styles.imagecards}>
            <img src="" alt="image" />
          </div>
          <div
            className={styles.infocards}
            style={{ backgroundColor: "lightblue" }}
          >
            <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
              ~ OUR MISSION ~
            </h1>
            <p style={{ width: "78%", fontSize: "18px", margin: "auto" }}>
              As an international organization of volunteers, our goal is to
              help students across the world by providing access to online
              learning. Our services are meant to assist both children and their
              parents by bridging the gap in education during these difficult
              times. At-home boredom is a reality for many children, and our
              organization strives to create activities that ignite their
              creativity and encourage their love for learning.
            </p>
            <br />
            <button className={styles.contactusbutton}>Contact Us!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
