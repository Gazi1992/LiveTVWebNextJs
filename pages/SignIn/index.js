import { TextField } from "@mui/material";
import React, { useEffect } from "react";

import { connect } from "react-redux";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { setUserAWS } from "../../app/store/actions/userAWS";
import Auth from "@aws-amplify/auth";
import { FaKey } from "react-icons/fa";

import ReactLoading from "react-loading";

const mapStatetoProps = (state) => ({});
const mapDispatchtoProps = (dispatch) => {
  return {
    setUserAWS: (onSuccess, onError) =>
      dispatch(setUserAWS(onSuccess, onError)),
  };
};
function SignIn(props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const logIn = async () => {
    setLoading(true);
    try {
      const user = await Auth.signIn(email, password);
      setError("");
      props.setUserAWS(
        () => {
          router.push("/LiveTV", undefined, { shallow: true });
        },
        () => {
          console.log("ERROR GETTING USER AWS");
        }
      );
    } catch (err) {
      console.log("error signing in", err);
      setError(err.message);
      setLoading(false);
      if (err.name == "UserNotConfirmedException") {
        console.log("UserNotConfirmedException");
      }
    }
  };

  const onForgotPassword = () => {
    router.push("/ForgotPassword", undefined, { shallow: true });
  };

  useEffect(() => {
    console.log("From Effect" + email);
  }, [email]);

  const handleSubmit = () => {
    console.log("clicked");
    logIn();
  };

  return (
    <Container>
      {loading ? (
        <LoadingWrapper>
          <ReactLoading type='bars' color='white' height={267} width={175} />
        </LoadingWrapper>
      ) : (
        <Wrapper>
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
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <FormHeader>
              <IconHeader>
                <FaKey size={35} />
              </IconHeader>
              <FormH1>Kyçu për të vazhduar tutje</FormH1>
            </FormHeader>
            <BodyHeader>
              <TextField
                style={{ marginTop: "8px", marginBottom: "8px" }}
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email'
                name='email'
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                value={password}
                autoComplete='current-password'
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <span style={{ color: "red" }}> {error}</span>

              <FormButton
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
              >
                Vazhdo
              </FormButton>
              <ForgotPasswordButton
                onClick={() => {
                  onForgotPassword();
                }}
              >
                Kam harruar fjalëkalimin
              </ForgotPasswordButton>
            </BodyHeader>
          </Form>
        </Wrapper>
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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
  padding: 0px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  max-width: 400px;

  position: relative;
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;

const FormHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  position: absolute;
  top: 0px;
  background-color: #64adf1;
`;
const IconHeader = styled.div`
  width: 100px;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
`;
const BodyHeader = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const FormH1 = styled.h1`
  width: 80%;
  height: 100%;
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 0px;
  color: white;

  font-size: 20px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: left;
  @media screen and (max-width: 400px) {
    width: 60%;
  }
`;

const FormButton = styled(Button)`
  && {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #3f9cf3;
    color: white;
    cursor: pointer;

    &:hover {
      background-color: #388ddb;
    }
  }
    @media screen and (max-width: 400px) {
      font-size: 12px;
    }
  }
`;

const ForgotPasswordButton = styled(Button)`
 && {
    width: 100%;
    margin-bottom: 20px;
    background-color: transparent;
    color: black;
    cursor: pointer;

    &:hover {
      background-color: gray;
    }
  }

    @media screen and (max-width: 400px) {
      font-size: 12px;
    }
  }
`;
// export default SignIn;
export default connect(mapStatetoProps, mapDispatchtoProps)(SignIn);
