import { Button, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import PlayerHeader from "../../../../Components/Layout/PlayerHeader";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";

function Annual() {
  const [confirm, setConfirm] = useState(false);
  useEffect(() => {
    setConfirm(false);
  }, []);
  return (
    <PlayerHeader>
      <Container>
        <Link href='./'>
          <BackHeader>
            <IoArrowBack style={{ color: "#67bdff", marginLeft: "5px" }} />
            <span> Back </span>
          </BackHeader>
        </Link>
        <Header>
          <h1>Kalo në abonim vjetorë</h1>
          <h4>99.90/vit. Ndalo abonimin kur të duash</h4>
          <p>
            Abonimi vjetore do të fillojë menjëherë. Abonimi aktual do të
            shtohet në fund të abonimit vjetorë.
          </p>
        </Header>
        <BlockContainer>
          <BillingHeader>
            <h5>Konfirmo mënyrën e pagesës</h5>
          </BillingHeader>
          <RowContainer>
            <BillingDetailsContainer>
              <CardContainer>
                <BsFillCreditCard2FrontFill
                  size='25px'
                  style={{ marginLeft: "10px" }}
                />

                <LogoAndPrice>
                  <span style={{ fontWeight: "bolder" }}>****7755</span>
                  <span style={{ fontSize: "10px" }}>Edon Derguti</span>
                </LogoAndPrice>
              </CardContainer>
              <Link href='./change-payment-info'>
                <ChangeContainer>
                  <span>Ndrysho</span>
                </ChangeContainer>
              </Link>
            </BillingDetailsContainer>
          </RowContainer>
          <RowContainer>
            <SecurityContainer>
              <h5>Kodi</h5>
              <FieldContainer>
                <StyledTextField
                  variant='outlined'
                  autoComplete='new-password'
                  required={true}
                  onChange={(event) => {
                    //  setConfirmationCode(event.target.value);
                  }}
                  inputProps={{
                    maxLength: 4,
                    style: {
                      color: "white",
                    },
                  }}
                  defaultValue=''
                  helperText=''
                  name='CCV'
                  placeholder='CCV'
                  id='CCV'
                />
              </FieldContainer>
            </SecurityContainer>
          </RowContainer>
        </BlockContainer>
        <BlockContainer>
          {confirm === false ? (
            <>
              <RowContainer
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <StyledButtonHome
                  onClick={() => {
                    setConfirm(true);
                  }}
                >
                  KONFIRMO
                </StyledButtonHome>
              </RowContainer>
            </>
          ) : (
            <>
              <BlockContainer>
                <p>
                  Duke klikuar "Porosit & Paguaj", do të faturoheni menjëherë
                  për periudhën e parë kontraktuale. Nëse nuk e anuloni përpara
                  përfundimit të periudhës së parë kontraktuale, abonimi juaj do
                  të rinovohet automatikisht për një periudhë tjetër
                  kontraktuale dhe ne do të tarifojmë 99,90 në mënyrën tuaj të
                  ruajtur të pagesës në mënyrë periodike. Ju mund të anuloni në
                  çdo kohë, veprim i cili futet në fuqi në fund të periudhës
                  suaj kontraktuale. Duke klikuar "Pajtohem & Vazhdo", ju
                  pranoni kushtet e marrëveshjes.
                </p>
                <RowContainer
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <StyledButtonHome
                    onClick={() => {
                      setConfirm(true);
                    }}
                  >
                    Pajtohem & Vazhdo
                  </StyledButtonHome>
                </RowContainer>
              </BlockContainer>
            </>
          )}
        </BlockContainer>
      </Container>
    </PlayerHeader>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  width: 400px;
  height: fit-content;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  h1 {
    margin: 0px;
    text-align: left;
  }
  h4 {
    margin: 10px 0 0 0;
    text-align: left;
  }
  p {
    margin: 0 0 0 0;
    text-align: left;
    font-size: 12px;
  }
`;

const BillingHeader = styled.div`
  width: 100%;
  height: fit-content;
  h5 {
    margin: 0 0 0 0;
    text-align: left;
  }
`;
const BackHeader = styled.div`
  width: 400px;
  height: fit-content;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  span {
    color: white;
    margin-left: 5px;
    font-size: 15px;
  }
`;
const BlockContainer = styled.div`
  width: 400px;
  height: fit-content;
  margin-top: 25px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    text-align: left;
  }
  h4 {
    margin: 0 0 0 0;
    text-align: left;
  }
  p {
    margin: 0 0 0 0;
    text-align: left;
    font-size: 12px;
  }
`;
const RowContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  h5 {
    margin-bottom: 0px;
  }
`;

const FieldContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BillingDetailsContainer = styled.div`
  width: 100%;
  height: 95%;
  background: #30333e;
  display: flex;
  border-radius: 3px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ChangeContainer = styled.span`
  cursor: pointer;
  margin-right: 10px;
  color: #66bcff;
  :hover {
    color: #94d0ff;
  }
`;
const LogoAndPrice = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  span {
    margin-left: 10px;
  }
`;
const CardContainer = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  img {
    margin-left: 10px;
    height: 50%;
    width: 60px;
  }
`;

const SecurityContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  h5 {
    margin-bottom: 0px;
  }
`;

const StyledTextField = styled(TextField)`
  background: #30333e;
  border-radius: 4px;
  width: 100%;

  color: white;
`;

const StyledButtonHome = styled(Button)`
  && {
    background-color: #2973d5;
    width: 100%;
    height: 60%;

    color: white;
    &:hover {
      background-color: #358eff;
    }
    @media screen and (max-width: 1400px) {
    }
  }
`;

export default Annual;
