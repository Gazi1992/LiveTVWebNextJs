import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SucessDialog from "../../../.././Components/Payment-Information/Dialogs/SuccessDialog";
import FailureDialog from "../../../.././Components/Payment-Information/Dialogs/FailureDialog";
import CreditCard from "../../../.././Components/Payment-Information/Card/PaymentProcessor/CC";
// import CreditCard from "../../../.././Components/LiveTV-Components/Account/Changes/Payment-Cards/CreditCard";
import PayPal from "../../../../Components/LiveTV-Components/Account/Changes/Payment-Cards/PayPal";
import PlayerHeader from "../../../../Components/Layout/PlayerHeader";
import Link from "next/link";
function ChangePaymentInfo() {
  const [confirm, setConfirm] = useState(false);
  const [open, setOpening] = useState(false);
  const [selectPayment, setSelectPayment] = useState("CC");
  useEffect(() => {
    setConfirm(false);
    setOpening(false);
  }, []);
  return (
    <PlayerHeader>
      <Container>
        <Header>
          <h3>Change Payment Info</h3>
        </Header>
        <Wrapper>
          {/* <Header>
        <h1>Switch to Annual Subscription</h1>
        <h4>89.90/year. Cancel anytime</h4>
        <p>
          Your annual subscription starts immediately. The reminder of your
          current subscription will be added to the end of your new annual
          subscription
        </p>
      </Header> */}
          <SelectCardContainer>
            <ImageContainer
              onClick={() => {
                setSelectPayment("CC");
              }}
            >
              <img src='/images/credit-card-icon.svg' />
              <span>Credit Card</span>
            </ImageContainer>
            <ImageContainer
              onClick={() => {
                setSelectPayment("PP");
              }}
            >
              <img src='/images/paypal-icon.svg' />
              <span>PayPal</span>
            </ImageContainer>
          </SelectCardContainer>

          <BlockContainer>
            <BillingHeader>
              <h5>Confirm your billing details</h5>
            </BillingHeader>
            {selectPayment === "CC" ? (
              <CrediCardWrapper>
                <CreditCard />
                <StyledButton
                  onClick={() => {
                    setOpening(true);
                  }}
                >
                  Save
                </StyledButton>
                <SucessDialog handleOpen={open} handleParent={setOpening} />
                {/* <FailureDialog handleOpen={open} handleParent={setOpening} /> */}
                <Link href='./'>
                  <CancelButton>Cancel</CancelButton>
                </Link>
              </CrediCardWrapper>
            ) : (
              <PayPal />
            )}
          </BlockContainer>
        </Wrapper>
      </Container>
    </PlayerHeader>
  );
}

const Container = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
const CrediCardWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  width: 400px;
  height: fit-content;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: left;
  }
  h4 {
    margin: -20px 0 0 0;
    text-align: left;
  }
  p {
    margin: 0 0 0 0;
    text-align: left;
    font-size: 12px;
  }
`;

const SelectCardContainer = styled.div`
  height: 100px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 30%;
  height: 100%;
  cursor: pointer;
  opacity: 0.6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 80%;
  }
  &:hover {
    opacity: 1;
  }
`;

const BillingHeader = styled.div`
  width: 100%;
  height: fit-content;
  h5 {
    margin: 0 0 0 0;
    text-align: left;
  }
`;
const BlockContainer = styled.div`
  width: 400px;
  height: fit-content;
  margin-top: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    text-align: left;
  }
  h4 {
    margin: 0 0 0 0;
    text-align: left;
  }
  p {
    margin: 0 0 0 0;
    text-align: left;
    font-size: 12px;
  }
`;
const RowContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  h5 {
    margin-bottom: 0px;
  }
`;

const FieldContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BillingDetailsContainer = styled.div`
  width: 100%;
  height: 95%;
  background: #30333e;
  display: flex;
  border-radius: 3px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ChangeContainer = styled.span`
  cursor: pointer;
  margin-right: 10px;
  color: #66bcff;
  :hover {
    color: #94d0ff;
  }
`;
const LogoAndPrice = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span {
    margin-left: 10px;
  }
`;
const CardContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  img {
    margin-left: 10px;
    height: 50%;
    width: 60px;
  }
`;

const SecurityContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h5 {
    margin-bottom: 0px;
  }
`;

const StyledTextField = styled(TextField)`
  background: #30333e;
  border-radius: 4px;
  width: 100%;

  color: white;
`;

const StyledButtonHome = styled(Button)`
  && {
    background-color: #2973d5;
    width: 100%;
    height: 60%;

    color: white;
    &:hover {
      background-color: #358eff;
    }
    @media screen and (max-width: 1400px) {
    }
  }
`;

export default ChangePaymentInfo;
