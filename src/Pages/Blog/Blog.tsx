import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, db } from "../../Backend/Firebase";
import styles from "./Blog.module.css";
import * as FaIcons from "react-icons/fa";

export interface BlogInterface {
  key: string;
  author: string;
  content: string;
  date: string;
  editor: string;
  title: string;
  img: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const [isAuthenticatedUser, setIsAuthenticatedUser] =
    useState<boolean>(false);

  useEffect(() => {
    if (blogs.length > 0) {
      return;
    }
    let allblogs: BlogInterface[] = [];
    db.collection("blogs").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        allblogs.push({
          key: doc.id,
          author: doc.data()?.author,
          content: doc.data()?.content,
          date: doc.data()?.date,
          editor: doc.data()?.editor,
          title: doc.data()?.title,
          img: doc.data()?.img,
        });
      });
      setBlogs(
        allblogs.sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
      );
      localStorage.setItem("blogs", JSON.stringify(allblogs));
      setLoading(false);
    });
  });

  auth.onAuthStateChanged(function (user) {
    if (user?.email) {
      if (user.email === "kameronjones@reachforthestarss.com") {
        setIsAuthenticatedUser(true);
        console.log(isAuthenticatedUser);
      }
    }
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

      {isAuthenticatedUser ? (
        <Link className={styles.edit} to="/blog-edit">
          <FaIcons.FaEdit className={styles.icon} /> Edit
        </Link>
      ) : (
        <div></div>
      )}

      <div className={styles.gridcontainer} style={{ marginTop: "20px" }}>
        {blogs.length > 0 ? (
          blogs.map((blog: BlogInterface) => (
            <div
              id={blog.key}
              key={blog.key}
              className={`card ${styles.blogCard}`}
              style={{ padding: "20px" }}
              onClick={() => {
                history.push(`/blogpage/${blog.key}`);
              }}
            >
              <img
                alt="img"
                className="card-img-top"
                style={{ height: "275px", objectFit: "cover" }}
                src={blog.img}
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
                    textOverflow: "ellipses",
                  }}
                >
                  <p
                    className="card-text"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </div>
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
