import React, { useState } from "react";
import "./work.scss";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: 1,
      icon: "srcassetsmobile.png",
      title: "Web Design",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, perspiciatis.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/logo-now-what-feat.png?auto=format&q=60&w=450&h=270&fit=crop&crop=faces",
    },
    {
      id: 2,
      icon: "srcassetsglobe.png",
      title: "Mobile Application",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, perspiciatis.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/09/101347332.jpg?auto=format&q=60&w=450&h=270&fit=crop&crop=faces",
    },
    {
      id: 3,
      icon: "srcassetswriting.png",
      title: "Branding",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, perspiciatis.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/09/tips-and-tricks-to-help-your-creative-team-excel-2.jpg?auto=format&q=60&w=450&h=270&fit=crop&crop=faces",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imageContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="src\assets\arrow.png"
        alt="Arrow"
        className="arrow left"
        onClick={() => handleClick("left")}
      />
      <img
        src="src\assets\arrow.png"
        alt="Arrow"
        className="arrow right"
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Works;
