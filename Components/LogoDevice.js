import React from "react";
import styled from "styled-components";

function LogoDevice({ logosrc, name }) {
  return (
    <Container>
      <img src={logosrc} />
      <h2>{name}</h2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 350px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  z-index: 2;
  background: white;
  color: black;

  @media screen and (max-width: 600px) {
    width: 350px;
    height: 350px;
  }
  @media screen and (min-width: 600px) and (max-width: 1500px) {
    width: 350px;
    height: 350px;
  }

  img {
    inset: 0px;

    opacity: 1;
    position: relative;
    transition: opacity 500ms ease-in-out 0s;
    max-height: 80%;
    max-width: 80%;

    display: block;
  }
  h2 {
    @media screen and (max-width: 1500px) {
      display: none;
    }
  }
`;
export default LogoDevice;
