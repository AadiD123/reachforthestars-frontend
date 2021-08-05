import { useState } from "react";
import styles from "./Navbar.module.css";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { auth, db } from "../../Backend/Firebase";

function Navbar() {
  const [navbarData, setNavbarData] = useState([
    {
      title: "Login",
      path: "/login",
    },
    {
      title: "Sign Up",
      path: "/signup",
    },
  ]);

  auth.onAuthStateChanged(function (user) {
    if (user?.email) {
      db.collection("users")
        .doc(user.email)
        .get()
        .then((doc) => {
          if (doc.data()?.firstName != null) {
            var name = doc.data()?.firstName;
            setNavbarData([{ title: "Welcome, " + name, path: "./dashboard" }]);
          }
        });
    }
  });
  return (
    <nav
      className="navbar"
      id="navs"
      style={{
        backgroundColor: "none",
        marginTop: "0px",
        width: "100%",
        height: "80px",
        zIndex: 2,
      }}
    >
      <Sidebar />
      <div
        className="navbarSupportedContent"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        {navbarData.map((item, index) => {
          return (
            <Link className={styles.navLink} to={item.path}>
              <button
                className={`${styles.navbarbuttonstyling} btn my-2 my-sm-0`}
                key={index}
              >
                {item.title}
              </button>
            </Link>
          );
        })}
      </div>
      <div style={{ width: "100%", height: "50px" }}></div>
    </nav>
  );
}

export default Navbar;
