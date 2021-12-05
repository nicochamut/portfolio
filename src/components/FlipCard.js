import styled from "styled-components";

const FlipCard = ({ front, back }) => {
  return (
    <MainContainer>
      <div className="thecard">
        <div className="thefront">{front}</div>
        <div className="theback">
          <h3>{back}</h3>
        </div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  .thecard {
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all 0.6s ease;

    .thefront {
      backface-visibility: hidden;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .theback {
      text-align: center;
      backface-visibility: hidden;
      text-align: center;
      color: #ffffff;
      transform: rotateY(180deg);
      margin-top: -3rem;
      h3 {
        font-family: "Cormorant Garamond", serif;
        font-size: 2rem;
      }
    }
  }
  .thecard:hover {
    transform: rotateY(180deg);
  }
`;

export default FlipCard;
