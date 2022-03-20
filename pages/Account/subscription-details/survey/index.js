import React from "react";
import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { IoArrowBack } from "react-icons/io5";
import PlayerHeader from "../../../../Components/Layout/PlayerHeader";
import { Button } from "@material-ui/core";
import Link from "next/link";
const style = {
  marginLeft: "10px",
  color: "#6c7489",
};
function Survey() {
  return (
    <PlayerHeader>
      <Container>
        <Link href='./'>
          <Header>
            <IoArrowBack style={{ color: "#67bdff", marginLeft: "5px" }} />
            <span> Back</span>
          </Header>
        </Link>

        <Wrapper>
          <RowContainer style={{ border: "0px" }}>
            <h2>Arsyeja pse deshironi të anuloni abonimin?</h2>
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
                        Shumë shtrenjtë, momentalisht nuk mund ta përballojë
                        financiarisht.
                      </StyledLabel>
                    }
                  />
                </RowContainer>
                <RowContainer>
                  <FormControlLabel
                    value='2'
                    control={<Radio sx={style} />}
                    label={<StyledLabel>Nuk funksionon si duhet.</StyledLabel>}
                  />
                </RowContainer>
                <RowContainer>
                  <FormControlLabel
                    value='3'
                    control={<Radio sx={style} />}
                    label={
                      <StyledLabel>Videoja bllokohet dhe ndalet.</StyledLabel>
                    }
                  />
                </RowContainer>
                <RowContainer>
                  <FormControlLabel
                    value='4'
                    control={<Radio sx={style} />}
                    label={
                      <StyledLabel>
                        Nuk e gjeta emisionin, filmin, apo kontentin që kerkova.
                      </StyledLabel>
                    }
                  />
                </RowContainer>
                <RowContainer>
                  <FormControlLabel
                    value='5'
                    control={<Radio sx={style} />}
                    label={<StyledLabel>Vështirësi në navigim.</StyledLabel>}
                  />
                </RowContainer>
                <RowContainer>
                  <FormControlLabel
                    value='6'
                    control={<Radio sx={style} />}
                    label={<StyledLabel>Probleme me pagesën.</StyledLabel>}
                  />
                </RowContainer>

                <RowContainer>
                  <FormControlLabel
                    value='7'
                    control={<Radio sx={style} />}
                    label={
                      <StyledLabel>
                        Më pëlqen dhe do ta perdorë nje platformë tjetër.
                      </StyledLabel>
                    }
                  />
                </RowContainer>

                <RowContainer>
                  <FormControlLabel
                    value='9'
                    control={<Radio sx={style} />}
                    label={<StyledLabel>Arsyje tjetër</StyledLabel>}
                  />
                </RowContainer>
              </Wrapper>
            </RadioGroup>
          </FormControl>
        </Wrapper>
        <Link href='./'>
          <ConfirmButtonHome>Konfirmo anulimin.</ConfirmButtonHome>
        </Link>
        <Link href='./'>
          <CancelButtonHome>Dil</CancelButtonHome>
        </Link>
      </Container>
    </PlayerHeader>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
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
  font-size: 16px;
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
    font-size: 16px;
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
    font-size: 16px;
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
