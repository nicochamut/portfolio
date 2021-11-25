import React from "react";
import me from "../img/me.jpg";

//styled
import { About, Description, Hide, Image } from "../style";
import styled from "styled-components";
// Framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Descrip>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>Nicolás J. Chamut</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Front-end </span>{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Developer.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Hi! I'm a passionate and autodidactic student with a serious interest
          in front end development.
        </motion.p>
      </Descrip>
      <ImageAbout>
        <motion.img variants={photoAnim} src={me} alt="me" />
      </ImageAbout>
      <Wave />
    </About>
  );
};

const Descrip = styled(Description)`
  @media screen and (max-width: 500px) {
    margin: 0px;
    padding: 0px;
    h2 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
`;

const ImageAbout = styled(Image)`
  div {
    background: grey;
    width: 100%;
  }
  @media screen and (max-width: 500px) {
    img {
      height: 30vh;
    }
  }
`;


export default AboutSection 