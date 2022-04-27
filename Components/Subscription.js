import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
function Subscription() {
  return (
    <Container>
      <Wrapper>
        <StyledTextField
          variant='outlined'
          autoComplete='new-password'
          color='primary'
          required={true}
          onChange={(event) => {
            // setConfirmationCode(event.target.value);
          }}
          inputProps={{ borderRadius: "0px" }}
          defaultValue=''
          helperText=''
          type='email'
          name='Regjistrohu me email'
          placeholder='Regjistrohu me email'
          id='Regjistrohu me email'
        />
        <StyledButtonHome onClick={() => {}}>Regjistrohu</StyledButtonHome>
      </Wrapper>
      <Intro>
        <p>
          <span
            style={{
              borderRadius: "4px",
              background: "red",
              color: "black",
              letterSpacing: "0.5px",
              padding: "5px",
              fontSize: "18px",
            }}
          >
            Ofertë
          </span>{" "}
          Regjistrohu dhe merr muajin e parë falas!
        </p>
      </Intro>
    </Container>
  );
}

const Container = styled.form`
  width: 60%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Wrapper = styled.div`
  width: 60%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px;
`;
const StyledTextField = styled(TextField)`
  background: #e9f0ff;
  border-radius: 4px;
  width: 80%;
`;

const StyledButtonHome = styled(Button)`
  && {
    background-color: #2973d5;
    width: 20%;
    height: 56px;
    margin-left: -10px;
    border-radius: 0px;
    color: white;
    &:hover {
      background-color: #358eff;
    }
    @media screen and (max-width: 1400px) {
    }
  }
`;
const Intro = styled.div`
  width: 50%;
  position: relative;
  background: transparent;
  z-index: 1;

  user-select: none;
  a {
    font-weight: bold;
    background: transparent;
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 55px;
    line-height: 1.5;
    letter-spacing: 1.5px;

    @media screen and (max-width: 1250px), screen and (max-height: 800px) {
      font-size: 30px;
      line-height: 1.5;
      width: 100%;
      background: transparent;
      letter-spacing: 0.5px;
    }
  }
  p {
    width: 60%;
    background: transparent;
    margin: auto;
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 25px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 1.5px;
    @media screen and (max-width: 1000px), screen and (max-height: 600px) {
      font-size: 10px;
      line-height: 1.5;

      width: 100%;
      background: transparent;
      letter-spacing: 0.5px;
    }
  }
`;
export default Subscription;
