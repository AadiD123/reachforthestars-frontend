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
      <h2>You can make a difference in a child's education.</h2>
      <p>
        We want to provide the best, most efficient, and cost-free programs to
        our students. However, in order to provide productive resources, we need
        your help.
      </p>
      <a href="https://bank.hackclub.com/donations/start/reach-for-the-stars">
        <div className="buttonStyle">Donate</div>
      </a>
      <p>
        Your donations will go directly towards improving our programs such as:
      </p>
      <div className={styles.circle}>AP Tutoring Sessions</div>
      <h2>How can your donation help?</h2>
      <h2>Other ways to help</h2>
      <p>
        We understand times are tough. Alternatively, you help us as volunteer.
      </p>
      <br />
      <p>We are always looking for more hands to help our students excel.</p>
      <a href="https://bank.hackclub.com/donations/start/reach-for-the-stars">
        <div className="buttonStyle">Volunteer Positions</div>
      </a>
    </div>
  );
}
