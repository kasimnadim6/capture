import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import Wave from "./Wave";
// Framer motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className='title'>
          <Hide>
            <motion.h2 variants={titleAnimation} className=''>
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} className=''>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation} className=''>
              true.
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt='guy with camera'
        />
      </Image>
      <Wave />
    </About>
  );
};

// Styled Component

export default AboutSection;
