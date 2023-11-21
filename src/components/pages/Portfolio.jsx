import React from "react";
import TechBlog from "../../../assets/img/tech_blog.png";
import TextEditor from "../../../assets/img/text_editor.png";


import "../../../src/style/portfolio.css";

const styles = {
  h2: {
    textAlign: "center",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  header: {
    textAlign: "center",
    paddingBottom: "0.15rem",
  },
  repo: {
    textAlign: "center",
    color: "#0000FF",
    paddingBottom: "0.15rem",
  },
};

export default function Portfolio() {
  return (
    <div>
      <h2 style={styles.h2}>Portfolio</h2>
      <div className="container">
        <div className="row justify-content-center">
          <section className="card col-sm-3 p-0 m-2">

         
          </section>

          <section className="card col-sm-3 p-0 m-2">
      
          </section>

          <section className="card col-sm-3 p-0 m-2">

          </section>
        </div>

        <div className="row justify-content-center">
          <section className="card col-sm-3 p-0 m-2">
            
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://pacific-escarpment-55402-30144698a2f2.herokuapp.com/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={TechBlog}
                alt="screenshot of MVC Tech Blog website showing rows of comments on homepage"
              />
              <header>
                <h3 style={styles.header}>MVC Tech Blog</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/mcgreevyjim66/MVC-Tech-Blog"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
              This is an MVC tech blog created in the UW Coding Bootcamp. On the
              front-end, the app can be accessed at Heroku. On the back-end,
              this is a node command line application that utilizes sequilize,
              dotenv, mysql2, express, handlebars, and bcrypt.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://radiant-escarpment-20980-5908c73ab9af.herokuapp.com/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={TextEditor}
                alt="screenshot of installed text editor showing Hello World!"
              />
              <header>
                <h3 style={styles.header}>Text Editor</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/mcgreevyjim66/Text-Editor"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
            This project will build a text editor that runs in the browser.
             The app will be a single-page application that meets the PWA criteria.
             Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. 
             The application will also function offline.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
