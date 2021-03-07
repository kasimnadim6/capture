import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "../components/Toggle";
import { AnimateSharedLayout } from "framer-motion";

import { useScroll } from "./useScroll";
import { scrollRevealAnimation } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();

  return (
    <FAQ
      ref={element}
      variants={scrollRevealAnimation}
      initial='hidden'
      animate={controls}
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How Do I Start?'>
          <div className='answer'>
            <p>Lorem Ipsum  dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              quisquam odio omnis voluptatum optio accusantium laboriosam maxime
              odit velit, autem corporis aliquid fugiat quae eligendi corrupti
              provident! Officiis, assumenda illum!
            </p>
          </div>
        </Toggle>
        <Toggle title='Daily Schedule'>
          <div className='answer'>
            <p>Lorem Ipsum  dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              quisquam odio omnis voluptatum optio accusantium laboriosam maxime
              odit velit, autem corporis aliquid fugiat quae eligendi corrupti
              provident! Officiis, assumenda illum!
            </p>
          </div>
        </Toggle>
        <Toggle title='Different payment methods'>
          <div className='answer'>
            <p>Lorem Ipsum  dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              quisquam odio omnis voluptatum optio accusantium laboriosam maxime
              odit velit, autem corporis aliquid fugiat quae eligendi corrupti
              provident! Officiis, assumenda illum!
            </p>
          </div>
        </Toggle>
        <Toggle title='What products do you offer?'>
          <div className='answer'>
            <p>Lorem Ipsum  dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              quisquam odio omnis voluptatum optio accusantium laboriosam maxime
              odit velit, autem corporis aliquid fugiat quae eligendi corrupti
              provident! Officiis, assumenda illum!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </FAQ>
  );
};

const FAQ = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    width: 100%;
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
  }
  .question {
    /* padding: 3rem 0rem; */
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
