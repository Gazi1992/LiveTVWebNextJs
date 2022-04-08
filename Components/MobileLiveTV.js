import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { Stream } from "@styled-icons/material/Stream";
import Image from "next/image";

function MobileLiveTV() {
  return (
    <Container>
      <HeaderIcon>
        <StreamStyled />
        <h2>AIR TV</h2>
      </HeaderIcon>
      <Header>
        <img src='/images/media_smart_TV_concept.jpg' />
      </Header>
      <Body>
        <ButtonContainer>
          <StyledButtonHome>
            <Image
              src='/images/play-store.png'
              alt='google play'
              width={120}
              height={100}
              layout='fill'
            />
          </StyledButtonHome>
          <StyledButtonHome>
            <Image
              src='/images/app-store.png'
              alt='google play'
              width={120}
              height={100}
              layout='fill'
            />
          </StyledButtonHome>
        </ButtonContainer>
      </Body>
    </Container>
  );
}
const Container = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StreamStyled = styled(Stream)`
  height: 60%;
  margin-right: 10px;
  color: white;
`;

const HeaderIcon = styled.div`
  height: 8vh;
  width: 100vw;
  background: black;
  color: white;
  z-index: 3;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  h2 {
    color: white;
  }
`;

const Header = styled.div`
  position: relative;
  top: 0;
  left: 0;
  background-color: black;
  height: 70vh;
  width: 100vw;
  img {
    opacity: 0.7;
    height: 100%;
    width: 100%;
  }
`;
const Body = styled.div`
  background: linear-gradient(
    180deg,
    rgba(136, 136, 136, 0) 0%,
    rgba(0, 0, 0, 1) 12%,
    rgba(0, 0, 0, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 40vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0px auto 41px;
  padding: 0px 15px;
  text-align: center;
  z-index: 2;
  h2 {
    font-weight: 500;
    font-family: sans-serif;
    line-height: 1.2;
    color: rgb(255, 255, 255);
    font-size: 28px;
  }
  h3 {
    font-weight: 700;
    font-family: sans-serif;
    line-height: 1.2;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledButtonHome = styled(Button)`
  && {
    margin: 5px;
    border-radius: 15px;
    background-color: black;
    width: 320px;
    height: 94px;
    color: black;
    cursor: pointer;
  }
`;

export default MobileLiveTV;
