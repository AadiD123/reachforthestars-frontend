import React from "react";
import styles from "./Blog.module.css"
const Blog = () => {
  
  return (
 <div className={styles.cont}>
  <h1 className= {styles.pageTitle}>Blog</h1>
  <div  className="row" style={{padding: "5px"}}>
  <div className="col-12 col-sm-8 col-md-6 col-lg-4" style={{marginTop:"20px"}}>
      <div className="card"style = {{padding: "20px"}}>
        <img className="card-img-top" style={{height: "275px"}} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ></img>
        <div className="card-body" style= {{padding: "0.5rem"}}>
          <h4 className="card-title" style={{fontSize:"30px"}}>Title</h4>
          <div className="card-subtitle mb-2 text-muted" style = {{ borderBottom: "1px solid gray", paddingBottom: "5px"}}><h6 className= {styles.subtext} style={{fontSize:"20px"}}>Author</h6> <h6 className= {styles.subtext} style={{marginLeft: "10px", fontSize:"15px"}}>date</h6></div>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem id voluptas sunt illo fugiat. Porro dolor ipsam laudantium dolorem voluptate expedita ipsum magnam. Harum delectus neque inventore modi dicta fuga. </p>
          <a href="" className="card-link">Read More</a>
        </div>
  </div>
</div>
<div className="col-12 col-sm-8 col-md-6 col-lg-4" style={{marginTop:"20px"}}>
      <div className="card"style = {{padding: "20px"}}>
        <img className="card-img-top" style={{height: "275px"}} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ></img>
        <div className="card-body" style= {{padding: "0.5rem"}}>
          <h4 className="card-title" style={{fontSize:"30px"}}>Title</h4>
          <div className="card-subtitle mb-2 text-muted" style = {{ borderBottom: "1px solid gray", paddingBottom: "5px"}}><h6 className= {styles.subtext} style={{fontSize:"20px"}}>Author</h6> <h6 className= {styles.subtext} style={{marginLeft: "10px", fontSize:"15px"}}>date</h6></div>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem id voluptas sunt illo fugiat. Porro dolor ipsam laudantium dolorem voluptate expedita ipsum magnam. Harum delectus neque inventore modi dicta fuga. </p>
          <a href="" className="card-link">Read More</a>
        </div>
  </div>
</div>
<div className="col-12 col-sm-8 col-md-6 col-lg-4" style={{marginTop:"20px"}}>
      <div className="card"style = {{padding: "20px"}}>
        <img className="card-img-top" style={{height: "275px"}} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ></img>
        <div className="card-body" style= {{padding: "0.5rem"}}>
          <h4 className="card-title" style={{fontSize:"30px"}}>Title</h4>
          <div className="card-subtitle mb-2 text-muted" style = {{ borderBottom: "1px solid gray", paddingBottom: "5px"}}><h6 className= {styles.subtext} style={{fontSize:"20px"}}>Author</h6> <h6 className= {styles.subtext} style={{marginLeft: "10px", fontSize:"15px"}}>date</h6></div>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem id voluptas sunt illo fugiat. Porro dolor ipsam laudantium dolorem voluptate expedita ipsum magnam. Harum delectus neque inventore modi dicta fuga. </p>
          <a href="" className="card-link">Read More</a>
        </div>
  </div>
</div>
<div className="col-12 col-sm-8 col-md-6 col-lg-4" style={{marginTop:"20px"}}>
      <div className="card"style = {{padding: "20px"}}>
        <img className="card-img-top" style={{height: "275px"}} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" ></img>
        <div className="card-body" style= {{padding: "0.5rem"}}>
          <h4 className="card-title" style={{fontSize:"30px"}}>Title</h4>
          <div className="card-subtitle mb-2 text-muted" style = {{ borderBottom: "1px solid gray", paddingBottom: "5px"}}><h6 className= {styles.subtext} style={{fontSize:"20px"}}>Author</h6> <h6 className= {styles.subtext} style={{marginLeft: "10px", fontSize:"15px"}}>date</h6></div>
          <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem id voluptas sunt illo fugiat. Porro dolor ipsam laudantium dolorem voluptate expedita ipsum magnam. Harum delectus neque inventore modi dicta fuga. </p>
          <a href="" className="card-link">Read More</a>
        </div>
  </div>
</div>
</div>
</div> 
    
    );
};

export default Blog;
