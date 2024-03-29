import styles from "./Footer.module.css";
function Footer() {
  return (
    <div>
      <footer className={`${styles.theFooter}`}>
        <div className={`${styles.contactUs}`}>
          <div className={`${styles.contactUsContent}`}>
            <h1>Contact Us</h1>
            <input placeholder="Your name" />
            <input placeholder="Your email" />
            <textarea placeholder="Message"></textarea>
            <input
              type="submit"
              style={{ width: "30%", marginLeft: "35%" }}
              className={`${styles.submitContact}`}
            />
          </div>
        </div>
        {/* <div className={`${styles.subscribe}`}>
          <div className={`${styles.subscribeContent}`}>
            <p>Subscribe to our newsletter</p>
            <input placeholder="Your email" />
            <input
              type="submit"
              style={{ backgroundColor: "#E5D5C7", border: "none" }}
            />
          </div>
        </div> */}
        <div className={`${styles.copyright}`}>
          <p>
            ©2021 Reach For The Starss.
            <br /> Coded by Aaditya Doiphode, Robert Burris, Aryeman Singh,
            Keerthi Kalyaan, and Aron Thakur{" "}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
