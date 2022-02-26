import React from "react";
import styled from "styled-components";

function Test({ name }) {
  return <Container>{name}</Container>;
}

const Container = styled.div`
  margin: 20px;
  border-radius: 50%;
  padding: 30px 0px 26px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  width: 100px;
  height: 100px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  z-index: 2;
  background: red;
`;

export default Test;
