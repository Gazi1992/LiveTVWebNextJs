import React from "react";
import Cards from "react-credit-cards";
import { useState } from "react";
import styled from "styled-components";
import "react-credit-cards/es/styles-compiled.css";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import { BsCreditCard2Front } from "react-icons/bs";
import { Input } from "@material-ui/core";
import CardNumberMask from "../MaskedInputs/CardNumberMask";
import CardExpireMask from "../MaskedInputs/CardExpireMask";
import CardCVCMask from "../MaskedInputs/CardCVCMask";

const Card = () => {
  const [payment, setPayment] = useState("CC");
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
      <Action action=''>
        <InputStyled
          type='text'
          name='name'
          placeholder='Emri juaj'
          onChange={handleInputChange}
        />
        <InputStyled
          name='number'
          inputComponent={CardNumberMask}
          placeholder='Numri i kartelës'
          onChange={handleInputChange}
        />
        <InputStyled
          name='expiry'
          inputComponent={CardExpireMask}
          placeholder='Data e skadimit'
          onChange={handleInputChange}
        />

        <InputStyled
          type='password'
          name='cvc'
          inputComponent={CardCVCMask}
          placeholder='CVC'
          inputProps={{ pattern: "d{3,4}" }}
          onChange={handleInputChange}
        />
      </Action>
    </PaymentForm>
  );
};

const PaymentForm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;
const StyledCard = styled.div`
  @media screen and (max-width: 1700px) {
    padding: 0px 10px 10px 10px;
    width: 100%;
  }
  @media screen and (max-height: 680px) {
  }
`;

const Action = styled.form`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  @media screen and (max-width: 1500px) {
    width: 80%;
  }
`;
const InputStyled = styled(Input)`
  background: #f9f9f9;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  color: rgb(0, 0, 0);
  outline: none;
  font-weight: 300;
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default Card;
