import React from "react";
import "../styles/Home.css";
import me from "../imgs/me.png";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img src={me} alt="Me" />
        <h2>Júlia Pereira Godinho</h2>
        <div className="prompt">
          <p>
          I'm a student at Etec, attending high school integrated with thetechnical course of Systems Development. I try to acquire more experience and knowledge in the technological area and I am dedicated to solving problems in order to achieve imposed goals.
          </p>
          <a className="social-media" href="https://www.linkedin.com/in/j%C3%BAlia-pereira-godinho-936a95215/">
            Linkledin
          </a>
          <a className="social-media" href="https://github.com/juliaapg">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
