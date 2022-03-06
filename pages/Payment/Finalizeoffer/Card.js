import React from "react";
import Cards from "react-credit-cards";
import { useState } from "react";

import styled from "styled-components";
import "react-credit-cards/es/styles-compiled.css";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import { BsCreditCard2Front } from "react-icons/bs";
import { Input, TextField } from "@material-ui/core";
import CC from "./PaymentProcessor/CC";
import PP from "./PaymentProcessor/PP";

const Card = () => {
  const [payment, setPayment] = useState("CC");

  return (
    <Container>
      <PaymentForm>
        <Header>
          <h1>Header</h1>
        </Header>
        <Row>
          <h4>Payment Info: </h4>
          <ButtonContainer>
            <CreditCardStyled>
              <BsCreditCard2Front
                color='white'
                style={{ marginRight: "5px" }}
              />
              <p>Credit Card</p>
            </CreditCardStyled>
            <PP />
          </ButtonContainer>
        </Row>
        <Body>
          <CC />
        </Body>
        <StyledButton>Confirm</StyledButton>
      </PaymentForm>
    </Container>
  );
};

const Container = styled.div`
  width: 75%;
  border-radius: 10px;
  display: flex;
  height: fit-content;
  justify-content: space-around;
  flex-direction: column;
  background-image: linear-gradient(
    to right top,
    #1b1f2b,
    #252c3f,
    #2e3a54,
    #37496a,
    #405881
  );

  @media screen and (max-width: 1400px) {
    width: 350px;
  }
`;
const Header = styled.div`
  height: fit-content;
  width: 80%;
  border-bottom: 1px solid #4c5d79;
  h1 {
    color: white;
    margin: 0px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;
const Body = styled.div`
  height: 520px;
  width: 100%;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;
const Row = styled.div`
  height: fit-content;
  width: 80%;
  border-bottom: 1px solid #4c5d79;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1850px) {
    width: 90%;
  }
  h4 {
    color: #ffffff;
    margin: 10px 0px 10px 0px;
  }
`;
const ButtonContainer = styled.div`
  height: fit-content;
  width: 100%;

  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const PaymentForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

const CreditCardStyled = styled(Button)`
  && {
    background-color: #3560a6;
    width: 150px;
    height: 40px;
    font-weight: 40px;
    font-size: 20px;
    margin: 5px;
    border: 1px solid #3560a6;
    bottom: 0;
    p {
      color: white;
      font-size: 14px;
      font-weight: 600;
      @media screen and (max-width: 1850px) {
        font-size: 12px;
      }
    }
    &:hover {
      background-color: #475872;
    }
  }
`;

const StyledButton = styled(Button)`
  && {
    background-color: #3e89eb;
    width: 250px;
    height: 40px;
    font-weight: 40px;
    font-size: 20px;
    color: white;
    bottom: 0;

    &:hover {
      background-color: #2b5fa4;
    }
  }
`;
export default Card;
