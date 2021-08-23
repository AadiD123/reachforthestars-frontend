import styles from "../Dashboard.module.css";

export default function GeneralDashboard() {
  return (
    <div>
      <h1 className={styles.title}>General Volunteers</h1>
      <p className={styles.paragraph}>
        Welcome to the General Volunteer tab! Here you can find all the things
        you can work on and all materials you will need as a general volunteer!
      </p>
      <div style={{ marginBottom: "10px" }}></div>
      <h1 className={styles.title}>Help Us Get More Students</h1>
      <p className={styles.paragraph}>
        Reach out to ALL the parents you know to help us get more students! Find
        local schools and put their emails on this spreadsheet for us to
        contact.{" "}
      </p>
      <button className={styles.button} style={{ width: "200px" }}>
        Outreach Spreadsheet
      </button>
    </div>
  );
}
