import React from "react";
import styles from "./BlogPageEdit.module.css"
import * as FaIcons from "react-icons/fa";
import {Editor}  from '@tinymce/tinymce-react';
const BlogPageEdit = () => {
    const API_KEY = process.env.REACT_APP_TINY_CLOUD_MCE_TEXT_EDITOR_API_KEY;
    return(
       
        <div className={styles.contain}>
            <a className = {styles.back}  href="index.html" ><FaIcons.FaArrowLeft className={styles.icon}  /> Back </a>
            <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" width="100%" alt = "card" />
            <div className={styles.blog}>
            <h1 className={styles.title}>Title</h1>
                <div className={styles.content}>
                <div className={styles.info}>
                <p>Author</p>
                <p>Date</p>
                </div>
               <div className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatem quibusdam, error quaerat, officiis reiciendis cupiditate magni voluptates earum inventore recusandae. Hic in magni porro molestiae. Adipisci quae deleniti et!
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro aspernatur mollitia, tempore, quos quam facere nesciunt quo id reiciendis praesentium molestiae, laudantium sed ducimus cum tenetur recusandae voluptas enim asperiores!
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est a placeat quidem eligendi quam provident numquam culpa sed recusandae. A provident asperiores reprehenderit vitae delectus nemo error rerum omnis ducimus.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem corrupti neque praesentium? Atque recusandae libero doloribus possimus voluptate itaque nesciunt, consectetur nam illum, repellendus quo provident voluptas maiores eos ut.
               <br></br>
               <br></br>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor adipisci voluptas, nostrum repellat ipsa, tempore ratione similique recusandae perspiciatis id illum mollitia blanditiis ipsam autem delectus esse maxime quam.
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet molestiae error provident dolor iure, reiciendis beatae unde doloribus deleniti sapiente praesentium numquam quam, architecto aspernatur, a eligendi nobis aliquam facere!
               </div>
                </div>
            </div>
            
            <h1 className={styles.edit}>Edit:</h1>
            <form className={styles.textEditor}>
            <Editor
       
        apiKey={API_KEY}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image', 
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help'
        }}
       
      />
      <div>
    
      <div className="form-group" style={{marginTop:"20px"}}>
    <label >Edit Author:</label>
    <input type="email" className="form-control" placeholder="Enter New Author.." />
  </div>
  <div className="form-group">
    <label >Image Src Url:</label>
    <input type="password" className="form-control" placeholder="Enter New Image Src Url..." />
  </div>
      </div>
      
      <button className={styles.button}>Save</button>
      <button className={styles.button2}>Cancel</button>
      </form>
      </div>
        
        
    );
};

export default BlogPageEdit;