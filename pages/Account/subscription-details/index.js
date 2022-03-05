import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import PlayerHeader from "../../../Components/Layout/PlayerHeader";
import { Button } from "@material-ui/core";
import Link from "next/link";

function SubscriptionDetails() {
  return (
    <PlayerHeader>
      <Container>
        <Link href='./'>
          <Header>
            <IoArrowBack style={{ color: "#67bdff", marginLeft: "5px" }} />
            <span> Back to Account</span>
          </Header>
        </Link>
        <Title>
          <span> Subscription details</span>
        </Title>
        <FirstBlockContainer>
          <ImageContainer>
            <img src='/images/placeholder.png' />
          </ImageContainer>
          <RowContainer>
            <LogoAndPrice>
              <span style={{ fontWeight: "bolder" }}>Disney+</span>
              <span>€8.99/month</span>
            </LogoAndPrice>
            <Link href='./subscription-details/annual'>
              <SwitchtoAnnual>
                <span> Switch to Annual </span>
              </SwitchtoAnnual>
            </Link>
          </RowContainer>
        </FirstBlockContainer>
        <BlockContainer>
          <RowContainer>
            <span style={{ marginLeft: "10px" }}>Payment Method</span>
            <Link href='./subscription-details/change-payment-info'>
              <ChangeContainer style={{ marginRight: "10px" }}>
                Change
              </ChangeContainer>
            </Link>
          </RowContainer>
          <RowContainer>
            <span style={{ marginLeft: "10px" }}>Current Package</span>
            <Link href='./subscription-details/plan'>
              <ChangeContainer style={{ marginRight: "10px" }}>
                Change
              </ChangeContainer>
            </Link>
          </RowContainer>

          <RowContainer>
            <span style={{ marginLeft: "10px" }}>New Billing Date</span>
            <span style={{ marginRight: "10px" }}>December 20, 2021</span>
          </RowContainer>
          <RowContainer>
            <span style={{ marginLeft: "10px" }}>Last Payment</span>
            <span style={{ marginRight: "10px" }}>November 20, 2021 €8.99</span>
          </RowContainer>
        </BlockContainer>
        <Link href='./subscription-details/survey'>
          <CancelSubscriptionContainer>
            Cancel Subscription
          </CancelSubscriptionContainer>
        </Link>
      </Container>
    </PlayerHeader>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
`;
const Header = styled.div`
  width: 400px;
  height: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  span {
    color: white;
    margin-left: 5px;
    font-size: 15px;
  }
`;

const ChangeContainer = styled.span`
  cursor: pointer;
  color: #66bcff;
  :hover {
    color: #94d0ff;
  }
`;
const Title = styled.div`
  width: 400px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  span {
    color: white;
    margin-left: 5px;
    font-size: 25px;
  }
`;

const FirstBlockContainer = styled.div`
  width: 400px;
  height: 210px;
  margin-top: 20px;
  border-bottom: 1px solid #31343e;
`;

const BlockContainer = styled.div`
  width: 400px;
  height: 280px;
  margin-top: 20px;
  border-bottom: 1px solid #31343e;
`;

const RowContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid #31343e;
  border-right: 1px solid #31343e;
  border-left: 1px solid #31343e;
`;

const CancelSubscriptionContainer = styled.div`
  width: 400px;
  height: 70px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  color: #e44e48;
  cursor: pointer;
  border: 1px solid #31343e;
  :hover {
    color: #ff6e50;
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
const SwitchtoAnnual = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    color: #66bcff;
    cursor: pointer;
    margin-right: 10px;
    &:hover {
      color: #94d0ff;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 140px;
  border-top: 1px solid #31343e;
  border-right: 1px solid #31343e;
  border-left: 1px solid #31343e;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default SubscriptionDetails;
