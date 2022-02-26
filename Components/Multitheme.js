import React, { useState } from "react";
import styled from "styled-components";
import { fadeInUp as fadeInFromLib } from "react-animations";
import { keyframes } from "styled-components";
import Image from "next/image";
function Multitheme() {
  const [theme, setTheme] = useState("liveevents");
  const [active, setActive] = useState(false);

  const acitivisation = (value) => {
    setActive(true);
    setTheme(value);
    setTimeout(() => setActive(false), 200);
  };

  return (
    <Container>
      <ImgConatiner
        layout='fill'
        src={
          theme === "livesport"
            ? "/images/livesports-1.jpg"
            : theme === "breakingnews"
            ? "/images/breakingnews.jpg"
            : "/images/liveevent.jpg"
        }
      />
      <Gradient theme={theme} />

      <DescriptionContainer>
        <MultithemeMenu>
          <a onClick={() => acitivisation("livesport")}>
            <span>LIVE SPORTS</span>
          </a>

          <a onClick={() => acitivisation("breakingnews")}>
            <span>BREAKING NEWS</span>
          </a>

          <a onClick={() => acitivisation("liveevents")}>
            <span>LIVE EVENTS</span>
          </a>
        </MultithemeMenu>
        <HeaderDescription>
          <h1>
            {theme === "livesport"
              ? "Live Sports"
              : theme === "breakingnews"
              ? "Breaking News"
              : "Live Events"}
          </h1>
        </HeaderDescription>
        <SecondHeaderDescription active={active}>
          <h2>
            {theme === "livesport"
              ? "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more."
              : theme === "breakingnews"
              ? "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks."
              : "Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more."}
          </h2>
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

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;

const ImgConatiner = styled(Image)`
  width: auto;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: transparent;
  opacity: 0.4;
  @media (min-width: 1000px) {
    width: 100%;
    height: 100%;
    top: 0;
  }
`;

const Gradient = styled.div`
  position: absolute;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: ${(props) =>
    props.theme === "livesport"
      ? "  linear-gradient(180deg, transparent 10%, rgba(114,217,53,1) 100%);"
      : props.theme === "breakingnews"
      ? " linear-gradient(180deg, rgba(9,9,121,1) 10%, rgba(118,162,181,1) 100%)"
      : "linear-gradient(red 0%, blue 25%, rgba(166,13,195,1) 50%)"};
  /* background: linear-gradient(rgba(250, 0, 0, 0.5), transparent); */
  // background-color: orange; /*this your primary color*/
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
    font-size: 50px;
    /* @media screen and (max-width: 1000px) {
      font-size: 25px;
      margin-left: 10px;
    } */
  }
`;

const fadeInFromLib1 = keyframes`${fadeInFromLib}`;
const SecondHeaderDescription = styled.div`
  width: 500px;
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
    @media screen and (max-width: 700px) {
      font-size: 15px;
    }
  }
`;
export default Multitheme;
