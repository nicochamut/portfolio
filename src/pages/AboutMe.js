import React from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
import { MobileImg } from "../components/MobileImg";

const AboutMe = () => {
  console.log(MobileImg());
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <ScrollTop />
      <AboutSection />
      <ServicesSection />
    </motion.div>
  );
};

export default AboutMe;
