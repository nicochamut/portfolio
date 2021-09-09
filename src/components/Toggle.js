import React, { useState } from "react";
//Animation
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  const [toggle, SetToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => SetToggle(!toggle)}>
      <motion.h4 layout> {title} </motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
