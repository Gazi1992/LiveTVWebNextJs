// import Auth from "@aws-amplify/auth";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import PlayerHeader from "../../../../Components/Layout/PlayerHeader";
import styled from "styled-components";

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmation, setConfirmation] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const changePassword = async () => {
    setLoading(true);
    // try {
    //   let result = await Auth.currentAuthenticatedUser()
    //     .then((user) => {
    //       return Auth.changePassword(user, oldPassword, newPassword);
    //     })
    //     .then((data) => console.log(data))
    //     .catch((err) => console.log(err));
    //   console.log(result); // SUCCESS
    //   <h4>{result}</h4>;
    //   history.push("/account");
    //   history.go(0);
    //   setError("");
    //   setLoading(false);
    // } catch (err) {
    //   console.log("error code: ", err);
    //   setError(err.message);
    //   setLoading(false);
    // }
  };
  // const history = useHistory();
  return (
    <PlayerHeader>
      <Container>
        <Wrapper>
          <RowContainer>
            <h1>Create a new password</h1>
          </RowContainer>
          <RowContainer>
            <StyledTextField
              variant='outlined'
              color='primary'
              fullWidth
              type='password'
              required={true}
              onChange={(event) => {
                // setOldPassword(event.target.value);
              }}
              defaultValue=''
              helperText=''
              name='Old Password'
              placeholder='Old Password'
              id='Old Password'
            />
          </RowContainer>
          <RowContainer>
            <StyledTextField
              variant='outlined'
              color='primary'
              fullWidth
              type='password'
              required={true}
              onChange={(event) => {
                // setNewPassword(event.target.value);
              }}
              defaultValue=''
              helperText=''
              name='New Password'
              placeholder='New Password'
              id='New Password'
            />
          </RowContainer>

          <ButtonContainer>
            <SaveButton>SAVE</SaveButton>
            <CancelButton
              onClick={() => {
                // history.goBack();
              }}
            >
              CANCEL
            </CancelButton>
          </ButtonContainer>
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
export default ChangePassword;
