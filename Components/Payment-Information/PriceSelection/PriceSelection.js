import React from "react";
import styled from "styled-components";
import Features from "./Features";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core";
// import { Link } from "react-router-dom";

function PriceSelection({
  offer,
  price,
  size,
  isBlackstate,
  nrikanaleve,
  kanaleTotal,
  kanaletepreferuara,
  LiveEventscheck,
  setcolor,
  netflix,
  hd,
  pajisjet,
  VOD,
  oldPrice,
  months,
  Icon,
  style,
  buttonClicked,
}) {
  return (
    <Container isBlack={isBlackstate} size={size} setcolor={setcolor}>
      <RecommendedHeader size={size}>MOST POPULAR</RecommendedHeader>
      <Introduction>
        <HeaderContainer>
          <h2>{offer}</h2>
        </HeaderContainer>
        <ImageContainer>{Icon}</ImageContainer>
        <DiscountWrapper>
          <OldPrice>{oldPrice}</OldPrice>
          <SavingsContainer size={size}>
            Save {Math.trunc(((oldPrice - price) / oldPrice) * 100)}%
          </SavingsContainer>
        </DiscountWrapper>
        <LengthContainer>
          <span>{months}</span>
        </LengthContainer>
        <PriceContainer>
          <PriceContainerWrapper>
            <span style={sStyle}> €</span>
            <span style={pStyle}>{price}</span>
            <span style={mStyle}>/muaj</span>
          </PriceContainerWrapper>
        </PriceContainer>
        <ButtonDiv>
          <StylesProvider injectFirst>
            <StyledButton
              isBlack={isBlackstate}
              setcolor={setcolor}
              onClick={buttonClicked}
            >
              Porosit
            </StyledButton>
          </StylesProvider>
        </ButtonDiv>
      </Introduction>

      <Wrap>
        <FeaturesContainer>
          <Features feature='Kanale Shqip' extra={nrikanaleve}></Features>
          <Features feature='Kanale Total' extra={kanaleTotal}></Features>
          <Features feature='LiveEvents' check={LiveEventscheck}></Features>
          <Features feature='Netflix' check={netflix}></Features>
          <Features feature='Kualitet HD' check={hd}></Features>
          <Features feature='Pajisje ' extra={pajisjet}></Features>
          <Features feature='VOD' extra={VOD}></Features>
        </FeaturesContainer>
      </Wrap>
    </Container>
  );
}

const pStyle = {
  fontSize: "50px",
  margin: 1,
  color: "white",
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
  background: ${(p) =>
    p.size === "preferred" ? " rgba(246,56,56,1)" : "transparent"};
  overflow: hidden;
  border-radius: 0px;
  display: flex;
  font-weight: 700;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${(p) => (p.size === "preferred" ? "white" : "transparent")};
`;
const ImageContainer = styled.div`
  height: 100px;
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LengthContainer = styled.div`
  height: fit-content;
  width: 100%;
  background: transparent;
  margin-top: 5px;
  span {
    font-weight: 700;
    font-size: 24px;
  }
`;
const Container = styled.div`
  min-width: 200px;
  user-select: none;
  text-align: center;
  width: 260px;
  height: fit-content;
  border-radius: 0px;

  border-image: ${(p) =>
    p.setcolor === "first"
      ? "linear-gradient(90deg, rgba(56,246,116,1) 0%, rgba(41,158,233,1) 100%) 100"
      : p.setcolor === "second"
      ? " linear-gradient(90deg,rgba(41,158,233,1) 0%, rgba(23,181,78,1) 100%)100 "
      : p.setcolor === "third"
      ? " linear-gradient(90deg,rgba(23,181,78,1) 0%,  rgba(246,56,56,1) 100%)100"
      : p.setcolor === "fourth"
      ? "linear-gradient(90deg, rgba(246,56,56,1) 0%,rgba(56,82,246,1) 100%)100"
      : " linear-gradient(90deg, rgba(56,82,246,1) 0%, rgba(181,23,23,1) 100%) 100"};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: white;
  background: #1c3b68;

  &:hover {
    @media screen and (max-width: 600px) {
      transform: scale(1);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
    transform: scale(1.04);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  overflow: hidden;
  margin: 20px;

  box-shadow: 0 0 16px rgb(0, 0, 0, 10%);
  @media screen and (max-width: 600px) {
    width: 95%;
    max-width: 260px;
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
  color: white;
  text-decoration-line: line-through;
`;
const SavingsContainer = styled.div`
  border: ${(p) =>
    p.size === "preferred"
      ? "1px solidrgba(246,56,56,1)"
      : "1px solid #22c1c3"};
  background: ${(p) =>
    p.size === "preferred" ? "rgba(246,56,56,1)" : "#22c1c3"};
  border-radius: 20px;
  padding: 5px;
  color: white;
  font-size: 22px;
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
  height: 15%;
  width: 100%;

  h2 {
    border-color: black;
    margin: 0px;
  }
`;

const Introduction = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: fit-content;
  margin-bottom: 5px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 24px;

    margin: 0px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
`;

const StyledButton = styled(Button)`
  && {
    margin: 10px;
    border-radius: 30px;
    background: ${(p) =>
      p.setcolor === "first"
        ? "linear-gradient(0deg, rgba(56,246,116,1) 0%, rgba(41,158,233,1) 100%) "
        : p.setcolor === "second"
        ? " linear-gradient(0deg,rgba(41,158,233,1) 0%, rgba(23,181,78,1) 100%) "
        : p.setcolor === "third"
        ? " linear-gradient(0deg,rgba(23,181,78,1) 0%,  rgba(246,56,56,1) 100%)"
        : p.setcolor === "fourth"
        ? "linear-gradient(0deg, rgba(246,56,56,1) 0%,rgba(56,82,246,1) 100%)"
        : " linear-gradient(0deg, rgba(56,82,246,1) 0%, rgba(181,23,23,1) 100%)"};
    width: 80%;
    height: 70%;
    color: white;
    &:hover {
      background-color: ${(p) =>
        p.isBlack === "first"
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
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const FeaturesContainer = styled.div`
  width: 100%;
  height: auto;
`;
export default PriceSelection;
