import React from "react";
import "./Footer.css";
import StandLogo from "../assets/logoOnly.png";
// import { FaMapLocationDot } from "@react-icons/all-files/fa/FaMapLocationDot";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <hr />
      <div className="footer">
        <div className="footerLogo">
          <img src={StandLogo} alt="" />
          <span>support</span>
        </div>
        <div className="block1">
          <div className="details">
            <span>Contact Us</span>
            <span className="pngline">{/* <FaMapLocationDot /> */}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
