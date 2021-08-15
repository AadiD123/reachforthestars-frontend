import styles from "./Home.module.css";
import comet from "../../Assets/Images/comet.jpeg";
import hands from "../../Assets/Images/hands.jpeg";
import { Link } from "react-scroll";

import Blog from "../Blog/Blog";
import { useEffect, useState } from "react";
import { db } from "../../Backend/Firebase";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  var allblogs: any = [];
  var recentblogs: any = [];

  db.collection("blogs").onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      allblogs.push({ key: doc.id, ...doc.data() });
    });
    for (var i = 0; i < 3; i++) {
      recentblogs.push(allblogs[i]);
    }
    setBlogs(recentblogs);
  });

  const items = [
    {
      title: "Our Mission",
      path: "ourMission",
    },
    {
      title: "Recruiting",
      path: "recruiting",
    },
    {
      title: "Tutoring Resources",
      path: "tutoringResources",
    },
    {
      title: "Our Programs",
      path: "ourPrograms",
    },
    {
      title: "Blog",
      path: "blog",
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
              <Link
                activeClass="active"
                to={item.path}
                spy={true}
                smooth={true}
              >
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
          <div id="ourMission" className={styles.ourMission}>
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
          <div>
            <img
              src={hands}
              alt="hands"
              style={{ maxHeight: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
          <div id="recruiting" className={styles.ourMission}>
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
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "75%",
              }}
            >
              <button className={styles.contactUsButton}>More Details</button>
              <button className={styles.contactUsButton}>Apply Here</button>
            </div>
          </div>
        </div>
        <div id="tutoringResources" className={styles.tutoringResources}>
          <h1>Tutoring Resources</h1>
          <p>Peer Tutoring, Private Tutoring, AP Peer Classes</p>
          <button className={styles.registerbuttonstyling}>
            Register Here
          </button>
          <div className={styles.cardContainer}>
            <div className={styles.tutoringResourcesCards}>
              <img
                src={hands}
                alt="hands"
                style={{ maxHeight: "40%", width: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  padding: "20px 40px 40px",
                }}
              >
                <h1>Peer Tutoring</h1>
                <p>
                  At Reach For The Stars, we are dedicated to making your
                  child's learning experience feel like a real class. Our peer
                  tutoring involves our tutors in a class with 2 or more
                  children. The students can make new friends and connect with
                  people all over the world while receiving a quality education.
                </p>
                <button className={styles.contactUsButton}>Learn More</button>
              </div>
            </div>
            <div className={styles.tutoringResourcesCards}>
              <img
                src={hands}
                alt="hands"
                style={{ maxHeight: "40%", width: "100%", objectFit: "cover" }}
              />
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  padding: "20px 40px 40px",
                }}
              >
                <h1>Private Tutoring</h1>
                <p>
                  Private Tutoring is done between 1 tutor and 1 student. The
                  child gets more time with the tutor and can ask more
                  questions, as only one person is attending to the child.
                </p>
                <button className={styles.contactUsButton}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
        <div id="ourPrograms" className={styles.ourProgramsContainer}>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <h1>Our Programs</h1>
            <h2>What we offer</h2>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.summerCamp}>
              <h1>SUMMER CAMP</h1>
              <ol>
                <li>
                  There will be two cohorts (week of July 19th-23rd and week of
                  August 2nd-6th)
                </li>
                <li>
                  Classes last from Monday to Friday and are from 10 AM-11 AM or
                  11 AM-12 PM EST.
                </li>
                <li>
                  You can enroll in a maximum of 2 classes for every cohort you
                  enroll in!
                </li>
                <li>
                  Class times are different depending on which class you take.
                  They will either be from 10:00 AM EST- 11:00 AM EST or 11:00
                  AM EST- 12:00 PM EST. Keep note of the times listed below for
                  cohort 1!
                </li>
              </ol>
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
            <div>
              <img
                src={hands}
                alt="hands"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
            <div className={styles.peerClassCard}>
              <h1>AP PEER Classes</h1>
              <p>
                The AP Peer Class Program is a review course for students taking
                the May AP test. <br />
                There are over 20 subjects for students to choose from. Our
                tutors and TAs make sure that these students are able to score
                high on their AP tests with review worksheets, lectures, Q&A
                sessions, and diagnostic tests. <br />
                Stayed tuned for our 2022 registration!
              </p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Blog</h1>
        </div>
        <div id="blog" className={styles.blogs}>
          <div
            className={styles.gridcontainer}
            style={{ marginTop: "20px", paddingBottom: "50px" }}
          >
            {blogs.length > 0 ? (
              blogs.map((blog: any) => (
                <div
                  id={blog.key}
                  key={blog.key}
                  style={{ marginTop: "20px", marginBottom: "10px" }}
                >
                  <a
                    href={`/blogpage/${blog.key}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <div className="card" style={{ height: "100%" }}>
                      <img
                        alt="card"
                        className="card-img-top"
                        src={blog.blogpicture}
                        style={{ height: "275px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h4 className="card-title">{blog.title}</h4>
                      </div>
                    </div>
                  </a>
                </div>
              ))
            ) : (
              <h1>Blogs not loaded</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
