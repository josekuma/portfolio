import React from "react";
import "../App.css";
function Footer() {
  return (
    <>
      <section id="contact-form" className="section-4">
        <h1 className="section-heading section-4-heading">Contact Me</h1>
        <form
          action="https://formsubmit.co/1403f3577c7af94f8913098a1d831495"
          method="POST"
          className="contact-form center"
        >
          <input type="text" placeholder="Name" name="email" id="" />
          <input type="email" name="email" placeholder="Email" id="" />
          <textarea placeholder="Message" name="message"></textarea>
          <input type="submit" value="Submit" className="contact-form-btn" />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000"
          ></input>
        </form>
      </section>
      <footer className="section-5 center">
        <div className="social-media">
          <a href="https://github.com/josekuma" className="social-media-link">
            <i title="Github" className="fab fa-github-square"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jcgj/"
            className="social-media-link"
          >
            <i title="Linkedin" class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
