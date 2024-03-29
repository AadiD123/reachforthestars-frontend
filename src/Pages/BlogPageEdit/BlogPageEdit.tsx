import { useRef, MutableRefObject, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./BlogPageEdit.module.css";
import * as FaIcons from "react-icons/fa";
import { Editor } from "@tinymce/tinymce-react";
import { addBlog } from "../../Backend/db/dbfunctions";

// import { ContentState, convertToRaw, EditorState } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { convertToHTML } from "draft-convert";
// import DOMPurify from "dompurify";

const BlogPageEdit = () => {
  const API_KEY = process.env.REACT_APP_TINY_CLOUD_MCE_TEXT_EDITOR_API_KEY;
  const authorRef = useRef() as MutableRefObject<any>;
  const urlRef = useRef() as MutableRefObject<any>;
  const titleRef = useRef() as MutableRefObject<any>;
  const [content, setContent] = useState<HTMLCollection>();
  const history = useHistory();

  const handleEditorChange = (e: any) => {
    setContent(e.target.getContent());
  };

  const setBlogData = (e: any) => {
    const date = new Date();
    var dateinput =
      (date.getMonth() + 1).toString() +
      "/" +
      date.getDate().toString() +
      "/" +
      date.getFullYear().toString();
    if (content != null) {
      addBlog(
        authorRef.current.value,
        dateinput,
        titleRef.current.value,
        content,
        urlRef.current.value
      );
    }
    history.push("/blog");
  };

  return (
    <div className="mainContainer">
      <h1>Write Blog</h1>
      <form onSubmit={setBlogData}>
        <div className="form-group">
          <label>Title:</label>
          <input
            ref={titleRef}
            type="text"
            className="form-control"
            placeholder="Enter Your Title.."
            required={true}
          />
        </div>
        <label>Content:</label>
        <Editor
          apiKey={API_KEY}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image",
              "charmap print preview anchor help",
              "searchreplace visualblocks code",
              "insertdatetime media table paste wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help",
          }}
          onChange={handleEditorChange}
        />
        <div>
          <div className="form-group" style={{ marginTop: "20px" }}>
            <label>Author:</label>
            <input
              ref={authorRef}
              type="text"
              className="form-control"
              placeholder="Enter New Author.."
              required={true}
            />
          </div>
          <div className="form-group">
            <label>Image Url:</label>
            <input
              ref={urlRef}
              type="text"
              className="form-control"
              placeholder="Enter New Image Src Url..."
              required={true}
            />
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <button
            type="submit"
            className={styles.button}
            style={{ marginRight: "50px" }}
          >
            Publish
          </button>
          <Link to="/blog">
            <button className={styles.button}>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default BlogPageEdit;
