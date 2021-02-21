import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className='title'>
          <Hide>
            <h2 className=''>We work to make</h2>
          </Hide>
          <Hide>
            <h2 className=''>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2 className=''>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt='guy with camera' />
      </Image>
    </About>
  );
};

// Styled Component

export default AboutSection;
