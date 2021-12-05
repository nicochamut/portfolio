import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
//style
import styled from 'styled-components'


const AboutMe = () => {
  return (
    <AboutMeStyled
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <AboutSection />
      <ServicesSection />
    </AboutMeStyled>
  );
};

const AboutMeStyled = styled(motion.div)`
@media screen and (max-width: 500px) {
  overflow-x: hidden;
}
`

export default AboutMe;
