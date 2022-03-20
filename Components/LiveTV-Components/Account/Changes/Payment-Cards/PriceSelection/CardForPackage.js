import React, { useState } from "react";
import styled from "styled-components";
import Features from "./Features";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core";

import { AiFillCheckCircle } from "react-icons/ai";
import { StyledEngineProvider } from "@mui/material/styles";
import ConfirmDialog from "./ConfirmDialog";

function CardForPackage({
  offer,
  price,
  size,
  currentPlan,
  isBlackstate,
  nrikanaleve,
  kanaleTotal,
  kanaletepreferuara,
  LiveEventscheck,
  setcolor,
  setBackground,
  netflix,
  hd,
  pajisjet,
  VOD,
  oldPrice,
  months,
  Icon,
  style,
}) {
  const [invoke, setInvoke] = useState(false);
  const buttonClicked = () => {
    setInvoke(true);
  };
  return (
    <Container
      isBlack={isBlackstate}
      size={size}
      setcolor={setcolor}
      setBackground={setBackground}
      currentPlan={currentPlan}
    >
      <h1>Current Plan</h1>
      <CheckIcon currentPlan={currentPlan}>
        <AiFillCheckCircle color='red' backgroundColor='blue' size='medium' />
      </CheckIcon>
      <Wrapper currentPlan={currentPlan}>
        <Introduction>
          <HeaderContainer>
            <h4>{offer}</h4>
          </HeaderContainer>
          <LengthContainer>
            <span>{months}</span>
          </LengthContainer>
          <DiscountWrapper>
            <OldPrice>{oldPrice}</OldPrice>
            <SavingsContainer size={size}>
              Save {Math.trunc(((oldPrice - price) / oldPrice) * 100)}%
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
        <Wrap>
          <FeaturesContainer>
            <Features feature='Kanale Shqip' extra={nrikanaleve}></Features>
            <Features feature='Pajisje ' extra={pajisjet}></Features>
            <Features feature='Kanale Total' extra={kanaleTotal}></Features>
          </FeaturesContainer>
        </Wrap>
        <ButtonDiv>
          <StyledEngineProvider injectFirst>
            <ConfirmDialog invoke={invoke} setInvoke={setInvoke} />
          </StyledEngineProvider>
          <StylesProvider injectFirst>
            <StyledButton
              currentPlan={currentPlan}
              isBlack={isBlackstate}
              setcolor={setcolor}
              onClick={buttonClicked}
            >
              Abonohu
            </StyledButton>
          </StylesProvider>
        </ButtonDiv>
      </Wrapper>
    </Container>
  );
}

const pStyle = {
  fontSize: "36px",
  margin: 1,
  color: "#ffffff",

  fontWeight: "300",
};

const sStyle = {
  fontSize: "40px",
  alignSelf: "flex-start",
};

const mStyle = { fontSize: "1.4rem", alignSelf: "flex-end" };

const LengthContainer = styled.div`
  height: fit-content;
  width: 100%;
  background: transparent;
  margin-top: 5px;
  span {
    font-weight: 300;
    font-size: 24px;
  }
`;
const Container = styled.div`
  min-width: 200px;
  user-select: none;
  font-weight: 300;
  text-align: center;
  width: 260px;
  height: fit-content;
  border-radius: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 20px;
  align-items: center;
  color: white;
  background: ${(p) =>
    p.setBackground === "red"
      ? "#ee755b"
      : p.setBackground === "green"
      ? "#90d9aa"
      : p.setBackground === "blue"
      ? "#7bc7e1"
      : p.setBackground === "yellow"
      ? "#f5d96d"
      : "#c890ce"};

  font-family: Montserrat, Helvetica, Arial, sans-serif;

  &:hover {
    @media screen and (max-width: 600px) {
      transform: scale(1);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
    transform: ${(p) =>
      p.currentPlan === "true" ? " scale(1.01)" : "scale(1.04)"};
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
  border: ${(p) => (p.currentPlan === "true" ? "4px solid red" : "none")};
  margin: 20px;

  h1 {
    margin-bottom: 20px;
    display: ${(p) => (p.currentPlan === "true" ? "true" : "none")};
  }
  box-shadow: 0 0 16px rgb(0, 0, 0, 10%);
  @media screen and (max-width: 600px) {
    width: 95%;
    max-width: 260px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  opacity: ${(p) => (p.currentPlan === "true" ? "0.5" : "1")};
`;
const CheckIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: white;
  position: absolute;
  overflow: hidden;
  top: 0%; /* position the top  edge of the element at the middle of the parent */
  left: 50%; /* position the left edge of the element at the middle of the parent */
  transform: translate(-50%, -50%); /* This is a shorthand of*/
  z-index: 10;
  color: white;
  display: ${(p) => (p.currentPlan === "true" ? "true" : "none")};
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
  font-size: 15px;
  font-weight: 550;
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

  h4 {
    border-color: black;
    margin: 0px;
    font-weight: 300;
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
    background: white;
    width: 80%;
    height: 70%;
    color: #6b6a68;
    display: ${(p) => (p.currentPlan === "true" ? "none" : "true")};

    &:hover {
      background-color: #cccccc;
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
export default CardForPackage;
