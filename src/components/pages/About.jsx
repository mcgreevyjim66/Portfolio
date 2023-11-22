
import React from 'react'; // Importing the React library from the 'react' package.

import JimAvatar from "../../../assets/img/jim_avatar.png"; // Importing an image file for use as an avatar.

// Defining a 'styles' object with nested style objects for various components.
const styles = {
  avatar: {
    display: 'block', // Ensures the avatar image is displayed as a block-level element.
    marginLeft: 'auto', // Centers the image horizontally by setting left margin to auto.
    marginRight: 'auto', // Centers the image horizontally by setting right margin to auto.
    maxHeight: '200px', // Sets the maximum height of the avatar image.
    maxWidth: '200px', // Sets the maximum width of the avatar image.
    borderRadius: '25%', // Rounds the corners of the avatar image.
    border: '3px solid #58C2C7', // Adds a solid border with a specific color and thickness.
    filter: 'opacity(100%)', // Sets the image opacity to fully opaque.
    cursor: 'default', // Sets the cursor style to default when hovering over the image.
  },
  h2: {
    textAlign: 'center', // Centers the text within the <h2> element.
  },
  space: {
    paddingLeft: '0.5rem', // Adds left padding to the container.
    paddingRight: '0.5rem', // Adds right padding to the container.
  },
};

// Defining and exporting a React functional component named 'About'.
export default function About() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>About Me</h2>
      <div>
      <img style={styles.avatar} src={JimAvatar} alt="Jim McGreevy" />
      </div>

      <p>
          Senior Program/Project Manager/Portfolio Management, PMP
 Project Management ● Professional Application Development ● Quality Assurance ● Testing

•	Influential technology leader, working comfortably with C-level management to shape strategic direction and long-term vision. 
•	Broad technical and strategic background, skilled at working with corporate leaders and staff to introduce technology and translate complex business requirements into robust cost-effective technology solutions. 
•	Demonstrated expertise in planning, selecting, acquiring, implementing and supporting corporate information systems while optimizing cost/benefit performance. 
•	PMI Certified Project Management Professional, as well as significant experience using the AGILE methodology.
• As a full-stack web developer, I am a driven and self-motivated individual with a passion for technology and a desire to make a positive impact through my work.
• I have a strong foundation in programming languages and a proven ability to learn and adapt quickly in a fast-paced environment. With a focus on delivering high-quality, reliable solutions.
• I am committed to constantly improving my skills and staying up-to-date with the latest technologies. Whether working independently or as part of a team.
• I am always striving to contribute to the success of the project and the company.
      </p>

    </div>
  );
}





