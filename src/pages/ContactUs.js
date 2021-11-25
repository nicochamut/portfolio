import React from "react";
import styled from "styled-components";
import { About } from "../style";
import { useScroll } from "../components/useScroll";
import FormEmail from "../components/FormEmail";
import { Hide } from "../style";
//Animation
import { motion } from "framer-motion";
import { scrollReveal, titleContact, fade } from "../animation";

const ContactUs = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Title>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleContact}>
              LET'S <br />
            </motion.h2>
         
            <motion.h2 variants={titleContact}>
              <span style={{ marginLeft: 10 + "rem", color: "white" }}>
                GET IN
              </span>
            </motion.h2>

            <motion.h2 variants={titleContact}>
              <span> TOUCH.</span>
            </motion.h2>
          </Hide>
        </motion.div>
      </Title>
      <Container>
        <FormEmail />
       
        <motion.div variants={fade}>
          <a
            href="https://www.instagram.com/nich_dev/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </motion.div>
      </Container>
    </Faq>
  );
};

const Faq = styled(About)`
  justify-content: space-between;
  padding: 0rem;
  @media screen and (max-width: 500px) {
    overflow-x: hidden;
    overflow-y: hidden;
    h2 {
      font-size: 2rem;
      flex-direction: column;
    }
    margin: 0rem;
    justify-content: center;
  }
`;

const Title = styled(motion.div)`
  border-right: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 50%;
  position: relative;
  span {
    display: block;
    font-weight: lighter;
  }

  h2 {
    font-weight: lighter;
    font-size: 11rem;
    line-height: 8rem;
    font-family: "Cormorant Garamond", serif;
    text-shadow: 3px 3px 10px black;
  }
  br {
    padding-left: 5px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 18rem;
    div {
      padding-top: 3rem;
    }
    br {
      padding-left: 0px;
    }
    h2 {
      padding-top: 1rem;
      font-size: 6rem;
      line-height: 5rem;
    }
    border: 0px;
    padding: 0rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 50%;
  position: relative;
  a {
    text-decoration: none;
    color: #9e9e9e;
    transform: rotate(90deg);
    font-size: 2rem;
    position: absolute;
    top: 47%;
    right: -40px;
    transition: ease 0.7s;
  }
  a:hover {
    color: #23d997;
  }
  @media screen and (max-width: 500px) {
    width: auto;
    height: 45rem;
    display: flex;
    flex-direction: column;
    div {
      a {
        position: initial;
        margin-bottom: 3rem;
        transform: rotate(0deg);
      }
    }
  }
`;


export default ContactUs;
