import React from "react"
import { useScroll } from "./useScroll";
//import icons
import {
  LogoReactIcon,
  Html5Icon,
  Css3Icon,
  JavascriptIcon,
  GitIcon,
  SassIcon,
  FigmaIcon,
} from "./icons";

// import Style
import { About, Description, Hide } from "../style";
import styled from "styled-components";
// Animation
import { scrollReveal, titleAnim } from "../animation";
import { motion } from "framer-motion";
import FlipCard from "./FlipCard";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <h2 className="title-language">
        <span>languages</span> I speak
      </h2>
      <DescriptionST>
        <Cards>
          <FlipCard front={<Html5Icon />} back="HTML5" />

          <FlipCard front={<Css3Icon />} back="CSS3" />

          <FlipCard front={<SassIcon />} back="Sass" />

          <FlipCard front={<JavascriptIcon />} back="Javascript" />

          <FlipCard front={<LogoReactIcon />} back="React JS" />

          <FlipCard front={<GitIcon />} back="Git" />

          <FlipCard front={<FigmaIcon />} back="Figma" />
        </Cards>
        <Hide>
          <QuoteBox variants={titleAnim}>
            <h3>
              I like to <span>code</span> things from <span>scratch</span>, and{" "}
              enjoy bringing <span>ideas</span> to life in the{" "}
              <span>browser.</span>
            </h3>
          </QuoteBox>
        </Hide>
      </DescriptionST>
    </Services>
  );
};

const DescriptionST = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  @media screen and (max-width: 500px) {
    margin-bottom: 5rem;
  }
`;

const Services = styled(About)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  h2 {
    padding-bottom: 4rem;
    font-family: "Cormorant Unicase", serif;
  }

  p {
    width: 70%;
    padding: 2rem 2rem 4rem 0rem;
  }
  @media (max-width: 1300px) {
    h2 {
      padding-bottom: 2rem;
    }
    p {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    .title-language {
      font-size: 2.8rem;
      margin-bottom: 2rem;
    }
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-around;
  grid-gap: 5rem;
  padding-bottom: 4rem;
  width: 36%;
  @media (max-width: 1300px) {
    justify-content: space-around;
  }
  @media (max-width: 600px) {
    width: 100%;
    grid-template-columns: auto auto;
    margin-bottom: 2rem;
    grid-gap: 2.5rem;
  }
`;

const Card = styled.div`
  width: 100%;

  @media (max-width: 1300px) {
    flex-basis: 10rem;
  }
`;

const QuoteBox = styled(motion.div)`
  overflow: hidden;
  color: #23d997;
  width: 40rem;
  font-size: 2.5rem;
  font-family: "Cormorant Garamond", serif;
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: center;
    h3 {
      font-size: 2rem;
    }
  }
`;
export default ServicesSection