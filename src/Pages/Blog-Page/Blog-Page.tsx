import styles from "./Blog-Page.module.css";
import * as FaIcons from "react-icons/fa";
import { useEffect, useState } from "react";
import { db } from "../../Backend/Firebase";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { BlogInterface } from "../Blog/Blog";

const BlogPage = () => {
  const [blogInfo, setBlog] = useState<BlogInterface[]>([]);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id }: any = useParams();

  useEffect(() => {
    const tempGet = localStorage.getItem("blogs");
    let temp: BlogInterface[] = [];
    if (tempGet !== null) {
      temp = JSON.parse(tempGet);
    }
    if (temp.length > 0) {
      for (let i = 0; i < temp?.length; i++) {
        if (temp[i].key === id) {
          setBlog([temp[i]]);
          console.log(blogInfo);
          setLoading(false);
          return;
        }
      }
      console.log("No such document!");
      return;
    }
    let blog: any = [];

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
  }, [localStorage.getItem("blogs")]);

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
            <Link className={styles.back} to="/blog">
              <FaIcons.FaArrowLeft className={styles.icon} /> Back{" "}
            </Link>
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
                  <p>Author: {blog.author}</p>
                  <p>Edited By: {blog.edited}</p>
                  <p>{blog.date}</p>
                </div>
                <div
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                  className={styles.text}
                ></div>
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
              <a href="/blog">See All</a>
            </div>
            <div
              className={styles.gridcontainer}
              style={{ marginTop: "20px", paddingBottom: "50px" }}
            >
              {blogs.length > 0 ? (
                blogs.map((blog: any) => (
                  <div
                    id={blog.key}
                    key={blog.key}
                    style={{ marginTop: "20px", marginBottom: "10px" }}
                  >
                    <div className="card" style={{ height: "100%" }}>
                      <img
                        alt="card"
                        className="card-img-top"
                        src={blog.blogpicture}
                        style={{ height: "275px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h4 className="card-title">{blog.title}</h4>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <h1>Blogs not loaded</h1>
              )}
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
