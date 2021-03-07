import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

export const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <h1>constant us</h1>
    </motion.div>
  );
};

export default ContactUs;
