import styles from "./Blog-Page.module.css";
import * as FaIcons from "react-icons/fa";
import { useEffect, useState } from "react";
import { db } from "../../Backend/Firebase";
import { useParams } from "react-router";

const BlogPage = () => {
  const [blogInfo, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id }: any = useParams();

  useEffect(() => {
    var blog: any = [];
    db.collection("blogs")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          blog.push({ key: doc.id, ...doc.data() });
          setBlog(blog);
          setLoading(false);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  });

  if (loading) {
    return (
      <div>
        <h1 className={styles.pageTitle}>Blog</h1>
        <h2>Loading Blog</h2>
      </div>
    );
  }

  return (
    <div>
      {blogInfo.length > 0 ? (
        blogInfo.map((blog: any) => (
          <div className={styles.contain}>
            <a className={styles.back} href="/blog">
              <FaIcons.FaArrowLeft className={styles.icon} /> Back{" "}
            </a>
            <img
              src={blog.blogpicture}
              width="100%"
              style={{ objectFit: "cover" }}
              alt="card"
            />
            <div className={styles.blog}>
              <h1 className={styles.title}>{blog.title}</h1>
              <div className={styles.content}>
                <div className={styles.info}>
                  <p>{blog.author}</p>
                  <p>{blog.date}</p>
                </div>
                <div className={styles.text}>{blog.content}</div>
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
            <div
              className="row"
              style={{ marginTop: "20px", paddingBottom: "50px" }}
            >
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
        ))
      ) : (
        <h1>Blogs not loaded</h1>
      )}
    </div>
  );
};

export default BlogPage;
