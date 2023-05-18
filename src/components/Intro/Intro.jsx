import React, { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 50,

      strings: ["Designer", "Developer", "Content Creator"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imagecontainer">
          <img src="src\assets\my-img (2).png" alt="zahurul islam image" />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm </h2>
          <h1>Zahurul Islam</h1>
          <h3>
            Fullstack Web <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="src\assets\down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
