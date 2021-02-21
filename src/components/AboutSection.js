import React from "react";
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2 className=''>We work to make</h2>
          </div>
          <div className='hide'>
            <h2 className=''>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className='hide'>
            <h2 className=''>true.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </div>
      <div className='image'>
        <img src={home1} alt='guy with camera' />
      </div>
    </div>
  );
};

export default AboutSection;
