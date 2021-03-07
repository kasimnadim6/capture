import React from "react";
import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

import { useScroll } from "./useScroll";
import { scrollRevealAnimation } from "../animation";

const SeriviceSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      ref={element}
      variants={scrollRevealAnimation}
      initial='hidden'
      animate={controls}
    >
      <Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src={clock} alt='icon' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={teamwork} alt='icon' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={diaphragm} alt='icon' />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={money} alt='icon' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt='camera' />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  font-size: 1rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      padding: 0.5rem;
      border-radius: 2px;
      border: 1px solid white;
      cursor: pointer;
      font-weight: 300;
      min-width: 7rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s ease;
      &:hover {
        background: white;
        color: black;
      }
    }
  }
`;
export default SeriviceSection;
