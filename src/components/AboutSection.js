import React from "react";
import me from "../img/me.jpg";

//styled
import styled from "styled-components";
import { About, Description, Hide, Image } from "../style";
// Framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
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
          Contact me for any idea you have and I will materialize it for you.
        </motion.p>
        <motion.button style={{ borderRadius: "5px" }} variants={fade}>
          Contact me
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={me} alt="me" />
      </Image>
      <Wave />
    </About>
  );
};




export default AboutSection 