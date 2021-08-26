import React from "react";
import IndAbout from "../../Components/IndAbout/IndAbout";
const IndividualAbout = () => {
  let name: string | null = localStorage.getItem("name");
  let text: string | null = localStorage.getItem("text");
  let src: string | null = localStorage.getItem("src");

  return (
    <div className="mainContainer">
      <h1 className="title">Meet the Team</h1>
      <div id="slides" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <IndAbout name={name} text={text} src={src}></IndAbout>
        </div>
      </div>
    </div>
  );
};

export default IndividualAbout;
