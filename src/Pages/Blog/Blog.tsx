import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../../Backend/Firebase";
import styles from "./Blog.module.css";
import * as FaIcons from "react-icons/fa";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var allblogs: any = [];
    db.collection("blogs").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        allblogs.push({ key: doc.id, ...doc.data() });
      });
      setBlogs(allblogs);
      setLoading(false);
    });
  });

  if (loading) {
    return (
      <div className="mainContainer">
        <h1 className={styles.pageTitle}>Blog</h1>
        <h2>Loading Blogs</h2>
      </div>
    );
  }

  return (
    <div className="mainContainer">
      <h1 className="title">Blog</h1>

      {auth.currentUser != null ? (
        <Link className={styles.edit} to="/blog-edit">
          <FaIcons.FaEdit className={styles.icon} /> Edit
        </Link>
      ) : (
        <div></div>
      )}

      <div className={styles.gridcontainer} style={{ marginTop: "20px" }}>
        {blogs.length > 0 ? (
          blogs.map((blog: any) => (
            <div
              id={blog.key}
              key={blog.key}
              className="card"
              style={{ padding: "20px" }}
            >
              <img
                alt="img"
                className="card-img-top"
                style={{ height: "275px", objectFit: "cover" }}
                src={blog.blogpicture}
              />
              <div className="card-body" style={{ padding: "0.5rem" }}>
                <h4 className="card-title" style={{ fontSize: "30px" }}>
                  {blog.title}
                </h4>
                <div
                  className="card-subtitle mb-2 text-muted"
                  style={{
                    borderBottom: "1px solid gray",
                    paddingBottom: "5px",
                  }}
                >
                  <h6 className={styles.subtext} style={{ fontSize: "20px" }}>
                    {blog.author}
                  </h6>{" "}
                  <h6
                    className={styles.subtext}
                    style={{ marginLeft: "10px", fontSize: "15px" }}
                  >
                    {blog.date}
                  </h6>
                </div>
                <div
                  style={{
                    maxHeight: "200px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </div>
                <Link to={`/blogpage/${blog.key}`}>More info</Link>
              </div>
            </div>
          ))
        ) : (
          <h1>Blogs not loaded</h1>
        )}
      </div>
    </div>
  );
};

export default Blog;
