import React, { useState } from "react";
import styled from "styled-components";
import { fadeInUp as fadeInFromLib } from "react-animations";
import { keyframes } from "styled-components";
import Image from "next/image";

function Multitheme() {
  const [theme, setTheme] = useState("livesport");
  const [active, setActive] = useState(false);

  const acitivisation = (value) => {
    setActive(true);
    setTheme(value);
    setTimeout(() => setActive(false), 200);
  };

  return (
    <Container>
      <Square>
        <ImgConatiner>
          <Image
            layout='fill'
            objectFit='cover'
            src='/images/sport/ronaldo.jpg'
          />
        </ImgConatiner>
        <ImgConatiner>
          <Image layout='fill' objectFit='cover' src='/images/sport/in.jpg' />
        </ImgConatiner>
        <ImgConatiner>
          <Image
            layout='fill'
            objectFit='cover'
            src='/images/sport/xhaka.jpg'
          />
        </ImgConatiner>
        <ImgConatiner>
          <Image layout='fill' objectFit='cover' src='/images/sport/rm.jpg' />
        </ImgConatiner>
      </Square>

      <DescriptionContainer>
        {/* <MultithemeMenu>
          <a onClick={() => acitivisation("livesport")}>
            <span>SPORTE LIVE</span>
          </a>

          <a onClick={() => acitivisation("breakingnews")}>
            <span>LAJME</span>
          </a>

          <a onClick={() => acitivisation("liveevents")}>
            <span>EVENTE LIVE</span>
          </a>
        </MultithemeMenu> */}
        <HeaderDescription>
          <h1>Sporte Live</h1>
        </HeaderDescription>
        <SecondHeaderDescription>
          <h2>
            Të gjitha ndeshjet sportive në smartphone, TV apo Website. Ndiq top
            ligat e futbollit, basktebollit, apo ndeshjet e boksit the te UFC.
          </h2>
          <SecondImageContainer>
            <ImageWrapper>
              <Image
                src='/images/multitheme/sports/Serie_a_2021.png'
                layout='fill'
                objectFit='contain'
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src='/images/multitheme/sports/icons8-the-premier-league-48.png'
                layout='fill'
                objectFit='contain'
              />{" "}
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src='/images/multitheme/sports/LaLiga_Santander.svg'
                layout='fill'
                objectFit='contain'
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src='/images/multitheme/sports/Bundesliga.svg'
                layout='fill'
                objectFit='contain'
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src='/images/multitheme/sports/NBA.svg'
                layout='fill'
                objectFit='contain'
              />
            </ImageWrapper>
            <ImageWrapper>
              <Image
                src='/images/multitheme/sports/UFC.jpg'
                layout='fill'
                objectFit='contain'
              />
            </ImageWrapper>
          </SecondImageContainer>
        </SecondHeaderDescription>
      </DescriptionContainer>
    </Container>
  );
}

const MultithemeMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100px;
  justify-content: flex-start;
  cursor: pointer;
  width: 100%;

  margin-right: auto;
  margin-left: 50px;
  z-index: 5;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    @media (max-width: 500px) {
      padding: 0 5px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      font-weight: 900;
      letter-spacing: 0px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      @media (max-width: 1000px) {
        font-size: 10px;
        font-weight: 900;
      }

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0px;
    width: 90%;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px;
    width: 90%;
  }
`;

const Square = styled.div`
  display: grid;
  width: 55%;
  height: 100%;
  grid-template-columns: 25% 25% 25% 25%;

  position: absolute;
  right: 0;
  @media screen and (max-width: 1950px) {
    width: 45%;
  }
  @media screen and (max-width: 1600px) {
    width: 35%;
  }
  @media screen and (max-width: 1300px) {
    width: 100%;
    opacity: 0.4;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(270deg, #000000cf 0%, #000000 83%);
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;

const ImgConatiner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
  top: 0;
  right: 0;
  background: red;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* @media (max-width: 1000px) {
    width: 100%;
    height: 100%;
    top: 0;
  } */
`;

// const ImgConatiner = styled(Image)`
//   width: 500px;
//   height: 500px;
//   position: absolute;
//   z-index: 1;
//   background: transparent;
//   opacity: 0.4;
//   @media (min-width: 1000px) {
//     width: 100%;
//     height: 100%;
//     top: 0;
//   }
// `;

const Gradient = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 2;
  background: linear-gradient(92deg, #000000 20%, #00000029 100%);

  // props.theme === "livesport"
  //   ? "  linear-gradient(180deg, transparent 10%, rgba(114,217,53,1) 100%);"
  //   : props.theme === "breakingnews"
  //   ? " linear-gradient(180deg, rgba(9,9,121,1) 10%, rgba(118,162,181,1) 100%)"
  //   : "linear-gradient(red 0%, blue 25%, rgba(166,13,195,1) 50%)"};
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 2;
  width: 90%;
  height: 60%;
  font-weight: bold;
  text-align: left;
  color: white;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0px;
    width: 90%;
  }
`;
const SecondImageContainer = styled.div`
  margin-top: 100px;
  height: fit-content;
  width: 80%;
  display: grid;
  grid-gap: 20px;
  gap: 20px;
  grid-template-columns: 16.6% 16.6% 16.6% 16.6% 16.6% 16.6%;
  @media screen and (max-width: 1400px) {
    grid-gap: 0px;
    gap: 0px;
    grid-template-columns: repeat(7, minmax(40px, 1fr));
  }
  @media screen and (max-width: 1000px) {
    grid-gap: 10px;
    gap: 10px;
    grid-template-columns: repeat(4, minmax(40px, 1fr));
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 70px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const NewsImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 25px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderDescription = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 50px;

  /* @media s  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }creen and (max-width: 1400px) {
    margin-left: 10px;
  } */
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0px;
    width: 90%;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 70px;
    margin: 0px;
    /* @media screen and (max-width: 1000px) {
      font-size: 25px;
      margin-left: 10px;
    } */
  }
`;

const fadeInFromLib1 = keyframes`${fadeInFromLib}`;
const SecondHeaderDescription = styled.div`
  width: 600px;
  height: 300px;

  margin-left: 50px;
  animation-duration: 0.3s;
  animation-name: ${(props) => (props.active ? fadeInFromLib1 : "")};
  animation-play-state: running;

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    margin-left: 0px;
    width: 90%;
  }
  h2 {
    margin: 0px;
    font-weight: 400;
    font-size: 30px;
    @media screen and (max-width: 700px) {
      font-size: 15px;
    }
  }
`;
export default Multitheme;
