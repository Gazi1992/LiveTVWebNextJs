import React from "react";
import Banner from "./Components/Banner";
import styled from "styled-components";
import Viewers from "./Components/Viewers";
function VOD() {
  return (
    <Container>
      <Banner />
      <Viewers />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 10px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default VOD;
