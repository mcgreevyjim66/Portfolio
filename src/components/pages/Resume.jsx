// Import React and the resume PDF
import React from "react";
import ResumeMcGreevy from "../../../assets/McGreevy, James Resume.pdf";

// Define styles object for various elements
const styles = {
  // Styles for headings, links, and spacing
  
  h2: {
    textAlign: "center",
  },
  ul: {
    listStyleType: "none",
  },
  link: {
    color: "#0000FF",
  },
  space: {
    textAlign: "center",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  h3: {
    textAlign: "center",
    paddingTop: "0.75rem",
  },
};


// Define the Resume component

export default function Resume() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>Resume</h2>
      <p style={styles.h2}>
        <a style={styles.link} href={ResumeMcGreevy} download>
          Download Full Resume
        </a>
      </p>
         <h3>Technical Skills</h3>
        <h4>Front-End</h4>
      <>
       
        <ul style={styles.ul}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Responsive Design</li>
        </ul>
    
      <h4>Back-End</h4>
        <ul style={styles.ul}>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Express</li>
          <li>Node</li>
          <li>APIs</li>
          <li>GraphQL</li>
        </ul>
      </>

    </div>
  );
}
