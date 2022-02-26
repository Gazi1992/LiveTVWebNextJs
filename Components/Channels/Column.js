import React from "react";
import styled from "styled-components";
import test11 from "./test11.jpg";
import Description from "./ColumnComponents/Description";
import Link from "next/link";
import Image from "next/image";

function Column({ logo, clickHandler }) {
  return (
    <Container>
      <Link href='LiveTV' onClick={clickHandler}>
        <Wrapper>
          <Header>
            <img src={logo} alt='N/A' width='auto' />
          </Header>
          <LiveNow>
            <img src={test11} alt='text' width='auto' />
            <Description />
          </LiveNow>
          <Next>
            <Description />
          </Next>
          <InProximity>
            <Description />
            <Description />
            <Description />
          </InProximity>
          <Later>
            <img src={test11} alt='text' width='auto' />
            <Description />
            <Description />
            <Description />
          </Later>
        </Wrapper>
      </Link>
    </Container>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin: 1vw;
  margin-bottom: 350px;
  color: white;
  display: flex;

  width: 10vw;
  cursor: pointer;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Container = styled.div`
  position: relative;
  margin: 2vw;
  margin-bottom: 350px;
  color: white;
  display: flex;

  width: 10vw;
  cursor: pointer;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Header = styled.div`
  height: 100px;
  width: 10vw;
  position: sticky;
  top: 80px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 2;
  img {
    height: 60%;
    max-width: 250px;
  }
`;

const LiveNow = styled.div`
  position: relative;
  height: 350px;
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 10vw;
  }
  p {
  }
`;

const Next = styled.div`
  margin-top: 100px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  align-items: center;
`;
const InProximity = styled.div`
  margin-top: 200px;
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  align-items: center;
`;
const Later = styled.div`
  margin-top: 200px;
  height: 350px;
  width: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 10vw;
  }
`;
export default Column;
