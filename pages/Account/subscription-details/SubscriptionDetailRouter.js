import React from "react";
import styled from "styled-components";
import SubscriptionDetails from "./SubscriptionDetails";
import ChangePaymentInfo from "./Change-payment-info/ChangePaymentInfo";
import Survey from "../../../Components/LiveTV-Components/Account/Changes/Survey";
import Annual from "./Annual/Annual";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import BillingHistory from "../../../Components/LiveTV-Components/Account/Changes/BillingHistory";
import Plan from "../../../Components/LiveTV-Components/Account/Changes/Plan";

function SubscriptionDetailRouter() {
  const { url, path } = useRouteMatch();
  return (
    <Container>
      <Switch>
        <Route exact path={path}>
          <SubscriptionDetails />
        </Route>
        <Route path={`${path}/annual`}>
          <Annual />
        </Route>
        <Route path={`${path}/change-payment-info`}>
          <ChangePaymentInfo />
        </Route>

        <Route path={`${path}/survey`}>
          <Survey />
        </Route>
        <Route path={`${path}/billing-history`}>
          <BillingHistory />
        </Route>
        <Route path={`${path}/plan`}>
          <Plan />
        </Route>
      </Switch>
    </Container>
  );
}
const Container = styled.div`
  top: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default SubscriptionDetailRouter;
