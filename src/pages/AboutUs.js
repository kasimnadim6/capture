import React from "react";
import AboutSection from "../components/AboutSection";
import SeriviceSection from "../components/SeriviceSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <AboutSection />
      <SeriviceSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
