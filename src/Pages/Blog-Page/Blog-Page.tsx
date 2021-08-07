import styles from "./Blog-Page.module.css";
import * as FaIcons from "react-icons/fa";
const BlogPage = (props: any) => {
  return (
    <div className={styles.contain}>
      <a className={styles.back} href="/blog">
        <FaIcons.FaArrowLeft className={styles.icon} /> Back{" "}
      </a>
      <img
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        width="100%"
        alt="card"
      />
      <div className={styles.blog}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.content}>
          <div className={styles.info}>
            <p>Author</p>
            <p>Date</p>
          </div>
          <div className={styles.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            voluptatem quibusdam, error quaerat, officiis reiciendis cupiditate
            magni voluptates earum inventore recusandae. Hic in magni porro
            molestiae. Adipisci quae deleniti et! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro aspernatur mollitia, tempore,
            quos quam facere nesciunt quo id reiciendis praesentium molestiae,
            laudantium sed ducimus cum tenetur recusandae voluptas enim
            asperiores! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Est a placeat quidem eligendi quam provident numquam culpa sed
            recusandae. A provident asperiores reprehenderit vitae delectus nemo
            error rerum omnis ducimus. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Exercitationem corrupti neque praesentium? Atque
            recusandae libero doloribus possimus voluptate itaque nesciunt,
            consectetur nam illum, repellendus quo provident voluptas maiores
            eos ut.
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem dolor adipisci voluptas, nostrum repellat ipsa,
            tempore ratione similique recusandae perspiciatis id illum mollitia
            blanditiis ipsam autem delectus esse maxime quam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Eveniet molestiae error
            provident dolor iure, reiciendis beatae unde doloribus deleniti
            sapiente praesentium numquam quam, architecto aspernatur, a eligendi
            nobis aliquam facere!
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <span style={{ marginLeft: "1px", fontSize: "2rem" }}>
          Recent Posts
        </span>
        <a href="index.html">See All</a>
      </div>
      <div className="row" style={{ marginTop: "20px", paddingBottom: "50px" }}>
        <div
          className="newsItem col-12 col-sm-6 col-md-4 col-lg-4"
          style={{ marginBottom: "10px" }}
        >
          <div className="card">
            <img
              alt="card"
              className="card-img-top"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
            </div>
          </div>
        </div>
        <div
          className="newsItem col-12 col-sm-6 col-md-4 col-lg-4"
          style={{ marginBottom: "10px" }}
        >
          <div className="card">
            <img
              alt="card"
              className="card-img-top"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
            </div>
          </div>
        </div>
        <div
          className="newsItem col-12 col-sm-6 col-md-4 col-lg-4"
          style={{ marginBottom: "10px" }}
        >
          <div className="card">
            <img
              alt="card"
              className="card-img-top"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
            />
            <div className="card-body">
              <h4 className="card-title">Title</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
