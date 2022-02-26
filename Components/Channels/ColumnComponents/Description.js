import styled from "styled-components";
import React from "react";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { surname } from "react-lorem-ipsum";

function Description() {
  return (
    <Container>
      <h3>{surname()}</h3>
      <h4>2:10 - 1 orë</h4>
      <BsFillRecordCircleFill size='40' />
    </Container>
  );
}

const Container = styled.div`
  margin: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10vw;
  height: 200px;
  background-color: #181623;
  &:hover {
    background-color: #34323e;
  }
`;

export default Description;
