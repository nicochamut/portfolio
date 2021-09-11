import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Images

import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import player from "../img/player.jpg";
// Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  slider,
  sliderContainer,
  photoAnim,
  lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";


const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  return (
    <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>{`<MusicPlayer />`}</motion.h2>
        <motion.div variants={lineAnim} className="Line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img
              variants={photoAnim}
              src={player}
              alt="athlete"
            ></motion.img>
          </Hide>
        </Link>
      </Movie>
      <Movie variants={fade} animate={controls} initial="hidden" ref={element}>
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="Line"></motion.div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer"></img>
        </Link>
      </Movie>
      <Movie
        variants={fade}
        animate={controls2}
        initial="hidden"
        ref={element2}
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="Line"></motion.div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="goodtimes"></img>
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    color: #ffffff;
    font-size: 3rem;
  }
  @media (max-width: 1300px){
        padding: 2rem 2rem
      }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .Line {
    height: 0.3rem;
    background: #23dd97;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #dd2369;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #dd9723;
`;

const Frame3 = styled(Frame1)`
  background: #9723dd;
`;

const Frame4 = styled(Frame1)`
  background: #23dd97;
`;
export default OurWork;
