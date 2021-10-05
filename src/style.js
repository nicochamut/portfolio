import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  text-shadow: 7px 7px 15px black;

  @media (max-width: 1300px) {
    display: block;
    margin-top: 3rem;
    padding: 2rem 2rem;
    text-align: center;
  }
  @media (max-width: 500px) {
    min-height: 70vh;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
  @media (max-width: 500px) {
    margin-top: 1rem;
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  padding: 3rem;
  margin: -3rem;
  img {
    width: 95%;
    height: 76vh;

    object-fit: cover;
    z-index: 2;
    box-shadow: 15px 15px 30px #0d0d0d;
  }

  @media (max-width: 1200px) {
    img {
      height: 40vh;
      width: 100%;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
