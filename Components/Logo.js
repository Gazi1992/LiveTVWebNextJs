import React from "react";
import styled from "styled-components";

function Logo({ logosrc, differentiator }) {
  return (
    <Container differentiator={differentiator}>
      <img src={logosrc} />
    </Container>
  );
}

const Container = styled.div`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  z-index: 2;
  background: ${(p) => (p.differentiator === "atv" ? "#d8001a" : "f4f4f4")};
  background-color: ${(p) =>
    p.differentiator === "atv" ? "#d8001a" : "f4f4f4"};

  @media screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
  @media screen and (min-width: 600px) and (max-width: 1900px) {
    width: 100px;
    height: 100px;
  }

  img {
    inset: 0px;

    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    max-height: 80%;
    max-width: 80%;

    display: block;
    margin: auto;
  }
`;
export default Logo;
