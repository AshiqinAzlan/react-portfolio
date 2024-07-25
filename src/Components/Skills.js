import React from "react";

function Skills() {
  return (
    <div>
      <div className="container" id="skills">
        <div className="row mt-5">
          <div className="col-md-12 text-center mb-4">
            <h2 className="display-4 lead font-color">Professional Skills</h2>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                className="card-img-top"
                src="mongoDB.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text pb-4">
                  A flexible NoSQL database storing data in JSON-like documents,
                  ideal for modern web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-5">
              <img
                className="card-img-top"
                src="javascript.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text pb-4">
                  Versatile language for interactive web content, crucial for
                  front-end and Node.js server-side scripting.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                className="card-img-top"
                src="bootstrap.png"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Front-end framework simplifying responsive, mobile-first
                  website development with pre-built CSS and JS components.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <img
                className="card-img-top"
                src="nodejs.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text">
                  Runtime environment enabling scalable, server-side JavaScript
                  applications, often used with Express.js for web servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
