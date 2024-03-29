import { useRef, MutableRefObject, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { idText } from "typescript";
import { useAuth } from "../../../../../Backend/Contexts/AuthContext";
import { updateStudent } from "../../../../../Backend/db/dbfunctions";
import { auth, db } from "../../../../../Backend/Firebase";

export default function AccountSettings() {
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [user, setUser] = useState<any>(null);
  const firstNameRef = useRef() as MutableRefObject<any>;
  const lastNameRef = useRef() as MutableRefObject<any>;
  const timezoneRef = useRef() as MutableRefObject<any>;
  const useauth = useAuth();
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user?.email) {
        setCurrentUserEmail(user.email);
        db.collection("volunteers")
          .doc(user.email)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setUser({ key: doc.id, ...doc.data() });
            } else {
              console.log("Error getting tutor email");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      }
    });
  });

  const submitChanges = (e: any) => {
    if (useauth.currentUser === null) {
      return;
    }
    let data = {};
    try {
      if (firstNameRef.current.value !== "") {
        data = { ...data, firstName: firstNameRef.current.value };
      }

      if (lastNameRef.current.value !== "") {
        data = { ...data, lastName: lastNameRef.current.value };
      }

      data = { ...data, timezone: "abcdeehddhdfg" };
    } catch (e) {
      alert(e);
    }
  };

  const handleLogout = () => {
    useauth.logout();
    history.push("/");
    window.location.reload();
  };

  return (
    <div>
      <h1>My Account</h1>
      <p>Update and Edit the information you share with community</p>
      <p>
        Your Email:{" "}
        {currentUserEmail != null ? (
          <div>{currentUserEmail}</div>
        ) : (
          <div>Loading your email</div>
        )}
        Your email address cannot be changed <br />
      </p>
      {/* {user != null ? (
        <div>
          <form
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
            onSubmit={(e) => {
              submitChanges(e);
            }}
          >
            <div>
              <label>First Name</label>
              <br />
              <input
                placeholder={user.firstName}
                style={{ width: "80%" }}
                type="text"
                id="firstname"
                ref={firstNameRef}
              />
              <br />
              <label>Last Name</label>
              <input
                placeholder={user.lastName}
                style={{ width: "80%" }}
                type="text"
                id="lastname"
                ref={lastNameRef}
              />
              <br />
              <label style={{ marginTop: "20px" }}>Timezone</label>
              <br />
              <input
                placeholder={user.timezone.abbrev}
                style={{ width: "80%" }}
                id="timezone"
                type="text"
                ref={timezoneRef}
              />
              <br />
              <br />
              <br />
              <button
                className="buttonStyle"
                style={{
                  color: "black",
                  border: "none",
                  background: "grey",
                  width: "120px",
                  marginRight: "20px",
                }}
              >
                Cancel
              </button>
              <br />
              <button
                type="submit"
                className="buttonStyle"
                style={{
                  color: "white",
                  border: "none",
                  width: "120px",
                }}
                value=""
              >
                {" "}
                Submit{" "}
              </button>
            </div>
            <br />
            <br />
          </form>
        </div>
      ) : (
        <div>Error loading form</div>
      )} */}
      <button
        className="buttonStyle"
        style={{
          color: "#cc393e",
          border: "none",
          width: "120px",
        }}
        onClick={handleLogout}
      >
        Sign Out
      </button>
    </div>
  );
}
