import React from "react";
import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { IoArrowBack } from "react-icons/io5";
import PlayerHeader from "../../../../Components/Layout/PlayerHeader";
import { Button } from "@material-ui/core";
const style = {
  marginLeft: "10px",
  color: "#6c7489",
};
function Survey() {
  return (
    <PlayerHeader>
      <Container>
        <Header
          onClick={() => {
            // history.goBack();
          }}
        >
          <IoArrowBack style={{ color: "#67bdff", marginLeft: "5px" }} />
          <span> Back to Account</span>
        </Header>

        <Wrapper>
          <RowContainer style={{ border: "0px" }}>
            <h2>Why do you want to cancel?</h2>
          </RowContainer>
          <FormControl component='fieldset'>
            <RadioGroup
              aria-label='gender'
              defaultValue='female'
              name='radio-buttons-group'
            >
              <Wrapper>
                <RowContainer>
                  <FormControlLabel
                    value='1'
                    control={<Radio sx={style} />}
                    label={
                      <StyledLabel>
                        Too expensive/can no longer afford it!
                      </StyledLabel>
                    }
                  />
                </RowContainer>
                <RowContainer>
                  <FormControlLabel
                    value='2'
                    control={<Radio sx={style} />}
                    label={<StyledLabel>Technical issues</StyledLabel>}
                  />
                </RowContainer>
                <RowContainer>
                  <FormControlLabel
                    value='3'
                    control={<Radio sx={style} />}
                    label={
                      <StyledLabel>
                        Too much buffering or poor video quality
                      </StyledLabel>
                    }
                  />
                </RowContainer>
                <RowContainer>
                  <FormControlLabel
                    value='4'
                    control={<Radio sx={style} />}
                    label={
                      <StyledLabel>
                        Didn't find the movies or the content I was looking for
                      </StyledLabel>
                    }
                  />
                </RowContainer>
                <RowContainer>
                  <FormControlLabel
                    value='5'
                    control={<Radio sx={style} />}
                    label={<StyledLabel>Difficulty navigating</StyledLabel>}
                  />
                </RowContainer>
                <RowContainer>
                  <FormControlLabel
                    value='6'
                    control={<Radio sx={style} />}
                    label={<StyledLabel>Billing Issues</StyledLabel>}
                  />
                </RowContainer>

                <RowContainer>
                  <FormControlLabel
                    value='7'
                    control={<Radio sx={style} />}
                    label={
                      <StyledLabel>
                        I agree to Splash TV terms and conditions
                      </StyledLabel>
                    }
                  />
                </RowContainer>

                <RowContainer>
                  <FormControlLabel
                    value='8'
                    control={<Radio sx={style} />}
                    label={<StyledLabel>Will use another platform</StyledLabel>}
                  />
                </RowContainer>
                <RowContainer>
                  <FormControlLabel
                    value='9'
                    control={<Radio sx={style} />}
                    label={<StyledLabel>Other</StyledLabel>}
                  />
                </RowContainer>
              </Wrapper>
            </RadioGroup>
          </FormControl>
        </Wrapper>
        <ConfirmButtonHome
          onClick={() => {
            // history.goBack();
          }}
        >
          FINALIZE CANCELING!
        </ConfirmButtonHome>
        <CancelButtonHome
          onClick={() => {
            // history.goBack();
          }}
        >
          CANCEL
        </CancelButtonHome>
      </Container>
    </PlayerHeader>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 92vh;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-height: 800px) {
    height: 100%;
  }
`;

const Header = styled.div`
  width: 750px;
  height: 50px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
  span {
    color: white;
    margin-left: 5px;
    font-size: 15px;
  }
`;
const Wrapper = styled.div`
  width: 750px;
  height: fit-content;
  @media screen and (max-width: 800px) {
    width: 90vw;
  }
`;
const StyledLabel = styled.span`
  font-size: 20px;
  margin-left: 10px;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    text-align: left;
  }
`;
const ConfirmButtonHome = styled(Button)`
  && {
    background-color: #c11b0b;
    width: 750px;
    height: 50px;
    margin-top: 10px;
    font-size: 20px;
    color: white;
    &:hover {
      background-color: #dd3226;
    }
    @media screen and (max-width: 800px) {
      width: 90%;
      margin: 10px;
      font-size: 15px;
    }
  }
`;
const CancelButtonHome = styled(Button)`
  && {
    margin-top: 10px;
    background-color: #7a7a7a;
    width: 750px;
    height: 50px;
    margin-top: 10px;
    font-size: 20px;
    color: white;
    bottom: 0;

    &:hover {
      background-color: #474747;
    }
    @media screen and (max-width: 800px) {
      width: 90%;
      margin: 10px;
      font-size: 15px;
    }
  }
`;

const RowContainer = styled.div`
  width: 750px;
  height: 60px;
  border: 1px solid #31343e;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0px;
    text-align: left;
  }
`;

export default Survey;
