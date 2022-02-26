import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function MobileLiveTV() {
  return (
    <Container>
      <HeaderIcon>
        <h2>SPLASH TV</h2>
      </HeaderIcon>
      <Header>
        <img src="/images/media_smart_TV_concept.jpg" />
      </Header>
      <Body>
        <h2>The best series, movies and more. All in one place.</h2>
        <h3>Watch Splash TV on your phone or tablet</h3>
        <ButtonContainer>
          <StyledButtonHome>Get the free app</StyledButtonHome>
        </ButtonContainer>
      </Body>
    </Container>
  );
}
const Container = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
    color: #00c1f3;
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
`;
const StyledButtonHome = styled(Button)`
  && {
    background-color: #00c1f3;
    width: 80%;
    height: 55px;
    color: black;
    cursor: pointer;
    &:hover {
      background-color: #00a1f3;
    }
  }
`;

export default MobileLiveTV;
