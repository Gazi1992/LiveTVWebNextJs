import React from "react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import styled from "styled-components";
import PayPalButton from "./PayPalExtra/PaypalButton";
import Button from "@material-ui/core/Button";

const PayPal = () => {
  const initialOptionsSubscription = {
    "client-id": "test",
    currency: "USD",
    intent: "subscription",
    vault: true,
  };

  const createSubscriptionHandler = (data, actions) => {
    return actions.subscription.create({
      plan_id: "P-3RX065706M3469222L5IFM4I",
    });
  };

  const onApproveSubscriptionHandler = (data, actions) => {
    alert("You have successfully created subscription " + data.subscriptionID);
  };

  return (
    <Container>
      <PayPalScriptProvider options={initialOptionsSubscription}>
        <PayPalButton
          createSubscription={createSubscriptionHandler}
          onApprove={onApproveSubscriptionHandler}
        />
      </PayPalScriptProvider>
      {/* <StyledButton>Save</StyledButton> */}
      {/* <CancelButton>Cancel</CancelButton> */}
    </Container>
  );
};
const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: 400px;
  background: transparent;
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

export default PayPal;
