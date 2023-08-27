import React from "react";
// import "../stylesheet/About.css";
// import jsIcon from "../assets/caliFlag.png";
// import skIcon from "../assets/indiaFlag.png";
// import rcIcon from "../assets/txFlag.png";

// import { FaTwitter } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";

const About = () => {
  console.log("About component rendered");
  return (
    <div>
      <h2>About Us</h2>
      <p>Welcome to Support App!</p>
      <p>
        Support App is your one-stop solution for finding the best offers and
        deals. Our mission is to help you save money and get the best value for
        your purchases.
      </p>
      <p>
        Whether you are looking for discounts on electronics, fashion, home
        appliances, or any other products, Support App has got you covered.
      </p>
      <p>Thank you for choosing Support App!</p>
    </div>
  );
};

export default About;
