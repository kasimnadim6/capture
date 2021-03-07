import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
import Award from "../components/Award";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const url = useHistory().location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currntMovie = movies.find((movieState) => {
      return movieState.url === url;
    });
    currntMovie ? setMovie(currntMovie) : setMovie(null);
  }, [movies, url]);

  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      {movie && (
        <Details>
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt='movie' />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award award={award} key={award.title} />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt='secendary movie' />
          </ImageDisplay>
        </Details>
      )}
    </motion.div>
  );
};
const Details = styled.div`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: center;
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;
export default MovieDetail;
