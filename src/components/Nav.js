import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import logonich from "../img/logonich.png";
const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          <img src={logonich} alt="logonich" />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/"> About </Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "72%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work"> MyWork</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "70%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "70%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #282828;
  position: sticky;
  top: 0;
  z-index: 10;

  a {
    color: white;
    text-decoration: none;
    font-size: 1.4rem;
  }
  a:hover {
    color: #23dd97;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.7rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
    img {
      width: 9rem;
      height: 4.5rem;
      object-fit: cover;
      padding: 0;
      margin: 0;
    }
  }
  li {
    padding-left: 6rem;
    position: relative;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 0.3rem 1rem;

    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 1rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -60%;
  left: 42%;
  @media screen and (max-width: 500px) {
    left: 18%;
    bottom: -50%;
  }
`;

export default Nav;
