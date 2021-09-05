import styles from "./Blog-Page.module.css";
import * as FaIcons from "react-icons/fa";
import { useEffect, useState } from "react";
import { db } from "../../Backend/Firebase";
import { useParams } from "react-router";
import { useHistory, useLocation } from "react-router-dom";
import { BlogInterface } from "../Blog/Blog";

const BlogPage = () => {
  const [blogInfo, setBlog] = useState<BlogInterface[]>([]);
  const [blogs, setBlogs] = useState<BlogInterface[]>([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const location = useLocation();
  let { id }: any = useParams();

  useEffect(() => {
    const tempGet = localStorage.getItem("blogs");
    let temp: BlogInterface[] = [];
    if (tempGet !== null) {
      temp = JSON.parse(tempGet);
    }
    setBlogs(temp);
    if (temp.length > 0) {
      for (let i = 0; i < temp?.length; i++) {
        if (temp[i].key === id) {
          setBlog([temp[i]]);
          setLoading(false);
          console.log(id);
          return;
        }
      }
      console.log("No such document!");
      return;
    }
    let blog: BlogInterface[] = [];

    db.collection("blogs")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          blog.push({ 
            key: doc.id, 
            author: doc.data()?.author, 
            content: doc.data()?.content,
            date: doc.data()?.date,
            editor: doc.data()?.editor,
            title: doc.data()?.title,
            img: doc.data()?.img
          });
          setBlogs(blog.sort((a, b) => (Date.parse(b.date) - Date.parse(a.date))));
          setLoading(false);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [localStorage.getItem("blogs"), location]);

  if (loading) {
    return (
      <div>
        <h1 className={styles.pageTitle}>Blog</h1>
        <h2>Loading Blog</h2>
      </div>
    )
  }

  return (
    <div>
      {blogInfo.length > 0 ? (
        blogInfo.map((blog: BlogInterface) => (
          <div className={styles.contain}>
            <div className={styles.back} onClick={() => {history.push("/blog")}}>
              <FaIcons.FaArrowLeft className={styles.icon}/> Back{" "}
            </div>
            <img
              src={blog.img}
              width="100%"
              style={{ objectFit: "cover" }}
              alt="card"
            />
            <div className={styles.blog}>
              <h1 className={styles.title}>{blog.title}</h1>
              <div className={styles.content}>
                <div className={styles.info}>
                  <p>Author: {blog.author}</p>
                  {blog.editor !== "" ? <p>Edited By: {blog.editor}</p> : <div />}
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
                blogs.slice(0, 3).map((blog: BlogInterface) => (
                  <div
                    id={blog.key}
                    key={blog.key}
                    style={{ marginTop: "20px", marginBottom: "10px" }}
                    onClick = {() => {history.push(`/blogpage/${blog.key}`)}}
                  >
                    <div className="card" style={{ height: "100%" }}>
                      <img
                        alt="card"
                        className="card-img-top"
                        src={blog.img}
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
