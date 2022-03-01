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
            <CreditCardStyled
              onClick={() => {
                setPayment("CC");
              }}
            >
              <BsCreditCard2Front
                color='white'
                style={{ marginRight: "5px" }}
              />
              <p style={{ color: "white", fontSize: "15px" }}>Credit Card</p>
            </CreditCardStyled>
            <CreditCardStyled
              onClick={() => {
                setPayment("PP");
              }}
            >
              <Image src='/logo/paypal.svg' width='100%' height='100%' />
            </CreditCardStyled>
          </ButtonContainer>
        </Row>
        {payment == "CC" ? (
          <Body>
            <CC />{" "}
          </Body>
        ) : (
          <Body>
            <PP />
          </Body>
        )}

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
    width: 320px;
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

const Wrapper = styled.div`
  width: 80%;
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
    width: 320px;
    border: 4px dashed green;
  }
`;

const CreditCardStyled = styled(Button)`
  && {
    background-color: transparent;
    width: 45%;
    height: 50px;
    font-weight: 40px;
    font-size: 20px;
    border: 1px solid #61718a;
    bottom: 0;

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
