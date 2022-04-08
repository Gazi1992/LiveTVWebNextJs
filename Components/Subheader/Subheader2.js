import React, { useState } from "react";
import styled from "styled-components";

import Image from "next/image";

function Subheader2() {
  return (
    <Container>
      <DeviceDivider>
        <ImageContainer>
          <Image width='150px' height='150px' src='/images/devices64.png' />
        </ImageContainer>
        <TextDivider>
          <TextDescription>
            <span></span>
          </TextDescription>
          <TextBody>
            <h1>5 Paisje </h1>
          </TextBody>
          <TextDescription>
            <span></span>
          </TextDescription>
        </TextDivider>
      </DeviceDivider>
      <DeviceDivider>
        <ImageContainer>
          <Image width='150px' height='150px' src='/images/world-map.svg' />
        </ImageContainer>
        <TextDivider>
          <TextDescription>
            <span></span>
          </TextDescription>
          <TextBody>
            <h1>Kudo në botë</h1>
          </TextBody>
          <TextDescription>
            <span></span>
          </TextDescription>
        </TextDivider>
      </DeviceDivider>
      <DeviceDivider>
        <ImageContainer>
          <Image width='150px' height='150px' src='/images/tvchannels.svg' />
        </ImageContainer>
        <TextDivider>
          <TextDescription>
            <span></span>
          </TextDescription>
          <TextBody>
            <h1>Të gjitha kanalet shqiptare</h1>
          </TextBody>
          <TextDescription>
            <span></span>
          </TextDescription>
        </TextDivider>
      </DeviceDivider>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 150px;
  color: white;
  resize: both;
  border-radius: 4px;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  bottom: 0px;
  left: 0px;
  z-index: 1;
`;

const DeviceDivider = styled.div`
  width: 20%;
  height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  background: #00000000;
  border-radius: 4px;
  padding: 10px;
  position: relative;
`;
const TextDivider = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;

  position: relative;
  p {
    font-size: 24px;
  }
`;
const LottieContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  bottom: 50%;
`;
const ImageContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;

  position: relative;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const TextThird = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
  background: transparent;
  align-items: center;
  position: absolute;
  z-index: 3;
  @media screen and (max-width: 1200px) {
    display: true;
  }
  h1 {
    box-shadow: 0 0 0 3px #6fa2b5, 0 0 0 2px #6fa2b5;
    border: 4px solid transparent;
    border-radius: 4px;
    display: inline-block;
    padding: 5px 2px;
    line-height: 28px;
    color: #6fa2b5;
    font-size: 24px;
    font-family: "Black Ops One", cursive;
    text-transform: uppercase;
    text-align: center;
    opacity: 1;
    width: 255px;
    background-color: black;
    transform: rotate(-15deg);

    @media screen and (min-width: 1201px) and (max-width: 1400px) {
      font-size: 10px;
      width: 80%;
    }
    @media screen and (max-width: 1200px) {
      transform: rotate(0deg);
      font-size: 10px;
      width: 80%;
      margin-bottom: 50px;
      background-color: black;
      padding: 0;
      line-height: 18px;
    }
  }
`;

const TextDescription = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  background: transparent;
  margin-left: 5px;
  position: relative;
  span {
    font-size: 18px;
  }
`;
const TextBody = styled.div`
  height: 50%;
  width: 100%;
  border-radius: 100px;
  display: flex;
  margin-left: 5px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  background: transparent;

  position: relative;
  span {
    font-size: 48px;
  }
  p {
  }
`;

const TextContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  z-index: 4;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid green;
`;

const Square = styled.div`
  display: grid;
  width: 90%;
  height: 90%;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-template-rows: 33.3% 33.3% 33.3%;
  border: 4px solid #6fa2b5;
  position: relative;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const MiniSquare = styled.div`
  max-height: 100%;
  max-width: 100%;
  background-color: transparent;
  border: 1px solid #6fa2b5;
  position: relative;
  font-family: "Black Ops One", cursive;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin: 0px;
    font-size: 20px;
    color: #6fa2b5;
  }
`;

export default Subheader2;
