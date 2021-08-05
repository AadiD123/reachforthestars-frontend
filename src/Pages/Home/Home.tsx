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

  {
    console.log(items);
  }
  return (
    <div>
      <img
        style={{
          zIndex: -1,
          position: "fixed",
          width: "100%",
          top: "0",
        }}
        src={comet}
        alt="comet"
      />
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
            <Link to={item.path}>
              <button className={styles.button} key={index}>
                {item.title}
                Hi
              </button>
            </Link>;
          })}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "bisque",
          width: "100%",
          marginTop: "400px",
        }}
      >
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
        <div>Hello</div>
      </div>
    </div>
  );
};

export default Home;
