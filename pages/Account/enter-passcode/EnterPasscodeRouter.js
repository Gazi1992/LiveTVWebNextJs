import React from "react";
import styled from "styled-components";

import ChangeEmail from "./changeEmail/ChangeEmail";
import ChangePassword from "./changePassword/ChangePassword";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import EnterPasscode from "../../../Components/LiveTV-Components/Account/Changes/EnterPasscode";

function EnterPasscodeRouter() {
  const { path } = useRouteMatch();
  return (
    <Container>
      <Switch>
        <Route exact path={path}>
          <EnterPasscode />
        </Route>
        <Route path={`${path}/changeEmail`}>
          <ChangeEmail />
        </Route>
        <Route path={`${path}/changePassword`}>
          <ChangePassword />
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

export default EnterPasscodeRouter;
