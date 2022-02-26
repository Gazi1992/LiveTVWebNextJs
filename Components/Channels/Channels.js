import React from "react";
import AllChannels from "./AllChannels";
import styled from "styled-components";
import Row from "./Row";
import Column from "./Column";

function Channels() {
  return (
    <Container>
      <Row />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
`;

const Check = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export default Channels;
