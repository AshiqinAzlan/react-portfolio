import React from "react";
import "./Home.css";
function Home() {
  return (
    <div id="home" class="container">
      <div class="row pt-5">
        <div class="col-12 col-md-6 pt-5 d-flex justify-content-center justify-content-md-start">
          <img
            class="rounded-circle"
            src="niqi.png"
            alt="Ashiqin"
            id="niqi-img"
          />
        </div>
        <div class="col-md-6">
          <h1 class="display-1 lead">Hi,</h1>
          <h1 class="display-1 lead">
            I'm{" "}
            <span id="name" class="typing">
              Ashiqin
            </span>
          </h1>
          <h2 class="display-4 lead">Full Stack Developer</h2>
          <p>
            Passionate Full Stack Developer skilled in JavaScript, React,
            Vue.js, Python, and MongoDB. Dedicated to continuous learning,
            delivering impactful solutions, and collaborating to create
            innovative web applications.
          </p>
          <a class="btn mb-5" id="contact-btn" href="#contact" role="button">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
