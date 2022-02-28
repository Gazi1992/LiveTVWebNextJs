import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
// import Auth from "@aws-amplify/auth";

// import { connect } from "react-redux";
// import { refreshUser } from "../../../../../app/store/actions/user";

// const mapStatetoProps = (state) => ({});
// const mapDispatchtoProps = (dispatch) => {
//   return {
//     refreshUser: (onSuccess, onError) =>
//       dispatch(refreshUser(onSuccess, onError)),
//   };
// };

function ConfirmPasscode(props) {
  // const history = useHistory();
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  // const resendCode = async () => {
  //   setLoading(true);
  //   try {
  //     await Auth.verifyCurrentUserAttribute("email");
  //     console.log("code resent successfully");
  //     setError("");
  //     setLoading(false);
  //   } catch (err) {
  //     console.log("error resending code: ", err);
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

  // const confirm = async () => {
  //   setLoading(true);
  //   try {
  //     await Auth.verifyCurrentUserAttributeSubmit("email", confirmationCode);
  //     history.push("/LiveTV/");
  //     history.go(0);
  //     props.refreshUser(
  //       () => {
  //         setLoading(false);
  //         history.push("/Payment/OfferSelection");
  //       },
  //       () => console.log("Error refreshing user")
  //     );
  //     setError("");
  //   } catch (err) {
  //     console.log("error confirming sign up", err);
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };
  const onResendCode = () => resendCode();
  const onConfirm = () => confirm();

  return (
    <Container>
      <Wrapper>
        <BlockContainer>
          <ParagraphContainer>
            <h1>Check your email inbox</h1>
            <span>
              We need you to verify your email address. We've sent an email to
              edonderguti@gmail.com containing a 6-digit code which expires in
              15 minutes. Please enter it below.
            </span>
          </ParagraphContainer>
        </BlockContainer>
        <BlockContainer>
          <PassCodeContainer>
            <h2> Code</h2>
            <StyledTextField
              style={{ marginLeft: "5px" }}
              variant='outlined'
              size='large'
              autoComplete='new-password'
              color='primary'
              required={true}
              onChange={(event) => {
                // setConfirmationCode(event.target.value);
              }}
              inputProps={{ maxLength: 6 }}
              defaultValue=''
              helperText=''
              name='Confirmation Code'
              placeholder='Confirmation Code'
              id='Confirmation Code'
            />
            <span
              onClick={() => {
                // onResendCode();
              }}
            >
              RESEND
            </span>
          </PassCodeContainer>
        </BlockContainer>
        <BlockContainer>
          <StyledButtonHome
            onClick={() => {
              onConfirm();
            }}
          >
            CONTINUE
          </StyledButtonHome>
          <CancelButtonHome
            onClick={() => {
              // history.goBack();
            }}
          >
            CANCEL
          </CancelButtonHome>
        </BlockContainer>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  margin-top: 80px;
  width: 100%;
  height: 100%;
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
  align-items: center;
  justify-content: center;
`;

const BlockContainer = styled.div`
  width: 400px;
  height: 120px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  span {
    text-align: left;
  }
`;
const PassCodeContainer = styled.div`
  height: 100%;
  width: 100%;
  background: transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h2 {
    margin-left: 5px;
  }
  span {
    cursor: pointer;
    margin-top: 10px;
    margin-left: 5px;
    font-size: 15px;
    font-weight: 600;
    &:hover {
      color: #c9f0ff;
    }
  }
`;

const StyledButtonHome = styled(Button)`
  && {
    background-color: #2973d5;
    width: 120px;
    height: 50px;
    margin-right: 20px;

    color: white;
    &:hover {
      background-color: #358eff;
    }
    @media screen and (max-width: 1400px) {
    }
  }
`;

const CancelButtonHome = styled(Button)`
  && {
    background-color: #4b4e5a;
    width: 120px;
    height: 50px;
    margin-bottom: 5px;

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
`;

export default ConfirmPasscode;

// export default connect(mapStatetoProps, mapDispatchtoProps)(ConfirmPasscode);
