import React from "react";
import home1 from "../img/home1.png"
//styled
import styled from "styled-components";
import { About, Description, Hide, Image } from "../style";
// Framer motion
import { motion } from "framer-motion";


const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span>{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>come true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography ideas that you have. We have
          professionals with amazing skills
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with camera" />
      </Image>
    </About>
  );
};




export default AboutSection 