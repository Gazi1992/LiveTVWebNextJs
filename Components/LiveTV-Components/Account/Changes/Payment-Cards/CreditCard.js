import React from "react";
import Cards from "react-credit-cards";
import { useState } from "react";
import styled from "styled-components";
import "react-credit-cards/es/styles-compiled.css";
import Button from "@material-ui/core/Button";

const CreditCard = () => {
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
      <div id='PaymentForm'>
        <Cards
          cvc={data.cvc}
          expiry={data.expiry}
          focus={data.focus}
          name={data.name}
          number={data.number}
        />
        <Action action=''>
          <Input
            type='text'
            name='name'
            placeholder='Your Name'
            onChange={handleInputChange}
          />
          <Input
            type='number'
            name='number'
            placeholder='Card Number'
            onChange={handleInputChange}
          />
          <Input
            type='month'
            name='expiry'
            placeholder='Expire Date'
            onChange={handleInputChange}
          />
          <Input
            type='password'
            name='cvc'
            placeholder='CVC'
            onChange={handleInputChange}
          />
        </Action>
        <StyledButton>Save</StyledButton>
        <CancelButton
          onClick={() => {
            // history.goBack();
          }}
        >
          Cancel
        </CancelButton>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 400px;
  background: transparent;
`;

const Action = styled.form`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
`;
const Input = styled.input`
  background: #f9f9f9;
  border-radius: 5px;
  padding: 10px;
  width: 90%;
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

    &:hover {
      background-color: #e50e00;
    }
  }
`;

const CancelButton = styled(Button)`
  && {
    margin-top: 10px;
    background-color: #7a7a7a;
    width: 300px;
    height: 40px;
    font-weight: 40px;
    font-size: 20px;
    color: white;
    bottom: 0;

    &:hover {
      background-color: #474747;
    }
  }
`;
export default CreditCard;
