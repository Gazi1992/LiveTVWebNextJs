import Image from "next/image";
import React from "react";
import styled from "styled-components";

function AboutUs() {
  return (
    <Container id='About'>
      <FadeBackground>
        <Header>Vizioni dhe Misioni</Header>
        <Paragraph>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            augue metus, porttitor tempor sapien eu, rutrum vestibulum risus.
            Nullam luctus, libero cursus hendrerit ultricies.
          </p>
        </Paragraph>
      </FadeBackground>
      <ImageContainer>
        <ImgDiv>
          <Image
            src='/images/Skenderbeu.png'
            width={400}
            height={600}
            objectFit='cover'
          />
        </ImgDiv>
        <ImgDivSmall>
          <Image
            objectFit='cover'
            layout='fill'
            src='/images/eagle-albania.jpg'
          />
        </ImgDivSmall>
      </ImageContainer>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 80%;
  height: 700px;
  background-color: #fff;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FadeBackground = styled.div`
  width: 30%;
  height: 100%;
  z-index: 2;
  text-align: left;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 1500px) {
    width: 100%;
  }
`;

const Header = styled.h1`
  margin-left: 20px;

  position: relative;
  font-size: 38px;
  line-height: 1.5;
  background: transparent;
  color: #273748;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Paragraph = styled.div`
  margin-left: 20px;
  border-left: 3px solid #dde4ec;
  position: relative;

  background: transparent;
  color: #273748;
  width: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  p {
    line-height: 1.7;
    margin-left: 20px;
    margin-top: 0px;
    font-size: 18px;
    font-weight: 700;
  }
`;
const ImageContainer = styled.div`
  width: 70%;

  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ImgDivSmall = styled.div`
  position: relative;
  border-radius: 14px;
  height: 400px;
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
  box-shadow: 0 0 16px rgb(0, 0, 0, 10%);

  overflow: hidden;
  @media screen and (max-width: 1500px) {
    display: none;
  }
`;
const ImgDiv = styled.div`
  border-radius: 14px;
  height: auto;
  width: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
  box-shadow: 0 0 16px rgb(0, 0, 0, 10%);

  overflow: hidden;
  @media screen and (max-width: 1500px) {
    display: none;
  }
`;

export default AboutUs;
