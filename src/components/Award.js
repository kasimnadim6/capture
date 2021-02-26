import React from "react";
import styled from "styled-components";

const Award = ({ award }) => {
  return (
    <AwardStle>
      <h2>{award.title}</h2>
      <div className='line'></div>
      <p>{award.description}</p>
    </AwardStle>
  );
};

const AwardStle = styled.div`
  padding: 5rem;
  h2 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    height: 0.5rem;
    background: #23d997;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
export default Award;
