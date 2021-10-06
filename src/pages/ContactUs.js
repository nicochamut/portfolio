import React from "react";
import styled from "styled-components";
import { About } from "../style";
import Toggle from "../components/Toggle";
import { useScroll } from "../components/useScroll";
//Animation
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../animation";

const ContactUs = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        <span>Keep in touch.</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Send an email">
          <div className="answer">
            <p>njchamut@gmail.com</p>
            <p>nichdeveloper@gmail.com</p>
            <input>hello</input>
          </div>
        </Toggle>
        <Toggle title="Send a message">
          <div className="answer">
            <p>+542477397546.</p>
          </div>
        </Toggle>
        <Toggle title="Social Media">
          <div className="answer">
            <p>Instagram: @nicolaschamut</p>
            <p>Tw: @njchamut</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }

  @media screen and (max-width: 500px) {
    h2 {
      font-size: 3rem;
    }
  }
`;

export default ContactUs;
