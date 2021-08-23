import styles from "./Marker.module.css";
import { Link } from "react-router-dom";
function Marker(props: any) {
<<<<<<< HEAD
  const { name, text } = props;

  return (
    <Link to={`/individual-about/${name}/${text}`}>
      <div
        className={styles.pin}
        style={{ backgroundColor: "blue", cursor: "pointer" }}
        title={name}
=======
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
>>>>>>> 78d80cb2eba5221153e14ca118737983308c17cc
      >
        <div
          className={styles.modal}
          style={{ width: "200px", maxHeight: "350px", overflowY: "hidden" }}
        >
          <img
            alt="card"
            className="card-img-top"
<<<<<<< HEAD
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?width=982&height=726&auto=webp&quality=75"
=======
            src= {src}
>>>>>>> 78d80cb2eba5221153e14ca118737983308c17cc
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
<<<<<<< HEAD
    </Link>
=======
   </Link>
>>>>>>> 78d80cb2eba5221153e14ca118737983308c17cc
  );
}

export default Marker;
