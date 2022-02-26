import styled from "styled-components";
import LiveTVHeader from "../LiveTV-Components/LiveTVHeader";

export default function PlayerHeader({ children }) {
  return (
    <Container>
      <LiveTVHeader />
      <Body>{children}</Body>
    </Container>
  );
}

const Container = styled.div`
  top: 0;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;
const Body = styled.div`
  position: relative;
  text-align: center;
  color: black;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #040714;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
