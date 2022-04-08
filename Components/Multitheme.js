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
        <HeaderDescription>
          <h1>Të gjitha sportet</h1>
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

const Square = styled.div`
  display: grid;
  width: 55%;
  height: 100%;
  grid-template-columns: 25% 25% 25% 25%;

  position: absolute;
  right: 0;

  @media screen and (max-width: 1200px) {
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
  user-select: none;
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
  background: black;
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
  width: 45%;
  height: 580%;
  font-weight: bold;
  text-align: left;
  color: white;
  position: absolute;
  left: 0;
  top: 200px;

  @media screen and (max-width: 1200px) {
    top: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0px;
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

const HeaderDescription = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 50px;

  @media screen and (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 0px;
    width: 100%;
    margin-bottom: 20px;
  }
  h1 {
    font-size: 60px;
    margin: 0px;
  }
`;

const SecondHeaderDescription = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

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
    margin-left: 50px;
    font-weight: 400;
    font-size: 30px;
    @media screen and (max-width: 1400px) {
      margin-left: 0px;
    }
    @media screen and (max-width: 700px) {
      font-size: 15px;
      margin-left: 0px;
    }
  }
`;
export default Multitheme;
