import React, { useState } from "react";
import "./contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="src\assets\shake.svg" alt="" />
      </div>

      <div className="right">
        <h2>Contact.</h2>
        <form action="mailto:zahurul8259@gmail.com" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>

          {message && <span>Thanks, I'll replay ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
