import styles from "../Dashboard.module.css";

export default function TutoringFAQ() {
  return (
    <div style={{ width: "700px" }}>
      <div
        style={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
      >
        <h1 className={styles.title}>Get Started</h1>
        <p
          className={styles.paragraph}
          style={{ marginTop: "20px", fontSize: "21px" }}
        >
          Click these if you are new or have any additional questions.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button} style={{ width: "200px" }}>
            FAQ (Start Here!)
          </button>

          <button
            className={styles.button}
            style={{ marginLeft: "20px", width: "300px" }}
          >
            Tutoring Orientation (Read First)
          </button>
        </div>

        <h1 className={styles.title} style={{ marginTop: "20px" }}>
          Get Paired with a Student!
        </h1>
        <p
          className={styles.paragraph}
          style={{ marginTop: "20px", fontSize: "21px" }}
        >
          Don't have a student? Student pairing information down below.{" "}
        </p>
        <div className={styles.buttons}>
          <button className={styles.button} style={{ width: "200px" }}>
            Meet Students
          </button>
          <button
            className={styles.button}
            style={{ marginLeft: "20px", width: "250px" }}
          >
            Pre-Tutoring Form
          </button>
          <button
            className={styles.button}
            style={{ marginLeft: "20px", width: "300px" }}
          >
            Tutoring Initiation Form
          </button>
        </div>
        <button
          className={styles.button}
          style={{ marginTop: "20px", width: "400px" }}
        >
          Dropping a Student Form
        </button>
        <p
          className={styles.paragraph}
          style={{ marginTop: "20px", fontSize: "21px" }}
        >
          Tutors, use the tutor password to view available students or access
          the tutoring forms. Email us at tutoring.reachstars@gmail.com to get
          your password if you do not have one already.
        </p>

        <h1 className={styles.title}>Tutoring Resources</h1>
        <p
          className={styles.paragraph}
          style={{ marginTop: "20px", fontSize: "21px" }}
        >
          Need help with formulating your lessons? View helpful resources here!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button} style={{ width: "250px" }}>
            Request Lesson Plan
          </button>
          <button
            className={styles.button}
            style={{ marginLeft: "20px", width: "200px" }}
          >
            Tutoring Resources
          </button>
          <button
            className={styles.button}
            style={{ marginLeft: "20px", width: "170px" }}
          >
            Reading
          </button>
        </div>
        <button
          className={styles.button}
          style={{ marginTop: "20px", width: "330px" }}
        >
          Parent Email Template
        </button>
      </div>
    </div>
  );
}
