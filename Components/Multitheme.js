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
      <ImgConatiner
        layout='fill'
        src={
          theme === "livesport"
            ? "/images/livesports-1.jpg"
            : theme === "breakingnews"
            ? "/images/o-breakingnews.jpg"
            : "/images/o-liveevent.jpg"
        }
      />
      <Gradient theme={theme} />

      <DescriptionContainer>
        <MultithemeMenu>
          <a onClick={() => acitivisation("livesport")}>
            <span>SPORTE LIVE</span>
          </a>

          <a onClick={() => acitivisation("breakingnews")}>
            <span>LAJME</span>
          </a>

          <a onClick={() => acitivisation("liveevents")}>
            <span>EVENTE LIVE</span>
          </a>
        </MultithemeMenu>
        <HeaderDescription>
          <h1>
            {theme === "livesport"
              ? "Sporte Live"
              : theme === "breakingnews"
              ? "Lajme"
              : "Evente Live"}
          </h1>
        </HeaderDescription>
        <SecondHeaderDescription active={active}>
          {theme === "livesport" ? (
            <>
              <h2>
                Të gjitha ndeshjet sportive në smartphone, TV apo Website. Ndiq
                top ligat e futbollit, basktebollit, apo ndeshjet e boksit the
                te UFC.
              </h2>
              <SecondImageContainer>
                <ImageWrapper>
                  <Image
                    src='/images/multitheme/sports/Serie_a_2021.png'
                    width={33}
                    height={38}
                  />
                </ImageWrapper>
                <ImageWrapper>
                  <Image
                    src='/images/multitheme/sports/icons8-the-premier-league-48.png'
                    width={48}
                    height={48}
                  />{" "}
                </ImageWrapper>
                <ImageWrapper>
                  <Image
                    src='/images/multitheme/sports/LaLiga_Santander.svg'
                    width={48}
                    height={48}
                  />
                </ImageWrapper>
                <ImageWrapper>
                  <Image
                    src='/images/multitheme/sports/Bundesliga.svg'
                    width={38}
                    height={48}
                  />
                </ImageWrapper>
                <ImageWrapper>
                  <Image
                    src='/images/multitheme/sports/NBA.svg'
                    width={38}
                    height={48}
                  />
                </ImageWrapper>
                <ImageWrapper>
                  <Image
                    src='/images/multitheme/sports/UFC.webp'
                    width={68}
                    height={58}
                  />
                </ImageWrapper>
              </SecondImageContainer>
            </>
          ) : theme === "breakingnews" ? (
            <>
              <h2>
                Informohu i pari për ngjarjet lokale dhe botërore. Debatet më të
                shikuara me analistët më të suksesshem të vendit
              </h2>
              <SecondImageContainer>
                <NewsImageWrapper>
                  <Image
                    src='/logo/topchannel.png'
                    width={40}
                    height={45}
                    objectFit='contain'
                  />
                </NewsImageWrapper>
                <NewsImageWrapper>
                  <Image
                    src='/logo/klanK.png'
                    width={38}
                    height={38}
                    objectFit='contain'
                  />
                </NewsImageWrapper>
                <NewsImageWrapper>
                  <Image
                    src='/logo/klan.png'
                    width={45}
                    height={45}
                    objectFit='contain'
                  />
                </NewsImageWrapper>
                <NewsImageWrapper>
                  <Image
                    src='/logo/t7.png'
                    width={40}
                    height={40}
                    objectFit='contain'
                  />
                </NewsImageWrapper>
                <NewsImageWrapper style={{ backgroundColor: "#d8001a" }}>
                  <Image
                    src='/logo/atv.jpg'
                    width={35}
                    height={35}
                    objectFit='contain'
                  />
                </NewsImageWrapper>
                <NewsImageWrapper>
                  <Image
                    src='/logo/rtv21.png'
                    width={35}
                    height={35}
                    objectFit='contain'
                  />
                </NewsImageWrapper>
                <NewsImageWrapper>
                  <Image
                    src='/logo/rtk.jpg'
                    width={45}
                    height={45}
                    objectFit='contain'
                  />
                </NewsImageWrapper>
                <NewsImageWrapper>
                  <Image
                    src='/logo/dukagjini.png'
                    width={45}
                    height={45}
                    objectFit='contain'
                  />
                </NewsImageWrapper>
                <NewsImageWrapper>
                  <Image
                    src='/logo/kanal10.jpg'
                    width={43}
                    height={45}
                    objectFit='contain'
                  />
                </NewsImageWrapper>
                <NewsImageWrapper>
                  <Image
                    src='/logo/Ktv.png'
                    width={43}
                    height={45}
                    objectFit='contain'
                  />
                </NewsImageWrapper>
              </SecondImageContainer>
            </>
          ) : (
            <h2>
              Eventet që nuk duhet humbur. Nga koncertet prej artistëve më të
              njohur deri te spektatlet e filmit dhe modës.
            </h2>
          )}
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
  height: fit-content;
  width: fit-content;
  display: grid;
  grid-gap: 10px;
  gap: 10px;
  grid-template-columns: repeat(10, minmax(50px, 1fr));
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
  height: 100%;
  margin: 5px;
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
    font-weight: 400;
    font-size: 20px;
    @media screen and (max-width: 700px) {
      font-size: 15px;
    }
  }
`;
export default Multitheme;
