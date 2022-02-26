import React from "react";
import Cards from "react-credit-cards";
import { useState } from "react";
import styled from "styled-components";
import "react-credit-cards/es/styles-compiled.css";
import Button from "@material-ui/core/Button";

const Card = () => {
  const [data, setData] = useState({
    cvc: "",
    expiry: "",
    name: "",
    number: "",
  });
  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container>
      <Wrapper>
        <PaymentForm>
          <StyledCard>
            <Cards
              cvc={data.cvc}
              expiry={data.expiry}
              focus={data.focus}
              name={data.name}
              number={data.number}
            />
          </StyledCard>
          <Action action="">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleInputChange}
            />
            <Input
              type="number"
              name="number"
              placeholder="Card Number"
              onChange={handleInputChange}
            />
            <Input
              type="month"
              name="expiry"
              placeholder="Expire Date"
              onChange={handleInputChange}
            />
            <Input
              type="password"
              name="cvc"
              placeholder="CVC"
              onChange={handleInputChange}
            />
          </Action>
          <StyledButton>Confirm</StyledButton>
        </PaymentForm>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #ff512f; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #dd2476,
    #ff512f
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 01, 122, 1) 100%
  );
  @media screen and (max-height: 680px) {
    height: 100%;
    padding: 80px;
    border-radius: 0px;
  }
`;
const PaymentForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledCard = styled.div`
  @media screen and (max-height: 680px) {
    margin: 20px;
  }
`;
const Wrapper = styled.div`
  width: 450px;
  display: flex;
  height: 70vh;
  justify-content: space-around;
  flex-direction: column;
  background: #ffff;
  border-radius: 10px;
  @media screen and (max-height: 680px) {
    height: 100%;
    border-radius: 0px;
  }
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

const Action = styled.form`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
`;
const Input = styled.input`
  background: #f9f9f9;
  padding: 10px;
  width: 100%;
  border: none;
  margin-bottom: 20px;
  font-size: 14px;
  color: rgb(0, 0, 0);
  outline: none;
  font-weight: 300;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #e50e6b;
    width: 300px;
    height: 40px;
    font-weight: 40px;
    font-size: 20px;
    color: white;
    bottom: 0;
    @media screen and (max-width: 600px) {
      width: 80%;
    }
    @media screen and (max-height: 680px) {
      margin: 20px;
    }
    &:hover {
      background-color: #e50e00;
    }
  }
`;
export default Card;
