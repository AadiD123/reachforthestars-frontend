import styles from "./Events.module.css";
import { useState } from "react";
require("./Events.css");
const Events = () => {
  const [toggle, setToggle] = useState(false);

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
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-toggle="pill"
            onClick={() => {
              setToggle(false);
            }}
            role="tab"
            aria-controls="past"
            aria-selected="true"
            style={{
              color: "white",
              backgroundColor: "#001e3d",
              border: "1px solid #001e3d",
              marginLeft: "1vw",
              borderRadius: 0,
              width: "auto",
              minWidth: "10vw",
              textAlign: "center",
            }}
          >
            Up Coming
          </button>
        </li>
        <li className="nav-item">
          <button
            className="nav-link"
            id="future-tab"
            data-toggle="pill"
            onClick={() => {
              setToggle(true);
            }}
            role="tab"
            aria-controls="future"
            aria-selected="false"
            style={{
              color: "white",
              backgroundColor: "#001e3d",
              border: "1px solid #001e3d",
              marginLeft: "1vw",
              borderRadius: 0,
              width: "auto",
              minWidth: "10vw",
              textAlign: "center",
            }}
          >
            Past
          </button>
        </li>
      </ul>
      <div className="tab-content ">
        <div>
          {toggle == false ? (
            <div
              className="tab-pane "
              id="past"
              role="tabpanel"
              aria-labelledby="past-tab"
              style={{
                marginTop: "20px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridGap: "20px",
                justifyContent: "center",
                padding: "5%",
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
                    Home
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
          ) : (
            <div
              className="tab-pane"
              id="future"
              role="tabpanel"
              aria-labelledby="future-tab"
              style={{
                marginTop: "20px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridGap: "20px",
                justifyContent: "center",
                padding: "5%",
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
