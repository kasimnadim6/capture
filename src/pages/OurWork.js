import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { motion } from "framer-motion";
import {
  slider,
  sliderContainer,
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
} from "../animation";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: "#ffff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>The athlete</motion.h2>
        <motion.div className='line' variants={lineAnimation}></motion.div>
        <Link to='work/the-athlete'>
          <Hide>
            <motion.img variants={photoAnimation} src={athlete} alt='athlete' />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element1}
        variants={fade}
        initial='hidden'
        animate={controls1}
      >
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div className='line' variants={lineAnimation}></motion.div>
        <Link to='work/the-racer'>
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={theracer}
              alt='the racer'
            />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        initial='hidden'
        animate={controls2}
      >
        <motion.h2 variants={fade}>Good Times</motion.h2>
        <motion.div className='line' variants={lineAnimation}></motion.div>
        <Link to='work/good-times'>
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={goodtimes}
              alt='good times'
            />
          </Hide>
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  font-family: inherit;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.2rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  top: 10.8%;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8eb2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
