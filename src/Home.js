import { useEffect, useRef, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { DiMongodb } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

function App() {
  const ref = useRef(null);
  const [stick, setStick] = useState(false);
  const [Yaxis, setYaxis] = useState(0);
  const [nav, setNav] = useState(0);
  useEffect(() => {
    setNav(ref.current.offsetTop);
  }, []);

  useEffect(() => {
    if (Yaxis >= nav) {
      setStick(true);
    } else {
      setStick(false);
    }
  }, [Yaxis]);

  window.addEventListener("scroll", () => {
    setYaxis(window.pageYOffset);
  });

  return (
    <>
      {/* section 1 || main picture*/}
      <section className="section-1 center">
        <h1 className="section-1-heading">Web Developer</h1>
        <img
          src="images/josec.jpg"
          alt="Jose Carlos Guerrero"
          className="person-img"
        />
        <h3 className="person-name">Jose Carlos Guerrero</h3>
        <a href="#projects" className="section-1-btn">
          Projects
        </a>
      </section>
      <nav
        ref={ref}
        className={stick ? "navbar center sticky" : "navbar center"}
      >
        <a href="#" className="navbar-link">
          Home
        </a>
        <a href="#about" className="navbar-link">
          About
        </a>
        <a href="#" className="navbar-link">
          Portfolio
        </a>
        <a href="#contact-form" className="navbar-link">
          Contact
        </a>
      </nav>
      {/* section 2 or About */}
      <div id="about" className="section-2">
        <h1 className="section-2-heading">About Me</h1>
        <h2 className="tools-title">Tools I use:</h2>
        <div className="tools-section">
          <div className="tools">
            <div className="tools-icons">
              <i className="fa-brands fa-html5"></i>
              <h2 className="tools-heading">HTML5</h2>
            </div>
            <div className="tools-icons">
              <i className="fa-brands fa-css3"></i>
              <h2 className="tools-heading">CSS3</h2>
            </div>
            <div className="tools-icons">
              <i className="fa-brands fa-bootstrap"></i>
              <h2 className="tools-heading">Bootstrap</h2>
            </div>
            <div className="tools-icons">
              <div className="react-icons">
                <SiTailwindcss />
              </div>
              <h2 className="react-heading">Tailwind.CSS</h2>
            </div>

            <div className="tools-icons">
              <i className="fa-brands fa-js"></i>
              <h2 className="tools-heading">Javascript</h2>
            </div>
            <div className="tools-icons">
              <i className="fa-brands fa-react"></i>
              <h2 className="tools-heading">React.JS</h2>
            </div>
            <div className="tools-icons">
              <i className="fa-brands fa-node"></i>
              <h2 className="tools-heading">Node.JS</h2>
            </div>
            <div className="tools-icons">
              <div className="react-icons">
                <DiMongodb />
              </div>
              <h2 className="react-heading">Mongodb</h2>
            </div>
            <div className="tools-icons">
              <i className="fa-brands fa-git-alt"></i>
              <h2 className="tools-heading">Git</h2>
            </div>
          </div>
          <div></div>
          <div className="text-section">
            <h1>Who am I?</h1>
            <p>
              I'm an IT enthuastic who decided to take this jorney by
              self-teaching. It took me several months to learn from scratch to
              being able to develop intermediate Apps with backend included. I
              consider myself that I have the skills of being able to tackle any
              problem by myself and learning very fast and enthuastic of
              tackling big challenges, but I'm also capable of working in a
              team.
            </p>
          </div>
        </div>
      </div>
      {/* section 3 || projects section */}
      <Projects />
      <Footer />
    </>
  );
}

export default App;
