// import Auth from "@aws-amplify/auth";
import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router";
import PlayerHeader from "../../../../Components/Layout/PlayerHeader";
import styled from "styled-components";
import ConfirmPasscode from "../../../../Components/LiveTV-Components/Account/Changes/Change_Confirmation/ConfirmPasscode";

function ChangeEmail() {
  const [email, setEmail] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setConfirmation(false);
  }, []);
  // const changeEmail = async () => {
  //   setLoading(true);
  //   try {
  //     let user = await Auth.currentAuthenticatedUser();
  //     let result = await Auth.updateUserAttributes(user, {
  //       email: email,
  //     });
  //     setError("");
  //     setLoading(false);
  //     setConfirmation(true);
  //   } catch (err) {
  //     console.log("error resending code: ", err);
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

  // const history = useHistory();
  return (
    <PlayerHeader>
      {" "}
      <Container>
        <Wrapper>
          {confirmation === true ? (
            <ConfirmPasscode />
          ) : (
            <>
              <RowContainer>
                <h1>Change email</h1>
              </RowContainer>
              <RowContainer>
                <StyledTextField
                  variant='outlined'
                  color='primary'
                  required={true}
                  fullWidth
                  type='email'
                  id='Email '
                  required={true}
                  onChange={(event) => {
                    console.log(event.target.value);
                    // setEmail(event.target.value);
                  }}
                  defaultValue=''
                  name='New Email'
                  placeholder='New Email'
                  id='New Email'
                />
              </RowContainer>

              <ButtonContainer>
                <SaveButton
                  onClick={() => {
                    console.log("change Email");
                    // changeEmail();
                  }}
                >
                  SAVE
                </SaveButton>
                <CancelButton
                  onClick={() => {
                    console.log("goBack");
                    // history.goBack();
                  }}
                >
                  CANCEL
                </CancelButton>
              </ButtonContainer>
            </>
          )}
        </Wrapper>
      </Container>
    </PlayerHeader>
  );
}

const Container = styled.div`
  margin-top: 80px;
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RowContainer = styled.div`
  margin-top: 20px;
  width: 400px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  margin-top: 20px;
  width: 400px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;
const SaveButton = styled(Button)`
  && {
    background-color: #2973d5;
    width: 40%;
    height: 50px;
    margin-top: 10px;
    font-size: 25px;
    color: white;
    &:hover {
      background-color: #358eff;
    }
    @media screen and (max-width: 1400px) {
    }
  }
`;
const CancelButton = styled(Button)`
  && {
    background-color: #4b4e5a;
    width: 40%;
    height: 50px;
    margin-top: 10px;
    font-size: 25px;
    color: white;
    &:hover {
      background-color: #636677;
    }
    @media screen and (max-width: 1400px) {
    }
  }
`;

const StyledTextField = styled(TextField)`
  background: #e9f0ff;
  border-radius: 4px;
  width: "100%";
`;
export default ChangeEmail;
