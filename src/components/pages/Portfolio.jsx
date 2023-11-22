import React from "react";
import WeatherDashboard from "../../../assets/img/weatherdashboard.png";
import NoteTaker from "../../../assets/img/NoteTaker02.png";
import SocialNetwork from "../../../assets/img/social_network.png";
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
  imageheight: {
    minHeight: "200px"
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
            <a style={styles.imageheight}
              href="https://mcgreevyjim66.github.io/Weather-Dashboard/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={WeatherDashboard}
                alt="screenshot of Weather Dashboard"
              />
              <header>
                <h3 style={styles.header}>Weather DashBoard</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/mcgreevyjim66/Weather-Dashboard"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
            This project uses third-party APIs to access current and 5 day weather forecast for cities
            that are either entered using a prompt, or selected from a history of searched cities.
            This application will build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

            The application will use the 5 Day Weather Forecast to retrieve weather data for cities.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a style={styles.imageheight}
              href=" https://still-badlands-52979-a65e8ac8ed04.herokuapp.com/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={NoteTaker}
                alt="screenshot of Weather Dashboard"
              />
              <header>
                <h3 style={styles.header}>Note Taker</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/mcgreevyjim66/Note-Taker"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
            This application is called Note Taker that can be used to write and save notes.
            This application will use an Express.js back end and will save and retrieve note data from a JSON file.
            </p>
          </section>


          <section className="card col-sm-3 p-0 m-2">
            <a style={styles.imageheight}
              href=" https://watch.screencastify.com/v/xe5d19bxNGVl3Jose33b"
              target="blank"
            >
              <img
                className="card-img-top"
                src={SocialNetwork}
                alt="screenshot of Social Network"
              />
              <header>
                <h3 style={styles.header}>Social Network API</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href=" https://github.com/mcgreevyjim66/Social-Network-API."
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
            This project will build an API for a social network web application where users can share their thoughts, 
            react to friends’ thoughts, and create a friend list.
            It will use Express.js for routing, a MongoDB database, and the Mongoose ODM.
             It will also use a JavaScript date library moment to format timestamps.
            </p>
          </section>
        </div>

        <div className="row justify-content-center">
          <section className="card col-sm-3 p-0 m-2">
            
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a style={styles.imageheight}
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
            <a style={styles.imageheight}
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
