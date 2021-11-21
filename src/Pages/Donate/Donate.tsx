import styles from "./Donate.module.css";

export function Donate() {
  return (
    <div
      className="mainContainer"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>WHY DONATE?</h1>
      <br />

      <h2>You can make a difference in a child's education.</h2>
      <p>
        We want to provide the best, most efficient, and cost-free programs to
        our students. However, in order to provide productive resources, we need
        your help.
      </p>
      <a href="https://bank.hackclub.com/donations/start/reach-for-the-stars">
        <div className={`${styles.donateButton} buttonStyle`}>Donate</div>
      </a>
      <br />
      <br />
      <p style={{ fontSize: "20px" }}>
        Your donations will go directly towards improving our programs such as:
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          justifyContent: "space-evenly",
        }}
      >
        <div className={styles.circle}>AP Tutoring Sessions</div>
        <div className={styles.circle}>MCAT Webinar</div>
        <div className={styles.circle}>Winter & Summer Camps</div>
      </div>

      <br />
      <br />
      <h2>How can your donation help?</h2>
      <br />
      <br />
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.circle}>$5</div>
        <div style={{ width: "400px" }}>
          <h2>Can provide students with new sources of learning</h2>
          <p>
            With your generosity, Reach for the Stars can create new learning
            platforms on Youtube to further our reach to children in need.{" "}
          </p>
          <a href="https://bank.hackclub.com/donations/start/reach-for-the-stars">
            <div className="buttonStyle">Help Us</div>
          </a>
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.circle}>$10</div>
        <div style={{ width: "400px" }}>
          <h2>Can provide students with longer instruction periods.</h2>
          <p>
            Due to the nature of our services, the current facilitators of
            tutoring limit the amount of time we have with our students. With
            your donation, we will have the opportunity to implement longer
            study sessions for our students, strengthening their learning
            retention and abilities.
          </p>
          <a href="https://bank.hackclub.com/donations/start/reach-for-the-stars">
            <div className="buttonStyle">Help Us</div>
          </a>
        </div>
      </div>
      <br />
      <br />
      <div
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.circle}>$15</div>
        <div style={{ width: "400px" }}>
          <h2>Can implement new programs in different fields of study.</h2>
          <p>
            We have provided our students with niche opportunities, such as MCAT
            webinars and Financial Literacy webinars. Your donations will go
            towards expanding our educational horizon and providing
            informational sessions on different fields of study.
          </p>
          <a href="https://bank.hackclub.com/donations/start/reach-for-the-stars">
            <div className="buttonStyle">Help Us</div>
          </a>
        </div>
      </div>
      <br />
      <br />

      <div
        style={{
          backgroundColor: "#aab5c5",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "start",
          }}
        >
          <br />
          <h2>Other ways to help</h2>
          <br />
          <p style={{ fontSize: "20px" }}>
            We understand times are tough. Alternatively, you help us as
            volunteer.
          </p>
          <p>
            We are always looking for more hands to help our students excel.
          </p>
          <a href="">
            <div className="buttonStyle">Volunteer Positions</div>
          </a>
        </div>
        <br />
      </div>
    </div>
  );
}
