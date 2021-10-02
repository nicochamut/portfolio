import React from "react";
import me from "../img/me.jpg";

//styled
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
          Hi! I'm a passionate and autodidactic student with a serious interest in front end development. 
        </motion.p>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={me} alt="me" />
      </Image>
      <Wave />
    </About>
  );
};




export default AboutSection 