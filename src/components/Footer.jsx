// Import React and icons for social media
import React from "react";
import Github from "../../assets/img/github.png";
import LinkedIn from "../../assets/img/linkedin.png";
import Post from "../../assets/img/post.png";

// Define styles object for the icons
const styles = {
  icons: {
    borderRadius: '25%', // Rounded corners for the icons
    filter: 'opacity(100%)', // Set opacity to 100%
    margin: '5px', // Add margins between icons
  },
};

function Footer() {
  // Return the footer component
  return (
    <footer className="text-center">
      <div className="container p-4">
        <section className="mb-4">

        <a href="https://www.linkedin.com/in/jim-mcgreevy-pmp-3a6240a/" target="blank">
          <img style={styles.icons} src={LinkedIn} alt="linkedin icon" />
          </a>
          <a href="https://github.com/mcgreevyjim66" target="blank">
            <img style={styles.icons} src={Github} alt="github icon" />
          </a>
          <a href="https://post.news/@/mcgreevyji18819" target="blank">
          <img style={styles.icons} src={Post} alt="post icon" />
          </a>

        </section>
      </div>
    </footer>
  );
}

export default Footer;
