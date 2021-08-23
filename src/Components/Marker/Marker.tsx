import styles from "./Marker.module.css";
import { Link } from "react-router-dom";
function Marker(props: any) {
  const { name, text, src } = props;
  const setToStorage = (aboutname: any, abouttext: any, aboutsrc: any) => {
    localStorage.setItem('name', aboutname);
    localStorage.setItem('text', abouttext );
    localStorage.setItem('src', aboutsrc)
  }

  return (
    <Link to={`/individual-about/`}>
      <div
        className={styles.pin}
        style={{ backgroundColor: "blue", cursor: "pointer" }}
        title={name} 
        onClick={() => setToStorage(name, text, src)}
      >
        <div
          className={styles.modal}
          style={{ width: "200px", maxHeight: "350px", overflowY: "hidden" }}
        >
          <img
            alt="card"
            className="card-img-top"
            src= {src}
            style={{ borderRadius: "10px" }}
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
