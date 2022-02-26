import React from "react";

import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import { useHistory } from "react-router";

function BillingHistory() {
  const history = useHistory();
  return (
    <Container>
      <Header
        onClick={() => {
          history.goBack();
        }}
      >
        <IoArrowBack style={{ color: "#67bdff", marginLeft: "5px" }} />
        <span> Back to Account</span>
      </Header>
      <Title>
        <span> Subscription details</span>
      </Title>

      <BlockContainer>
        <BlockHeaderContainer>
          <DateContainer>
            <span>Date</span>
          </DateContainer>
          <DescriptionContainer>
            <span>Descprition</span>
          </DescriptionContainer>
          <TotalContainer>
            <span>Total</span>
          </TotalContainer>
        </BlockHeaderContainer>
        <RowContainer>
          <DateContainer>
            <span style={{ color: "#5f98cf" }}>1 Mars 2020</span>
          </DateContainer>
          <DescriptionContainer>
            <span>Disney Plus Monthly</span>
          </DescriptionContainer>
          <TotalContainer>
            <span>E8.99</span>
          </TotalContainer>
        </RowContainer>
        <RowContainer>
          <DateContainer>
            <span>1 Mars 2020</span>
          </DateContainer>
          <DescriptionContainer>
            <span>Disney Plus Monthly</span>
          </DescriptionContainer>
          <TotalContainer>
            <span>E8.99</span>
          </TotalContainer>
        </RowContainer>
        <RowContainer>
          <DateContainer>
            <span>1 Mars 2020</span>
          </DateContainer>
          <DescriptionContainer>
            <span>Disney Plus Monthly</span>
          </DescriptionContainer>
          <TotalContainer>
            <span>E8.99</span>
          </TotalContainer>
        </RowContainer>
      </BlockContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const Header = styled.div`
  width: 50vw;
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

const Title = styled.div`
  width: 50vw;
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

const BlockContainer = styled.div`
  width: 50vw;
  height: fit-content;
  margin-top: 20px;
  border-bottom: 1px solid #31343e;
  border-radius: 3px;
  overflow: hidden;
`;

const BlockHeaderContainer = styled.div`
  width: 100%;
  height: 30px;
  background: #31343e;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
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

const DateContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  span {
    margin-left: 10px;
    word-wrap: normal;
  }
`;
const DescriptionContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const TotalContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  span {
    margin-right: 10px;
  }
`;

export default BillingHistory;
