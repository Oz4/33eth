import { useState } from "react";
import { Container } from "src/common/styledComponents";
import styled from "styled-components";

interface animateProps {
  animate: boolean;
}

const LandingWrapper = styled.div`
  height: 700px;
  width: 100%;
  background-color: black;
  color: wheat;
  border-radius: 0.2rem;
  position: relative;
  overflow: hidden;
`;

const ImageFront = styled.img<animateProps>`
  border-radius: inherit;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 103;
  transform: translate(-50%, -50%);

  animation: ${(props) => props.animate && "rotateFront 1.2s 0s infinite"};
  animation-timing-function: linear;

  @keyframes rotateFront {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) rotate(180deg) scale(1.5);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) scale(1);
    }
  }
`;

const ImageMiddle = styled.img<animateProps>`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 102;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  object-fit: fill;
  filter: brightness(0.95);

  animation: ${(props) => props.animate && "rotateMiddle 1.25s 0.1s infinite"};
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @keyframes rotateMiddle {
    0% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) rotate(180deg) scale(4);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg) scale(1);
    }
  }
`;

const ImageBack = styled.img<animateProps>`
  border-radius: inherit;
  position: absolute;
  left: 0;
  top: 0;

  z-index: 100;

  animation: ${(props) => props.animate && "rotateBack 1.3s 0.2s infinite"};
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @keyframes rotateBack {
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(8.5);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }
`;

const ClipperMiddle = styled.div<animateProps>`
  width: 1050px;
  height: 1050px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 101;
`;

const ClipperFront = styled.div<animateProps>`
  width: 600px;
  height: 600px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 104;
`;

export default function Landing(): JSX.Element {
  const [animateFront, setAnimateFront] = useState(false);
  const [animateMiddle, setAnimateMiddle] = useState(false);
  const [animateBack, setAnimateBack] = useState(false);

  const [url, setUrl] = useState("https://picsum.photos/1728/700");

  return (
    <Container>
      <LandingWrapper>
        <ClipperFront animate={animateFront}>
          <ImageFront
            src={url}
            alt=""
            animate={animateFront}
          />
        </ClipperFront>

        <ClipperMiddle animate={animateMiddle}>
          <ImageMiddle
            animate={animateMiddle}
            src={url}
            alt=""
          />
        </ClipperMiddle>

        <ImageBack
          animate={animateBack}
          src={url}
          alt=""
        />
      </LandingWrapper>

      <button
        style={{ marginTop: "50px" }}
        onClick={() => {
          setAnimateFront(!animateFront);
          setAnimateMiddle(!animateMiddle);
          setAnimateBack(!animateBack);
          setUrl(`https://picsum.photos/1727/700`);

          setTimeout(() => {
            setAnimateFront(false);
          }, 1200);

          setTimeout(() => {
            setAnimateMiddle(false);
          }, 1350);

          setTimeout(() => {
            setAnimateBack(false);
          }, 1500);
        }}
      >
        animate
      </button>
    </Container>
  );
}
