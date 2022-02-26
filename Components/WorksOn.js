import React from "react";
import styled from "styled-components";
import Image from "next/image";

function WorksOn({ icon, title }) {
  return (
    <Container>
      <ImgContainer>
        <Image src={icon} alt='React Logo' layout='fill' objectFit='contain' />
      </ImgContainer>
      <h2> {title}</h2>
    </Container>
  );
}

const Container = styled.div`
  background: transparent;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 20px;
    text-transform: uppercase;
    @media screen and (max-width: 1200px) {
      font-size: 15px;
    }
  }
`;
const ImgContainer = styled.div`
  width: 70px;
  height: 70px;

  overflow: hidden;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  background: transparent;

  @media screen and (max-width: 1200px) {
      font-size:width: 50px;
      height: 50px;
  }

  img {
    inset: 0px;
    opacity: 1;
    position: absolute;
    max-height: 100%;
    max-width: 100%;

    display: block;
    margin: auto;
  }
`;
export default WorksOn;
