import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  Typography,
  Grid,
  TextField,
  Button,
  Avatar,
} from "@mui/material";
import { IoArrowBack } from "react-icons/io5";
import styled from "styled-components";
import Auth from "@aws-amplify/auth";

import ReactLoading from "react-loading";
import { useRouter } from "next/router";

const pStyle = {
  backgroundColor: "#19857b",
  color: "white",
  alignItems: "center ",
  justifyContent: "center",
};

// const mapStatetoProps = (state) => ({});
// const mapDispatchtoProps = (dispatch) => {
//   return {
//     refreshUser: (onSuccess, onError) =>
//       dispatch(refreshUser(onSuccess, onError)),
//   };
// };

function DataForm(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [waitingConfirmation, setWaitingConfirmation] = useState(false);
  const [activeSignUpButton, setActiveSignUpButton] = useState(false);
  const [activeConfirmButton, setActiveConfirmButton] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (email.length > 0 && password.length > 7) {
      setActiveSignUpButton(true);
    } else {
      setActiveSignUpButton(false);
    }
  }, [password, email]);

  useEffect(() => {
    if (confirmationCode.length > 0) {
      setActiveConfirmButton(true);
    } else {
      setActiveConfirmButton(false);
    }
  }, [confirmationCode]);

  const confirm = async () => {
    setLoading(true);
    try {
      await Auth.confirmSignUp(email, confirmationCode);
      logIn();
      router.push("/Payment/Offerselection", undefined, { shallow: true });
      setError("");
    } catch (err) {
      console.log("error confirming sign up", err);
      setError(err.message);
    }
    setLoading(false);
  };
  const logIn = async () => {
    try {
      await Auth.signIn(email, password);
      setError("");
    } catch (err) {
      console.log("error signing in", err);
      setError(err.message);
    }
  };

  const resendCode = async () => {
    setLoading(true);
    try {
      await Auth.resendSignUp(email);
      console.log("code resent successfully");
      setError("");
      setLoading(false);
    } catch (err) {
      console.log("error resending code: ", err);
      setError(err.message);
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const { user } = await Auth.signUp({
        username: email,
        password: password,
      });
      console.log(user);
      setError("");
      setWaitingConfirmation(true);
      setLoading(false);
    } catch (err) {
      console.log("error signing up:", err);
      setError(err.message);
      setLoading(false);
    }
  };
  const SubmitSignUp = (event) => {
    event.preventDefault();
    onSignUp();
  };

  const SubmitConfirm = (event) => {
    event.preventDefault();
    onConfirm();
  };
  const onSignUp = () => signUp();
  const onConfirm = () => confirm();
  const onResendCode = () => resendCode();
  return (
    <Container>
      {loading ? (
        <LoadingWrapper>
          <ReactLoading type='bars' color='white' height={267} width={175} />
        </LoadingWrapper>
      ) : (
        <>
          <Header
            onClick={() => {
              router.back();
            }}
          >
            <IoArrowBack
              size='30px'
              style={{
                color: "#67bdff",
                marginBottom: "3px",
                marginLeft: "5px",
              }}
            />
            <span> Back </span>
          </Header>
          <CssBaseline />
          <Paper>
            <Wrap>
              <Avatar style={pStyle}></Avatar>
              <Typography component='h1' variant='h5'>
                Sign up
              </Typography>
            </Wrap>
            <FWrapper>
              {waitingConfirmation === false ? (
                <form onSubmit={SubmitSignUp}>
                  <TextField
                    variant='outlined'
                    required={true}
                    fullWidth
                    autoFocus
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    id='email'
                    label='Email Address'
                    name='email'
                    inputProps={{
                      autocomplete: "off",
                    }}
                  />

                  <TextField
                    variant='outlined'
                    style={{ marginTop: "10px" }}
                    required={true}
                    fullWidth
                    name='Password'
                    label='Set new password'
                    type='password'
                    id='password'
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    inputProps={{
                      autocomplete: "new-password",
                    }}
                  />

                  <span style={{ color: "red" }}> {error}</span>
                  <FormButton
                    disabled={!activeSignUpButton}
                    type='submit'
                    onClick={() => {
                      onSignUp();
                    }}
                  >
                    Sign Up
                  </FormButton>
                </form>
              ) : (
                <form onSubmit={SubmitConfirm}>
                  <TextField
                    variant='outlined'
                    required={true}
                    fullWidth
                    value={confirmationCode}
                    inputProps={{
                      autocomplete: "off",
                    }}
                    onChange={(event) => {
                      setConfirmationCode(event.target.value);
                    }}
                    placeholder='Confirmation Code'
                    label='Confirmation Code'
                    id='Confirmation Code'
                  />

                  <span style={{ color: "red" }}> {error}</span>
                  <FormButton type='submit' disabled={!activeSignUpButton}>
                    Confirm
                  </FormButton>
                </form>
              )}

              <Grid container justify='flex-end'>
                <Grid item>
                  <StyledSpan>
                    Already have an account?{" "}
                    <a
                      onClick={() => {
                        // window.location.href = "/SignIn";
                      }}
                    >
                      Sign in
                    </a>
                  </StyledSpan>
                </Grid>
              </Grid>
            </FWrapper>
            {/* <Box mt={5}>
          <Copyright />
        </Box> */}
          </Paper>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  background-color: #040714;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    to right bottom,
    #121f3e,
    #1b2b4c,
    #24375b,
    #2c436a,
    #35507a
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Header = styled.div`
  width: 100%;
  height: 10%;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

  span {
    color: white;
    margin-left: 5px;
    font-size: 20px;
    padding-bottom: 5px;
  }
  max-width: 400px;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;
const LoadingWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Paper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  background: white;
  border-radius: 4px;
  max-width: 400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  justify-content: center;
`;
const StyledSpan = styled.span`
  a {
    cursor: pointer;
    color: red;
    &:hover {
      color: #dd0000;
    }
  }
`;
const FWrapper = styled.div`
  background: white;

  height: fit-content;
  width: 80%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding-top: 20px;
  margin-bottom: 20px;
  max-width: 400px;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;

const FormButton = styled(Button)`
  && {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #0063e5;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #0483ee;
    }
  }
`;

export default DataForm;

// export default connect(mapStatetoProps, mapDispatchtoProps)(DataForm);
