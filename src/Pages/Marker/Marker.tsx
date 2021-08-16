import styles from "./Marker.module.css";

function Marker(props: any) {
  const { name, text } = props;

  return (
    <div
      className={styles.pin}
      style={{ backgroundColor: "blue", cursor: "pointer" }}
      title={name}
    >
      <div className={styles.modal} style={{ width: "200px" }}>
        <img
          alt="card"
          className="card-img-top"
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg?width=982&height=726&auto=webp&quality=75"
          style={{ borderRadius: "10px" }}
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Marker;
