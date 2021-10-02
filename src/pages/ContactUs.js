import React from "react";

// Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import logodev from "../img/logodev.png";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="tel:+542477397546">send me a message</a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="mailto:njchamut@gmail.com">send an email</a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <a href="ig">social media </a>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  img {
    position: absolute;
    width: 30rem;
    height: 30rem;
    object-fit: cover;
    right: 18%;
    top: 26%;
    border-radius: 50%;
  }
  @media (max-width: 1500px) {
    padding: 1rem;
    h2 {
      font-size: 3rem;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 2rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: linear-gradient(45deg, #680696, #27d997);
`;
const Social = styled(motion.div)`
  display: flex;

  align-items: center;
  a {
    margin: 2rem;
    text-decoration: none;
    font-size: 3rem;
    color: #353535;
    font-family: "Inter", sans-serif;
  }
`;

export default ContactUs;
