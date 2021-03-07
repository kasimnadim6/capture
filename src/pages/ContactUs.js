import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";

export const ContactUs = () => {
  return (
    <ContactStyled
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: "#ffff" }}
    >
      <Title>
        <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
      </Title>
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
export default ContactUs;
