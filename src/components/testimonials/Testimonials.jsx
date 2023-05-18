import React from "react";
import "./testimonial.scss";

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Junaid Ibrahim",
      icon: "srcassets\twitter.png",
      title: "Senior Developer",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, perspiciatis.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/logo-now-what-feat.png?auto=format&q=60&w=450&h=270&fit=crop&crop=faces",
    },
    {
      id: 2,
      name: "Jahangir Alam",
      icon: "srcassetsyoutube.png",
      title: "Co-Founder of DELL",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, perspiciatis.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2021/09/101347332.jpg?auto=format&q=60&w=450&h=270&fit=crop&crop=faces",
      featured: true,
    },
    {
      id: 3,
      name: "Golam Mostafa",
      icon: "srcassetswriting.png",
      title: "CEO of ALBI",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, perspiciatis.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/09/tips-and-tricks-to-help-your-creative-team-excel-2.jpg?auto=format&q=60&w=450&h=270&fit=crop&crop=faces",
    },
  ];
  return (
    <div className="testimonial" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <img src="src\assets\right-arrow.png" alt="" className="left" />
              <img src={d.img} alt="" className="user" />
              <img src={d.icon} alt="" className="right" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
