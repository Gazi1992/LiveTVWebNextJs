import React from "react";
import styled from "styled-components";

function Devices() {
  return (
    <Container>
      <Wrap>
        <h1>Einfach. Günstig. Multiscreen.</h1>
        <p>
          Fernsehen auf all Ihren Geräten Für jeden die beste Unterhaltung. Mit
          einem Account für die ganze Familie.
        </p>
      </Wrap>

      <img src="/images/devices.png" alt="devices"></img>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  text-align: center;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 60px;
  }
`;

export default Devices;
