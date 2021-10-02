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
} from "./icons";
// import Style
import { About, Description, Hide } from "../style";
import styled from "styled-components";
// Animation
import { scrollReveal, titleAnim } from "../animation";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <Description>
        <h2>
          <span>languages</span> I speak
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <Html5Icon />
              <h3>HTML5</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <Css3Icon />
              <h3>CSS3</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <SassIcon />
              <h3>Sass</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <JavascriptIcon />
              <h3>Javascript</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <LogoReactIcon />
              <h3>React JS</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <GitIcon />
              <h3>Git</h3>
            </div>
          </Card>
        </Cards>
      </Description>
      <Hide>
        <QuoteBox variants={titleAnim}>
          <h3>
            I want to excel in this field with hard work, perseverance and
            dedication. I think that the best
            <span> skill</span> is the
            <span> perseverance</span> to keep investigating and adapting to new
            tools.
          </h3>
        </QuoteBox>
      </Hide>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
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
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: space-around;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;

  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin: 2rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  @media (max-width: 1300px) {
    flex-basis: 10rem;
  }
`;

const QuoteBox = styled(motion.div)`
  overflow: hidden;
  color: #23d997;
  width: 36rem;
  font-size: 2.3rem;
  @media screen and (max-width: 500px) {
    h3 {
      font-size: 2rem;
      width: 30rem;
    }
  }
`;
export default ServicesSection