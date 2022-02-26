import React from "react";
import styled from "styled-components";
import Account from "../Account";
import EnterPasscodeRouter from "../enter-passcode/EnterPasscodeRouter";
import SubscriptionDetails from "../subscription-details/SubscriptionDetails";
import SubscriptionDetailRouter from "../subscription-details/SubscriptionDetailRouter";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";

function AccountRouter() {
  const { path } = useRouteMatch();
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path={path}>
            <Account />
          </Route>
          <Route path={`${path}/enter-passcode`}>
            <EnterPasscodeRouter />
          </Route>
          <Route path={`${path}/subscription-details`}>
            <SubscriptionDetailRouter />
          </Route>
          <Route path={`${path}/:topicId`}>
            <SubscriptionDetails />
          </Route>
        </Switch>
      </Router>
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
  z-index: -1;
`;

export default AccountRouter;
