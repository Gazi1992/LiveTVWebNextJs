import React from "react";
import styled from "styled-components";
import Features from "../mainComponent/Features";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core";
import Link from "next/link";

function Package({
  offer,
  price,
  size,
  isBlackstate,
  nrikanaleve,
  kanaleTotal,
  kanaletepreferuara,
  LiveEventscheck,
  netflix,
  hd,
  pajisjet,
  VOD,
  oldPrice,
}) {
  return (
    <Container isBlack={isBlackstate} size={size}>
      <RecommendedHeader size={size}>REKOMANDOHET</RecommendedHeader>
      <Introduction>
        <HeaderContainer>
          <h2>{offer}</h2>
        </HeaderContainer>
        <DiscountWrapper>
          <OldPrice>{oldPrice}</OldPrice>
          <SavingsContainer size={size}>
            Kurse {Math.trunc(((oldPrice - price) / oldPrice) * 100)}%
          </SavingsContainer>
        </DiscountWrapper>
        <PriceContainer>
          <PriceContainerWrapper>
            <span style={sStyle}> €</span>
            <span style={pStyle}>{price}</span>
            <span style={mStyle}>/muaj</span>
          </PriceContainerWrapper>
        </PriceContainer>
      </Introduction>
      <ButtonDiv>
        <Link href='/Payment'>
          <StyledButton isBlack={isBlackstate}>ABONOHU</StyledButton>
        </Link>
      </ButtonDiv>
      <Wrap>
        <FeaturesContainer>
          <Features feature='Kanale Shqip' extra={nrikanaleve}></Features>
          <Features feature='Kanale Total' extra={kanaleTotal}></Features>
          <Features feature='Evente Live' check={LiveEventscheck}></Features>
          {/* <Features feature='Netflix' check={netflix}></Features> */}
          <Features feature='Kualitet HD' check={hd}></Features>
          <Features feature='Paisje ' extra={pajisjet}></Features>
          <Features feature='VOD' extra={VOD}></Features>
        </FeaturesContainer>
      </Wrap>
    </Container>
  );
}

const pStyle = {
  fontSize: "50px",
  margin: 1,
  color: "#2f1c6a",
  fontWeight: "700",
};

const sStyle = {
  fontSize: "1.6rem",
  marginTop: "10px",
  alignSelf: "flex-start",
};

const mStyle = { fontSize: "1.6rem", alignSelf: "flex-end" };

const RecommendedHeader = styled.div`
  width: 360px;
  height: 50px;
  background: ${(p) => (p.size === "medium" ? "red" : "white")};
  overflow: hidden;
  border-radius: 0px;
  display: flex;
  font-weight: 700;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Container = styled.div`
  min-width: 200px;
  text-align: center;
  width: ${(p) =>
    p.size === "medium" ? "360px" : p.size === "small" ? "360px" : "360px"};
  height: ${(p) =>
    p.size === "medium" ? "810px" : p.size === "small" ? "810px" : "810px"};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: #2f1c6a;
  background: white;

  &:hover {
    transform: scale(1.04);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  overflow: hidden;
  margin: 20px;

  box-shadow: 0 0 16px rgb(0, 0, 0, 10%);
  @media screen and (max-width: 600px) {
    width: 95%;
    max-width: 400px;
  }
`;

const DiscountWrapper = styled.div`
  height: 35%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const OldPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #abadae;
  text-decoration-line: line-through;
`;
const SavingsContainer = styled.div`
  border: ${(p) =>
    p.size === "medium" ? "1px solid #fc5185" : "1px solid #8c85ff"};
  background: ${(p) => (p.size === "medium" ? " #fc5185" : "#8c85ff")};
  border-radius: 20px;
  padding: 5px;
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PriceContainer = styled.div`
  height: 35%;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const PriceContainerWrapper = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: row;
`;
const HeaderContainer = styled.div`
  height: 30%;
  width: 100%;

  h2 {
    border-color: black;
    margin: 0px;
  }
`;

const Introduction = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 150px;
  background: transparent;
  margin-bottom: 5px;

  h2 {
    font-size: 24px;
    border-color: black;
    margin: 0px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: 660px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
`;

const StyledButton = styled(Button)`
  && {
    border-radius: 30px;
    background-color: ${(p) =>
      p.isBlack === "gray"
        ? "#673de6"
        : p.isBlack === "orange"
        ? "#fc5185"
        : "#673de6"};
    width: 80%;
    height: 70%;
    color: white;
    &:hover {
      background-color: ${(p) =>
        p.isBlack === "gray"
          ? "#491BD5"
          : p.isBlack === "orange"
          ? "#fb1f62"
          : "#491BD5"};
    }
  }
`;

const ButtonDiv = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const FeaturesContainer = styled.div`
  width: 100%;
  height: auto;
`;
export default Package;
