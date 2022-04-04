import React, { useState } from "react";
import styled from "styled-components";

import Image from "next/image";

import Lottie from "lottie-react-web";
import World from "../channels/world.json";
import Devices from "../channels/devices.json";

function Subheader() {
  return (
    <Container>
      <DeviceDivider>
        <Image width='250px' height='250px' src='/images/tv.svg' />
        <Image width='150px' height='100px' src='/images/smartphone.svg' />
        <Image width='150px' height='150px' src='/images/laptop.svg' />
        <Text>
          <h1>5 Paisje njëkohësisht</h1>
        </Text>
      </DeviceDivider>
      <DeviceDivider>
        <TextContainer>
          <h1>Kudo në botë</h1>
        </TextContainer>
        <Lottie
          width='450px'
          height='250px'
          speed='1'
          options={{
            animationData: World,
            loop: true,
          }}
        />
      </DeviceDivider>
      <DeviceDivider>
        <TextThird>
          <h1>Mbi 250 kanale shqiptare dhe shume të huaja</h1>
        </TextThird>
        <Square>
          <MiniSquare>
            <h2>Top Channel</h2>
          </MiniSquare>
          <MiniSquare>
            <h2>T7</h2>
          </MiniSquare>
          <MiniSquare>
            <h2>Klan Kosova</h2>
          </MiniSquare>
          <MiniSquare>
            <h2>Klan TV</h2>
          </MiniSquare>
          <MiniSquare>
            <h2>ATV</h2>
          </MiniSquare>
          <MiniSquare>
            <h2>RTV21</h2>
          </MiniSquare>
          <MiniSquare>
            <h2>Kanal 10</h2>
          </MiniSquare>
          <MiniSquare>
            <h2>RTV21</h2>
          </MiniSquare>
          <MiniSquare>
            <h2>Alsat M</h2>
          </MiniSquare>
        </Square>
      </DeviceDivider>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 30vh;
  color: white;
  background-image: linear-gradient(180deg, #f1f1f100 0%, #000000 40%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 00px;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
  }
`;

const DeviceDivider = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: relative;
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
  }
`;

const Text = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
