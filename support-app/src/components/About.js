import React from "react";
import "../stylesheet/About.css";


function About () {
  return (
      <>
    <div className="about-section">
  <h1>About Us</h1>
  <p>Welcome to Support App!</p>
  <p>Support App is your hub for discovering the finest deals.</p>
  <p>For electronics and fashion to home appliances, Support App is your partner for buying and selling products seamlessly.</p>
</div>

<h2 style={{textAlign: "center" }}>Meet Our Team</h2>

<div className="row">
  <div className="column">
    <div className="card">
      <img src="" alt="" style={{ width: "100%" }}/>
      <div className="container">
        <h2>Ryan Capacia</h2>
        <p class="title">Full Stack Developer</p>
        <p>Some text that describes me.</p>
        <p><a href="mailto:rcapacia1@gmail.com" className="button">Contact</a></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="" alt="" style={{ width: "100%" }}/>
      <div className="container">
        <h2>Jonathan Solano</h2>
        <p className="title">Full Stack Developer</p>
        <p>Some text that describes me.</p>
        <p><a href="mailto:jsolano5673@gmail.com" className="button">Contact</a></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src="" alt="" style={{ width:"100%" }}/>
      <div className="container">
        <h2>Sonal Kheware</h2>
        <p className="title">Full Stack Developer</p>
        <p>Some text that describes me.</p>
        <p><a href="mailto:sonalkhevare1997@gmail.com" className="button">Contact</a></p>
      </div>
    </div>
  </div>
  </div>
  <div>
  </div>
    </>
  );
}
export default About;












