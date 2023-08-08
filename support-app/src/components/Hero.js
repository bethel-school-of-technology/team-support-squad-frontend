import React from "react";
import "./Hero.css";
import HeroImg from "../assets/hero.png";
import { CgShoppingBag } from "react-icons/cg";
// import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";

function Hero() {
  return (
    <div className="container">
      {/* leftSide */}
      <div className="sides">
        <span className="text1">Buy, Sell and Discover</span>
        <div className="text2">
          <span>Recent Supports</span>
          <span> Click now to find the item you've been looking for.</span>
        </div>
      </div>
      {/* middle */}
      <div className="wrapper">
        <div className="bg"></div>
        <img src={HeroImg} alt="" width={600} />
        <div className="cart2">
          <CgShoppingBag />
          <div className="signUp">
            <span>Signup Now</span>
          </div>
          <BiRightArrow />
        </div>
      </div>
      {/* rightSide */}
      <div className="sides">
        <div className="traffic">
          <span>3.1m</span>
          <span>Views Monthly</span>
        </div>
        <div className="customers">
          <span>500k</span>
          <span>On going Supporters</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
