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
  const stopLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 700);
  };

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
    stopLoading();
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
      setError("");
      setWaitingConfirmation(true);
    } catch (err) {
      console.log("error signing up:", err);
      setError(err.message);
    }
    setLoading(false);
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
            <span> Mbrapa </span>
          </Header>

          {/* <Paper style={{ border: "1px solid green" }}>
            <Wrap>
              <Avatar style={pStyle}></Avatar>
              <Typography component='h1' variant='h5'>
                Regjistrohu
              </Typography>
            </Wrap> */}
          <Form>
            <FormH1>Krijo llogarinë tuaj</FormH1>
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
                  label='Email'
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
                  label='Vendos passwordin e ri'
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
                  Regjistrohu
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
                  label='Kodi i konfirmimit'
                  id='Confirmation Code'
                />

                <span style={{ color: "red" }}> {error}</span>
                <FormButton type='submit' disabled={!activeSignUpButton}>
                  Konfirmo
                </FormButton>
              </form>
            )}

            <Grid container justify='flex-end'>
              <Grid item>
                <StyledSpan>
                  Tashmë kam një llogari?
                  <a
                    onClick={() => {
                      router.push("/SignIn", undefined, { shallow: false });
                    }}
                  >
                    Kyçu
                  </a>
                </StyledSpan>
              </Grid>
            </Grid>
          </Form>
          {/* </Paper> */}
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    #121f3e,
    #1b2b4c,
    #24375b,
    #2c436a,
    #35507a
  );
`;

const FormH1 = styled.h1`
  margin: 0px;
  margin-bottom: 20px;
  color: #000;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
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
const Form = styled.form`
  background: white;

  height: 400px;
  width: 20%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
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
  height: 400px;
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
  width: 90%;
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
    background-color: black;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #282c30;
    }
  }
`;

export default DataForm;

// export default connect(mapStatetoProps, mapDispatchtoProps)(DataForm);
