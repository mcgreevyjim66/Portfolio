import React from 'react';
//import JimMcGreevy from "../assets/.jpg";

const styles = {
  mcgreevy: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    maxHeight: '200px',
    maxWidth: '200px',
    borderRadius: '25%',
    border: '3px solid #58C2C7',
    filter: 'opacity(100%)',
    cursor: 'default',
  },
  h2: {
    textAlign: 'center',
  },
  space: {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },
};

export default function About() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>About Me</h2>
      <p>
        image place holder for jim
      </p>

      <p>
        As a full-stack web developer, I am a driven and self-motivated individual with a passion for technology and a desire to make a positive impact through my work. I have a strong foundation in programming languages and a proven ability to learn and adapt quickly in a fast-paced environment. With a focus on delivering high-quality, reliable solutions, I am committed to constantly improving my skills and staying up-to-date with the latest technologies. Whether working independently or as part of a team, I am always striving to contribute to the success of the project and the company.
      </p>

    </div>
  );
}


