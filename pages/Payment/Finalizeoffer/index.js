import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "../../../Components/Payment-Information/Card/Card";

import styled from "styled-components";
import Image from "next/image";
import { Stream } from "@styled-icons/material/Stream";
import { TiPlusOutline, TiMinusOutline } from "react-icons/ti";
import { withRouter } from "next/router";

const StreamStyled = styled(Stream)`
  height: 70%;
  color: black;
  @media screen and (max-width: 400px) {
    height: 100%;
    width: 100%;
  }
`;
function FinalizeOffer({ BlejButton, stateChanger, ...props }) {
  const [value, setValue] = React.useState("");
  const [shto, setShto] = React.useState(true);
  const [pack, setPack] = React.useState({});

  useEffect(() => {
    setPack(JSON.parse(props.router.query.detail));
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    stateChanger(value);
  };
  const DevicePrice = 39.99;
  const Shto = () => {
    setShto(!shto);
  };

  const [checked, setChecked] = React.useState(false);

  const checkChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container>
      <Wrapper>
        <Description>
          <Header>
            <h1>Abononhu në AirTV {pack.name}</h1>
          </Header>
          <Offer>
            <h1>{pack.priceTotal}</h1>
            <MuajContainer>
              <span> /{pack.duration}</span>
            </MuajContainer>
          </Offer>
        </Description>
        <AdditionalProducts>
          <ChromeCastIcon>
            <StreamStyled />
          </ChromeCastIcon>
          <Chromacastname>AirTV</Chromacastname>
          <PriceFields>{<h1>{pack.priceTotal}€</h1>}</PriceFields>
        </AdditionalProducts>
        <AdditionalProducts>
          <ChromeCastIcon>
            <Image
              src='/images/streamingdevice.jpg'
              width={"150px"}
              height={"150px"}
            />
          </ChromeCastIcon>

          <Chromacastname>Google Chromecast</Chromacastname>
          <PriceFields>
            {<h1>39.99€</h1>}
            <AddButtonIcon onClick={Shto}>
              {shto === true ? (
                <StyleButton>
                  <h2>Shto</h2>
                  <StyledPlus />
                </StyleButton>
              ) : (
                <StyleButton>
                  <h2>Largo</h2>
                  <StyledMinus />
                </StyleButton>
              )}
            </AddButtonIcon>
          </PriceFields>
        </AdditionalProducts>
        <Total>
          <ChromeCastIcon>
            <h1>Total</h1>
          </ChromeCastIcon>
          {shto === true ? (
            <>
              <TotalDescription>
                <Headerthree>
                  <h3>{parseFloat(pack.priceTotal, 10)}€</h3>
                </Headerthree>
              </TotalDescription>
            </>
          ) : (
            <>
              <TotalDescription>
                <Headerthree>
                  <h3>
                    {parseFloat(
                      Math.round(pack.priceTotal * 100) / 100 + 39.99,
                      10
                    ).toFixed(2)}
                    €
                  </h3>
                </Headerthree>
              </TotalDescription>
            </>
          )}
        </Total>
      </Wrapper>
      <CardWrapper>
        <Card />
      </CardWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;

  background: white; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #031224,
    #0f2847
  ); /* Chrome 10-25, Safari 5.1-6 */

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100vw;
  }
  @media screen and (max-width: 800px) {
    height: 100%;
    width: 100%;
  }
`;
const Header = styled.div`
  height: fit-content;
  width: fit-content;

  h1 {
    color: rgba(26, 26, 26, 0.9);
    font-size: 36px;
    font-weight: 300;
    margin: 0px;
  }
`;
const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  background: white;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 800px) {
    font-size: 15px;
  }
`;
const CardWrapper = styled.div`
  box-shadow: -10px 0px 100px -90px #000000;
  width: 30%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: 100vw;
    height: 100%;
    margin: 30px;
    box-shadow: 0px 0px 0px 0px #000000;
  }
`;

const StyledPlus = styled(TiPlusOutline)`
  height: 30px;
`;
const StyledMinus = styled(TiMinusOutline)`
  height: 30px;
`;

