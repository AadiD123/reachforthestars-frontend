import styles from "./Marker.module.css";
import { Link } from "react-router-dom";
function Marker(props: any) {
  const { name, text } = props;

  return (
    <Link to={`/individual-about/${name}/${text}`}>
      <div
        className={styles.pin}
        style={{ backgroundColor: "blue", cursor: "pointer" }}
        title={name}
      >
        <div
          className={styles.modal}
          style={{ width: "200px", maxHeight: "350px", overflowY: "hidden" }}
        >
          <img
            alt="card"
            className="card-img-top"
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?width=982&height=726&auto=webp&quality=75"
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
