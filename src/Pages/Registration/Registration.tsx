import styles from "./Registration.module.css";
const Registration = () => {
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
      <h1 className="title">Registration</h1>
      <div className={styles.subtitle}>
        <p>
          We are so happy you’re interested in registering your child with Reach
          For The Stars. Just click REGISTER below the program you would like to
          register your child in. From there, you will be redirected to a google
          form. Please fill it out and a Reach For The Stars member will reach
          out to you!
        </p>
      </div>

      <div className="row">
        <div className="col-12">
          <div className={styles.container}>
            <div className={styles.text}>
              <h1
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginBottom: "20px",
                }}
              >
                Peer Tutoring
              </h1>
              <div>
                At Reach For The Stars, we are dedicated to making your child's
                learning experience feel like being in a real class. Our peer
                tutoring involves one tutor with 2 or more students, stimulating
                a class setting. The students can make friends and connect with
                people all over the world. Also, a google classroom account will
                be made for your child in which tutors will be able to
                communicate with the students and add assignments or any
                necessary information. We will provide you with more information
                once you sign up, but feel free to contact us at
                info.reachstars@gmail.com if you have any questions!{" "}
              </div>
            </div>
            <div>
              <div className={styles.button}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDq6UYxXdQx_QtJLUpy8setX5qs9SbiFOZ06c1pgoIIz6jvw/viewform?usp=send_form">
                  <button className="buttonStyle" style={{ width: "150px" }}>
                    Get Tutored
                  </button>
                </a>
              </div>
              <div className={styles.button}>
                <a href="/signup">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScX1UViQOZB1CqHKTB53UkAZMitp9mWl1h-LpKV4OhZ2tH0eA/viewform">
                    <button className="buttonStyle" style={{ width: "150px" }}>
                      Join as Tutor
                    </button>
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className={styles.container}>
            <div className={styles.text}>
              <h1
                style={{
                  color: "white",
                  fontSize: "40px",
                  marginBottom: "20px",
                }}
              >
                Private Tutoring
              </h1>
              <div>
                Private Tutoring is done with a tutor and one student. The child
                gets more time with the tutor in addition to being able to ask
                more questions. Your child will also be given a student account
                where Google Classroom will be set up for your child to
                communicate with the tutor and give the child activities to do
                until the next tutoring session. Our Curriculum Creators will
                give our tutors the lesson plans and the tutor will teach your
                child. If you have any questions please feel free to contact us
                at info.reachstars@gmail.com{" "}
              </div>
            </div>
            <div>
              <div className={styles.button}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdsmMa1E4ksy3s_OIPzCYIOfjJW4olBxcUDWVcHhEjeJj_90g/viewform">
                  <button className="buttonStyle" style={{ width: "150px" }}>
                    Get Tutored
                  </button>
                </a>
              </div>
              <div className={styles.button}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScX1UViQOZB1CqHKTB53UkAZMitp9mWl1h-LpKV4OhZ2tH0eA/viewform">
                  <button className="buttonStyle" style={{ width: "150px" }}>
                    Join as Tutor
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
