import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id='logo' to='/'>
          capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>About Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to='/work'>Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "45%" : "0%" }}
          />
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "47%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 100;
  #logo {
    color: white;
    font-family: "Stick", sans-serif;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    list-style: none;
  }
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    @media (max-width: 1300px) {
      padding: 2rem 0;
    }
    li {
      position: relative;
      &:not(:first-child) {
        padding-left: 6rem;
      }
    }
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Line = styled(motion.div)`
  height: 0.25rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
`;
export default Nav;
