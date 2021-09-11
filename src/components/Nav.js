import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/" id="logo">
          NichDev
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/"> About </Link>
          <Line />
        </li>
        <li>
          <Link to="/work"> My Work</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
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
  }
  li {
    padding-left: 6rem;
    position: relative;
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 0.5rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
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
  bottom: -80%;
  left: 60%;
`;

export default Nav;
