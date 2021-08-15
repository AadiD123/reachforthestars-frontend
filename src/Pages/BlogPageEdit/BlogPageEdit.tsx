import { useRef, MutableRefObject, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./BlogPageEdit.module.css";
import * as FaIcons from "react-icons/fa";
// import { Editor } from "@tinymce/tinymce-react";
import { addBlog } from "../../Backend/db/dbfunctions";

import { ContentState, convertToRaw, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";

const BlogPageEdit = () => {
  const API_KEY = process.env.REACT_APP_TINY_CLOUD_MCE_TEXT_EDITOR_API_KEY;
  const authorRef = useRef() as MutableRefObject<any>;
  const urlRef = useRef() as MutableRefObject<any>;
  const titleRef = useRef() as MutableRefObject<any>;
  // const [content, setContentState] = useState("");
  const history = useHistory();

  const [content, setContent] = useState<string | Node>("");

  // const handleEditorChange = (e: any) => {
  //   console.log(
  //     "Content was updated:",
  //     e.target.getContent({ format: "text" })
  //   );
  //   setContentState(e.target.getContent({ format: "text" }));
  //   console.log(content, " this is your content");
  // };

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [convertedContent, setConvertedContent] = useState("");

  const handleEditorChange = (state: any) => {
    setEditorState(state);
    convertContentToHTML();
  };

  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
    createMarkup(convertedContent);
  };

  const createMarkup = (html: string | Node) => {
    setContent(DOMPurify.sanitize(html));
  };

  const setBlogData = (e: any) => {
    const date = new Date();
    var dateinput =
      (date.getMonth() + 1).toString() +
      "/" +
      date.getDate().toString() +
      "/" +
      date.getFullYear().toString();
    addBlog(
      authorRef.current.value,
      dateinput,
      titleRef.current.value,
      content,
      urlRef.current.value
    );
    history.push("/blog");
  };

  return (
    <div className={styles.contain}>
      <Link to="/blog" className={styles.back}>
        <FaIcons.FaArrowLeft className={styles.icon} /> Back{""}
      </Link>
      <h1 className={styles.edit}>Edit:</h1>
      <form className={styles.textEditor} onSubmit={setBlogData}>
        <div className="form-group" style={{ marginTop: "20px" }}>
          <label>Edit Title:</label>
          <input
            ref={titleRef}
            type="text"
            className="form-control"
            placeholder="Enter Your Title.."
            required={true}
          />
        </div>
        {/* <Editor
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
        /> */}

        <Editor
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
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
        <button type="submit" className={styles.button}>
          Save
        </button>
        <button className={styles.button2}>Cancel</button>
      </form>
    </div>
  );
};

export default BlogPageEdit;
function convertContentToHTML() {
  throw new Error("Function not implemented.");
}
