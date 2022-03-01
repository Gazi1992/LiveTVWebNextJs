import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Features from "./Features";
import Button from "@material-ui/core/Button";
import { StylesProvider } from "@material-ui/core";

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
  const BlueSVG = () => (
    <svg width='100%' height='100%' opacity='1'>
      <defs>
        <linearGradient x1='35%' y1='0%' x2='50%' y2='100%' id='sssurf-grad'>
          <stop
            stop-color='hsl(214, 76%, 45%)'
            stop-opacity='1'
            offset='0%'
          ></stop>
          <stop
            stop-color='hsl(214, 90%, 59%)'
            stop-opacity='1'
            offset='7%'
          ></stop>
        </linearGradient>
      </defs>
      <g
        fill='url(#sssurf-grad)'
        transform='matrix(1,0,0,1,11.0113525390625,25.00124740600586)'
      >
        <path
          d='M-10,10C14.810606060606059,5.416666666666666,61.553030303030305,42.666666666666664,109.0909090909091,36C156.62878787878788,29.333333333333336,172.72727272727275,-22.416666666666668,218.1818181818182,-22C263.6363636363636,-21.583333333333332,281.8181818181818,35.291666666666664,327.27272727272725,38C372.7272727272727,40.708333333333336,390.9090909090909,-5.875,436.3636363636364,-9C481.81818181818187,-12.125,500.00000000000006,23.625,545.4545454545455,23C590.909090909091,22.375,609.090909090909,-16.583333333333332,654.5454545454545,-12C700,-7.416666666666667,718.1818181818181,42.5,763.6363636363636,45C809.0909090909091,47.5,827.2727272727273,-1.25,872.7272727272727,0C918.1818181818182,1.25,936.3636363636364,52.875,981.8181818181819,51C1027.2727272727273,49.125,1045.4545454545455,-9.833333333333334,1090.909090909091,-9C1136.3636363636365,-8.166666666666666,1154.5454545454545,50.833333333333336,1200,55C1245.4545454545455,59.166666666666664,1263.6363636363635,12.458333333333334,1309.090909090909,11C1354.5454545454545,9.541666666666666,1372.7272727272727,48.416666666666664,1418.1818181818182,48C1463.6363636363637,47.583333333333336,1481.8181818181818,9.625,1527.2727272727273,9C1572.7272727272727,8.375,1590.909090909091,42.5,1636.3636363636365,45C1681.818181818182,47.5,1700,16.833333333333332,1745.4545454545455,21C1790.909090909091,25.166666666666668,1809.090909090909,64.58333333333333,1854.5454545454545,65C1900,65.41666666666667,1918.1818181818182,25.916666666666668,1963.6363636363637,23C2009.0909090909092,20.083333333333332,2027.2727272727275,51.833333333333336,2072.727272727273,51C2118.1818181818185,50.166666666666664,2136.3636363636365,18.166666666666668,2181.818181818182,19C2227.2727272727275,19.833333333333332,2245.4545454545455,56.458333333333336,2290.909090909091,55C2336.3636363636365,53.541666666666664,2325.189393939394,-59.875,2400,12C2474.810606060606,83.875,3254.1666666666665,215,2650,400C2045.8333333333335,585,156.25,795.8333333333334,-500,900'
          transform='matrix(1,0,0,1,0,0)'
          opacity='NaN'
        ></path>
      </g>
    </svg>
  );

  return (
    <Container isBlack={isBlackstate} setcolor={setcolor}>
      <Introduction>
        <HeaderContainer>
          <h2>{offer}</h2>
        </HeaderContainer>

        <DiscountWrapper>
          <OldPrice>{oldPrice}</OldPrice>
          <SavingsContainer>
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
      </Introduction>

      <Wrap>
        <SVGContainer>
          <BlueSVG />
        </SVGContainer>
        <FeaturesContainer>
          <Features
            size={size}
            feature='Kanale Shqip'
            extra={nrikanaleve}
          ></Features>
          <Features
            size={size}
            feature='Kanale Total'
            extra={kanaleTotal}
          ></Features>
          <Features
            size={size}
            feature='LiveEvents'
            check={LiveEventscheck}
          ></Features>

          <Features size={size} feature='Kualitet HD' check={hd}></Features>
          <Features size={size} feature='Pajisje ' extra={pajisjet}></Features>
          <Features size={size} feature='VOD' extra={VOD}></Features>
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
        </FeaturesContainer>
      </Wrap>
    </Container>
  );
}

const pStyle = {
  fontSize: "50px",
  margin: 1,

  fontWeight: "700",
};

const sStyle = {
  fontSize: "1.6rem",
  marginTop: "10px",
  alignSelf: "flex-start",
};

const mStyle = { fontSize: "1.6rem", alignSelf: "flex-end" };
const SVGContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 0;
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
  position: relative;
  min-width: 200px;
  user-select: none;
  text-align: center;
  width: 260px;
  height: fit-content;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: white;
  /* background-color: #4a8bf8; */
  background: #4a8bf8;
  /* background: #1c3b68; */

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

  text-decoration-line: line-through;
`;
const SavingsContainer = styled.div`
  border: 1px solid rgba(246, 56, 56, 1);

  background: rgba(246, 56, 56, 1);
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
  color: white;
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
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  color: white;
  position: relative;
`;

const StyledButton = styled(Button)`
  && {
    margin-bottom: 20px;
    border-radius: 4px;

    width: 80%;
    height: 100%;
    color: white;
    font-weight: 550;
    font-size: 18px;
    color: white;

    background: rgb(246, 103, 135);
    background: white;
    background: linear-gradient(
      94deg,
      rgba(246, 103, 135, 1) 0%,
      rgba(246, 137, 111, 1) 100%
    );
  }
`;

const ButtonDiv = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  left: 0;
  top: 0;
  /* position: absolute;
  z-index: 2; */
`;

const FeaturesContainer = styled.div`
  width: 100%;
  left: 0;
  bottom: 0;
  position: absolute;
`;
export default PriceSelection;
