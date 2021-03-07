import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
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
        </li>
        <li>
          <Link to='/work'>Our Work</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
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
export default Nav;
