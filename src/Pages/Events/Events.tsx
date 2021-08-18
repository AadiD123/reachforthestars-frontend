import React from "react";
import styles from "./Events.module.css";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
require("./Events.css");
const Events = () => {
  return (
    <div>
      <h1 className={styles.pageTitle}>Events</h1>
      <ul
        className="nav nav-pills mb-3"
        id="pills-tab"
        role="tablist"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "70px",
        }}
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            href="#past"
            role="tab"
            aria-controls="past"
            aria-selected="true"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="future-tab"
            data-toggle="pill"
            href="#future"
            role="tab"
            aria-controls="future"
            aria-selected="false"
          >
            Profile
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="past"
          role="tabpanel"
          aria-labelledby="past-tab"
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "400px 400px 400px",
            gridGap: "10px",
            justifyContent: "center",
            position: "absolute",
            padding: "2%",
          }}
        >
          <div className="card" style={{ padding: "20px" }}>
            <img
              alt="img"
              className="card-img-top"
              style={{ height: "275px", objectFit: "cover" }}
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            <div className="card-body" style={{ padding: "0.5rem" }}>
              <h4 className="card-title" style={{ fontSize: "30px" }}>
                Title
              </h4>
              <div
                className="card-subtitle mb-2 text-muted"
                style={{
                  borderBottom: "1px solid gray",
                  paddingBottom: "5px",
                }}
              >
                <h6 className={styles.subtext} style={{ fontSize: "20px" }}>
                  Author
                </h6>{" "}
                <h6
                  className={styles.subtext}
                  style={{ marginLeft: "10px", fontSize: "15px" }}
                >
                  Date
                </h6>
              </div>
              <div
                style={{
                  maxHeight: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <p className="card-text">Hello</p>
              </div>

              {/* <a href="#" className="card-link">
                Read More
              </a> */}
              {/* <Link to={`/blogpage/${blog.key}`}>More info</Link> */}
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="future"
          role="tabpanel"
          aria-labelledby="future-tab"
          style={{
            marginTop: "20px",
            display: "grid",
            gridTemplateColumns: "400px 400px 400px",
            gridGap: "10px",
            justifyContent: "center",
            position: "absolute",
            padding: "2%",
          }}
        >
          <div className="card" style={{ padding: "20px" }}>
            <img
              alt="img"
              className="card-img-top"
              style={{ height: "275px", objectFit: "cover" }}
              src="https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg"
            />
            <div className="card-body" style={{ padding: "0.5rem" }}>
              <h4 className="card-title" style={{ fontSize: "30px" }}>
                Title
              </h4>
              <div
                className="card-subtitle mb-2 text-muted"
                style={{
                  borderBottom: "1px solid gray",
                  paddingBottom: "5px",
                }}
              >
                <h6 className={styles.subtext} style={{ fontSize: "20px" }}>
                  Author
                </h6>{" "}
                <h6
                  className={styles.subtext}
                  style={{ marginLeft: "10px", fontSize: "15px" }}
                >
                  Date
                </h6>
              </div>
              <div
                style={{
                  maxHeight: "200px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <p className="card-text">Hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
