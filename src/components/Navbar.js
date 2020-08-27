import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Logo from "./logo";
import links from "../constants/links";

function Navbar({ className }) {
  return (
    <nav className={className}>
      <div className="navContainer">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="links">
          {links.map((item, index) => {
            return (
              <span key={index}>
                <Link className="link" to={item.path}>
                  {item.text}
                </Link>
              </span>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default styled(Navbar)`
  .navContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    width: 100%;
    background: var(--secondaryColor);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.45);
    padding: 0 50px;
  }
  .logo {
    width: 210px;
  }
  .links {
    display: flex;
    width: 50%;
    justify-content: space-evenly;
  }
  .link {
    font-size: 18px;
    font-weight: 700;
    color: var(--textColorLight);
    letter-spacing: 1.7px;
    text-transform: uppercase;
    text-decoration: none;
    padding-left: 5px;
  }
`;
