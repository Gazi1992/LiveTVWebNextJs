import { Button } from "@material-ui/core";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

function ButtonFooter() {
  return (
    <Container>
      <Link href='/Favorites'>
        <StyledButton style={{ borderRadius: "5px" }}>Porosit</StyledButton>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  @media screen and (max-width: 1000px) {
    position: sticky;
    bottom: 0;
    width: 100%;
    z-index: 2;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background: linear-gradient(
      180deg,
      transparent 40%,
      rgba(61, 61, 61, 1) 100%
    );
  }
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
const StyledButton = styled(Button)`
  @media screen and (max-width: 1000px) {
    && {
      width: 100%;
      background-color: #040505;
      height: 100%;
      color: white;

      &:hover {
        background-color: #3c4149;
      }
    }
  }
`;
export default ButtonFooter;
