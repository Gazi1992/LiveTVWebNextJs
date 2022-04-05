import React, { useState } from "react";
import styled from "styled-components";

import Image from "next/image";

import Lottie from "react-lottie";
import World from "../channels/world.json";
import Devices from "../channels/devices.json";

function Subheader() {
  return (
    <Container>
      <DeviceDivider>
        <ImageContainer>
          <Image width='150px' height='150px' src='/images/tv.svg' />
          <Image width='150px' height='100px' src='/images/smartphone.svg' />
          <Image width='100px' height='100px' src='/images/laptop.svg' />
        </ImageContainer>
        <TextDivider>
          <Text>
            <span>5 </span>
          </Text>
          <p>Paisje njekohesisht</p>
        </TextDivider>
      </DeviceDivider>
      <DeviceDivider>
        <TextContainer>
          <h1>Kudo në botë</h1>
        </TextContainer>
        <Lottie
          width='550px'
          height='350px'
          speed='1'
          options={{
            animationData: World,
            loop: true,
          }}
        />
      </DeviceDivider>
      <DeviceDivider>
        <TextDivider>
          <Text>
            <span>250</span>
          </Text>
          <p>Kanale shqiptare</p>
        </TextDivider>
      </DeviceDivider>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 30vh;
  color: white;
  resize: both;
  background: transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  bottom: 0;

  @media screen and (max-width: 800px) {
    width: 100%;
    height: 10vh;
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

const DeviceDivider = styled.div`
  width: 33.33%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;

  position: relative;
`;
const TextDivider = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  margin-top: 100px;
  position: relative;
  p {
    font-size: 24px;
  }
`;

const ImageContainer = styled.div`
  width: 50%;
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

const Text = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 100px;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: #243a3e;
  background: #243a3e;
  border: 5px solid white;
  position: relative;
  span {
    font-size: 64px;
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
  justify-content: center;
  align-items: center;
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

export default Subheader;
