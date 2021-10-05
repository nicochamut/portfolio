import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { WorkState } from "../WorkState";
// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const WorkDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [works] = useState(WorkState);
  const [work, SetWork] = useState(null);

  //useEffect
  useEffect(() => {
    const currentWork = works.filter((stateWork) => stateWork.url === url);
    SetWork(currentWork[0]);
  }, [works, url]);
  return (
    <>
      {work && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{work.title}</h2>
            <img src={work.mainImg} alt="work1"></img>
            <p>
              weblink:
              <a href={work.link}>{work.link}</a>
              <br />
              repository:
              <a href={work.repository}>{work.repository}</a>
            </p>
          </HeadLine>
          <Works>
            {work.descriptions.map((data) => (
              <Info
                title={data.title}
                description={data.description}
                key={data.title}
              />
            ))}
          </Works>
          <ImageDisplay>
            <img src={work.secondaryImg} alt="work"></img>
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;

const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  p {
    position: absolute;
    margin: 2.5rem 0rem 0.5rem;
    left: 30%;
  }
  a {
    font-size: 1.8rem;
    text-align: center;
    text-decoration: none;
    color: #23d997;
  }
  @media screen and (max-width: 500px) {
    h2 {
      font-size: 2rem;
      transform: translate(-50%, -30%);
    }
    img {
      width: 95%;
      height: 60vh;
      object-fit: cover;
      margin: 0rem 1rem 0rem 1rem;
    }
    p {
      left: 6%;
      font-size: 1.3rem;
      a {
        font-size: 1.3rem;
      }
    }
  }
`;

const Works = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const InfoStyle = styled.div`
  padding: 2rem 0rem 2rem 20%;
  h3 {
    font-size: 2rem;
  }
  h3:first-child {
    padding-top: 10rem;
  }
  .line {
    width: 30%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
    padding-bottom: 0rem;
  }
  p {
    padding: 0.5rem;
  }
  .line {
    width: 80%;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

//Info Component
const Info = ({ title, description }) => {
  return (
    <InfoStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </InfoStyle>
  );
};

export default WorkDetail;
