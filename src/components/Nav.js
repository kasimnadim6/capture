import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1 id='logo'>capture</h1>
      <ul>
        <li>
          <a href='#'>About Us</a>
        </li>
        <li>
          <a href='#'>Our Work</a>
        </li>
        <li>
          <a href='#'>Contact Us</a>
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
  #logo {
    color: white;
    font-family: "Stick", sans-serif;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      position: relative;
      &:not(:first-child) {
        padding-left: 6rem;
      }
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;
export default Nav;
