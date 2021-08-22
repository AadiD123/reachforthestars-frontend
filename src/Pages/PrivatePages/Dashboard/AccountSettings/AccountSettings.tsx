import { useRef, MutableRefObject } from "react";
import { updateStudent } from "../../../../Backend/db/dbfunctions";
import { auth } from "../../../../Backend/Firebase";

export default function AccountSettings() {
  const firstNameRef = useRef() as MutableRefObject<any>;
  const lastNameRef = useRef() as MutableRefObject<any>;
  const timezoneRef = useRef() as MutableRefObject<any>;
  const submitChanges = (e: any) => {
    if (auth.currentUser === null) {
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

      // if (timezoneRef.current.value != "") {
      //   data = { ...data, timezone: timezoneRef.current.value };
      // }
      data = { ...data, timezone: "abcdeehddhdfg" };

      //updateStudent(currentUserEmail, data);
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div>
      <h1>My Account</h1>
      <p>Update and Edit the information you share with community</p>
      <p>
        Login Email: <br />
        User Email <br />
        Your email address cannot be changed <br />
      </p>
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
            style={{ width: "80%" }}
            type="text"
            id="firstname"
            ref={firstNameRef}
          />
          <br />
          <label style={{ marginTop: "20px" }}>Timezone</label>
          <br />
          <input
            style={{ width: "80%" }}
            id="timezone"
            type="text"
            ref={timezoneRef}
          />
        </div>
        <div>
          <label>Last Name</label>
          <br />
          <input
            style={{ width: "80%" }}
            type="text"
            id="lastname"
            ref={lastNameRef}
          />
          <br />
          <br />
          <br />
          <button
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
          <input
            type="submit"
            style={{
              color: "white",
              border: "none",
              background: "#001E3D",
              width: "120px",
            }}
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
}