import styles from "./Marker.module.css";
import { Link } from "react-router-dom";
function Marker(props: any) {
  const { name, text, src } = props;

  const setToStorage = (name: any, bio: any, src: any) => {
    localStorage.setItem("name", name);
    let bArray = localStorage.getItem("biosArray");
    if (bArray === null) {
      return;
    }
    let biosArray = JSON.parse(bArray);
    for (let i = 0; i < biosArray.length; i++) {
      if (biosArray[i].name === name) {
        console.log("reached");
        console.log(biosArray[i].bio);
        localStorage.setItem("text", biosArray[i].bio);
      }
    }
    localStorage.setItem("src", src);
  };

  return (
    <Link to={`/individual-about/`}>
      <div
        className={styles.pin}
        style={{ backgroundColor: "blue", cursor: "pointer" }}
        title={name}
        onClick={() => {
          setToStorage(name, text, src);
        }}
      >
        <div
          className={styles.modal}
          style={{ width: "200px", maxHeight: "350px", overflowY: "hidden" }}
        >
          <img
            alt="card"
            className="card-img-top"
            src={src}
            style={{
              borderRadius: "10px",
              maxHeight: "200px",
              objectFit: "cover",
            }}
          />
          <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <p className="card-text" style={{ fontSize: "12px" }}>
              {text}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Marker;
