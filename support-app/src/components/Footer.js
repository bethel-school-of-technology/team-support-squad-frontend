import React from "react";
import "./Footer.css";
import StandLogo from "../assets/logoTransparent.png";
import { TiSocialFacebook } from "react-icons/ti";

import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";
import { TiSocialVimeo } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <hr />

      <div className="footer">
        <div className="footerLogo">
          <img src={StandLogo} alt="" />
        </div>
        <div className="block1">
          <div className="details">
            <span>SHOP</span>
            <span className="png">
              <span>Brands</span>
            </span>
            <span className="png">
              <span>Shop Local</span>
            </span>
            <span className="png">
              <span>Shop Online</span>
            </span>
            <span className="png">
              <span>Search</span>
            </span>
          </div>
        </div>

        {/* next block */}
        <div className="block1">
          <div className="details">
            <span>POLICY</span>
            <span className="png">
              <span>Safety Guidelines</span>
            </span>
            <span className="png">
              <span>Support Policy</span>
            </span>
            <span className="png">
              <span>Terms of Service</span>
            </span>
            <span className="png">
              <span>Privacy</span>
            </span>
          </div>
        </div>

        {/* next block */}
        <div className="block1">
          <div className="details">
            <span>COMPANY</span>
            <span className="png">
              <span>About Us</span>
            </span>
            <span className="png">
              <span>Contact US</span>
            </span>
            <span className="png">
              <span>Location</span>
            </span>
            <span className="png">
              <span>Blog</span>
            </span>
            <span className="png">
              <span>FAQs</span>
            </span>
            <span className="png">
              <span>Investors</span>
            </span>
          </div>
        </div>
        {/* social media block */}
        {/* next block */}
        <div className="block1">
          <div className="details">
            <span className="png">
              <TiSocialFacebook className="icon" />
            </span>
            <span>
              <TiSocialYoutube className="icon" />
            </span>
            <span>
              <TiSocialInstagram className="icon" />
            </span>
            <span>
              <TiSocialGithub className="icon" />
            </span>
            <span>
              <TiSocialVimeo className="icon" />
            </span>
          </div>
        </div>
      </div>
      <div className="copyRight">
        <span>Copyright @2023 by Support, Inc.</span>
        <span>All rights reserved </span>
      </div>
    </div>
  );
};

export default Footer;
