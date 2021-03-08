import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation, fade } from "../animation";

export const ContactUs = () => {
  return (
    <ContactStyled
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: "#ffff" }}
    >
      <Hide>
        <Title>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Title>
      </Hide>
      <Hide>
        <SocialMeadiaLink>
          <motion.a href='#' variants={titleAnimation}>
            <i className='fab fa-facebook'></i>
          </motion.a>
          <motion.a href='#' variants={titleAnimation}>
            <i className='fab fa-twitter'></i>
          </motion.a>
          <motion.a href='#' variants={titleAnimation}>
            <i className='fab fa-whatsapp'></i>
          </motion.a>
          <motion.a href='#' variants={titleAnimation}>
            <i className='fab fa-instagram'></i>
          </motion.a>
          <motion.a href='#' variants={titleAnimation}>
            <i className='fab fa-youtube'></i>
          </motion.a>
        </SocialMeadiaLink>
      </Hide>
    </ContactStyled>
  );
};

const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const SocialMeadiaLink = styled.div`
  display: flex;
  justify-content: center;
  a {
    width: 6rem;
    height: 6rem;
    margin: 0 1.5rem;
    background: #e3edf7;
    text-decoration: none;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    i {
      font-size: 2.5rem;
      color: #777;
    }
  }
  a:hover {
    box-shadow: inset 0.5rem 0.5rem 0.3rem rgba(0, 0, 0, 0.2),
      inset -0.5rem -0.5rem 0.5rem rgba(255, 255, 255, 0.5),
      -0.5px -0.5px 0px rgba(255, 255, 255, 1),
      0.5px 0.5px 0px rgb(0, 0, 0, 0.15),
      0px 12px 10px -10px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.01);
    transform: translateY(2px);
  }
  a:active {
    transform: translateY(6px);
  }
  a:hover i {
    transform: scale(0.9);
  }
  a:hover .fa-facebook {
    color: #3b5998;
  }
  a:hover .fa-twitter {
    color: #00acee;
  }
  a:hover .fa-whatsapp {
    color: #4fce5d;
  }
  a:hover .fa-instagram {
    color: #f14843;
  }
  a:hover .fa-youtube {
    color: #f00;
  }
`;
export default ContactUs;