const StyleButton = styled(Button)`
  && {
    background-color: white;
    width: 100%;
    height: 100%;
    color: rgba(26, 26, 26, 0.9);
    font-size: 12px;
    border: 1px solid #c3c3c3;
    &:hover {
      border: 1px solid #9bb5ee;
      background-color: #e8e8e8;
    }
    h2 {
      margin: 0px;
    }
  }
`;

const TotalDescription = styled.div`
  height: 100%;
  width: 150px;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 400px) and (max-width: 800px) {
    width: 40%;
  }
  @media screen and (max-width: 400px) {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h3 {
    font-weight: 100;

    @media screen and (max-width: 800px) {
      font-size: 15px;
    }
  }
  h4 {
    font-weight: 10;
    @media screen and (max-width: 800px) {
      font-size: 15px;
    }
  }
`;
const Headerthree = styled.div`
  h3 {
    font-size: 40px;

    color: #e50e6b;
    @media screen and (max-width: 800px) {
      font-size: 20px;
    }
  }
`;
const Description = styled.div`
  margin-top: 150px;
  margin-bottom: 50px;
  width: 70%;
  height: fit-content;

  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 80%;
    margin-top: 50px;
    margin-bottom: 20px;
  }
  color: black;
`;
const Chromacastname = styled.h2`
  margin: 0px;
  font-size: 20px;
  font-weight: 2;

  @media screen and (max-width: 1400px) {
    font-size: 15px;
  }
  @media screen and (max-width: 870px) {
    display: none;
    font-size: 15px;
  }
`;

const MuajContainer = styled.div`
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  span {
    font-size: 25px;
    font-weight: 200;
    margin-top: 15px;
    color: rgba(26, 26, 26, 0.7);
  }
`;
const Offer = styled.div`
  margin-top: 20px;
  width: 100%;

  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  line-height: 0px;
  h1 {
    margin: 0px;
    font-size: 56px;
    font-weight: 600;
    color: rgba(26, 26, 26, 0.9);
    @media screen and (max-width: 800px) {
    }
  }
  h2 {
    font-size: 22px;
    font-weight: 10;
    color: black;
    @media screen and (max-width: 800px) {
      font-size: 16px;
    }
    span {
      font-size: 16px;
      font-weight: 300;
    }
  }
`;
const Total = styled.div`
  margin-top: 10px;
  width: 70%;
  height: 85px;
  background: white;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
  align-items: center;
  justify-content: space-between;
  h1 {
    color: #5fffe0;

    @media screen and (max-width: 800px) {
      font-size: 22px;
    }
  }
`;
const AdditionalProducts = styled.div`
  margin-top: 10px;
  width: 70%;
  height: 150px;

  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #a6f6f6;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    width: 80%;
    justify-content: space-between;
  }
`;

const ChromeCastIcon = styled.div`
  width: 150px;
  height: 100%;

  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    border-radius: 5px;
    max-height: 90%;

    /* @media screen and (max-width: 800px) {
      margin-left: 10px;
    } */
  }
  @media screen and (max-width: 800px) {
    width: 40%;
  }
`;
const PriceFields = styled.div`
  width: 150px;
  height: 100%;
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 400px) and (max-width: 800px) {
    width: 40%;
  }
  @media screen and (max-width: 400px) {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h1 {
    margin: 0px;
    font-size: 25px;
    font-weight: 600;
    color: rgba(26, 26, 26, 0.9);
    @media screen and (max-width: 800px) {
      font-size: 20px;
    }
  }
  h2 {
    margin: 0px;
    @media screen and (min-width: 400px) and (max-width: 800px) {
      font-size: 15px;
    }
    @media screen and (max-width: 400px) {
      font-size: 15px;
    }
  }
`;
const AddButtonIcon = styled.div`
  width: 150px;
  height: 40px;
  background-color: transparent;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  margin-left: 0px;
  flex-direction: row;
  align-items: center;

  justify-content: center;
  @media screen and (min-width: 400px) and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export default withRouter(FinalizeOffer);
// export default connect(mapStateToProps, mapDispatchToProps)(FinalizeOffer);
