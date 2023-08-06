import React from "react";
import logo from "../assets/logo.png";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function NavBar() {
  return (
    <div>
      {/* leftSide */}
      <nav className="nav">
        <CustomLink to="/">
          <img src={logo} alt="logo1" className="logo"></img>
        </CustomLink>

        {/* center */}
        <div>
          <form class="searchform cf">
            <input type="text" placeholder="Find more to support!" />
            <button type="submit">Search</button>
          </form>

          {/* rightSide */}
        </div>
        <ul>
          <CustomLink to="/about">About Us</CustomLink>
          |
          <CustomLink to="/help">Help</CustomLink>
          <br></br>
          <CustomLink to="/sign">
            <div className="user">
              <FaUserCircle className="userIcon" />
              <p>Sign in</p>
            </div>
          </CustomLink>
          <CustomLink to="/cart">
            <PiShoppingCartBold />
          </CustomLink>
        </ul>
      </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvePath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
