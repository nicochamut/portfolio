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
              <a href={work.link} target="_blank" rel="noreferrer">
                Visit de website.{" "}
              </a>
              /
              <a href={work.repository} target="_blank" rel="noreferrer">
                {" "}
                Look at my repository.
              </a>
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
  padding-top: 8vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    border-bottom: 1px solid #23d997;
    width: 55vh;
    text-align: center;
    padding-bottom: 5px;
    margin-bottom: 2rem;
  }
  img {
    width: 60%;
    height: 70vh;
    object-fit: cover;

    box-shadow: 4px 8px 20px black;
    border-radius: 1rem;
  }
  p {
    margin: 2.5rem 0rem 0.5rem;
    left: 34.5%;
  }
  a {
    font-size: 1.8rem;
    text-align: center;
    text-decoration: none;
    color: #23d997;
  }
  @media screen and (max-width: 500px) {
    padding-top: 1.8rem;
    min-height: 85vh;
    h2 {
      font-size: 3.5rem;

      width: 40vh;
      padding-bottom: 5px;
      border-bottom: 1px solid #23d997;
      text-align: center;
    }
    img {
      width: 95%;
      height: 50vh;
      object-fit: cover;
      margin: 0rem 1rem 0rem 1rem;
    }
    p {
      left: 13%;
      font-size: 1.3rem;
      margin: 0rem;
      a {
        font-size: 1.3rem;
      }
    }
  }
`;

const Works = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1500px) {
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const InfoStyle = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  border-top: 1px solid #292929;
  border-bottom: 1px solid #292929;
  h3 {
    margin: 0rem 1rem;
    font-size: 2rem;
    border-bottom: 2px solid #23d997;
    border-radius: 20px;
    text-align: center;
    width: 30rem;
    padding: 1rem;
  }
  h3:first-child {
    padding-top: 9rem;
  }

  p {
    padding: 2rem 0rem;
    text-align: center;
    width: 30rem;
    height: 10rem;
  }

  @media screen and (max-width: 500px) {
    width: 90%;
    padding-bottom: 0rem;
  }
  p {
    padding: 0.5rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  @media screen and (max-width: 500px) {
    img {
      height: 85vh;
    }
  }
`;

//Info Component
const Info = ({ title, description }) => {
  return (
    <InfoStyle>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </InfoStyle>
  );
};

export default WorkDetail;
