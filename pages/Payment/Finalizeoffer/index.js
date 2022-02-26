import React from "react";
import Button from "@material-ui/core/Button";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import {
  Visa,
  Mastercard,
  Maestro,
  Klarna,
  PaypalTransparent,
} from "react-pay-icons";
import styled from "styled-components";

import {
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Checkbox,
} from "@mui/material";
import { TiPlusOutline, TiMinusOutline } from "react-icons/ti";
// import { connect } from "react-redux";
// import _ from "lodash";

// const mapStateToProps = (state) => ({
//   Oferta: _.get(state, `others.package`, {}),
// });

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

function FinalizeOffer({ BlejButton, stateChanger, ...props }) {
  // const history = useHistory();
  const [value, setValue] = React.useState("");
  const [shto, setShto] = React.useState(true);

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
      <Description>
        <Offer>
          <h1>"props.Oferta.name"</h1>
          <h2>
            " props.Oferta.price"<span>€ /"props.Oferta.time" Muaj</span>
          </h2>
        </Offer>
        <Information>
          <p>Faza testuese perfundon pas nje jave me xx.xx.20xx</p>
          <p>
            Pagesa tjeter "props.Oferta.price" €/ "props.Oferta.time" Muaj behet
            me xx.xx.20xx
          </p>
        </Information>
      </Description>
      <AdditionalProducts>
        <ChromeCastIcon>
          <img src='/images/streamingdevice.jpg' />
        </ChromeCastIcon>
        <Chromacastname>Google Chromecast</Chromacastname>
        <PriceFields>
          {<h2>39.99€</h2>}
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
        <h1>Total</h1>{" "}
        {shto === true ? (
          <></>
        ) : (
          <>
            <TotalDescription>
              <h4>Shtesat</h4>
              <h3>39.99 €</h3>
            </TotalDescription>
            <h3>+</h3>

            <TotalDescription>
              <h4>Abonimi</h4>
              <h3>"props.Oferta.priceTotal" €</h3>
            </TotalDescription>
          </>
        )}
        {shto === true ? (
          <>
            <TotalDescription>
              <Headerthree>
                {/* <h3>{parseFloat("props.Oferta.priceTotal", 10)}€</h3> */}
              </Headerthree>
            </TotalDescription>
          </>
        ) : (
          <>
            <h3>=</h3>
            <TotalDescription>
              <Headerthree>
                <h3>
                  {/* {parseFloat(
                    Math.round("props.Oferta.priceTotal" * 100) / 100 + 39.99,
                    10
                  ).toFixed(2)} */}
                  €
                </h3>
              </Headerthree>
            </TotalDescription>
          </>
        )}
      </Total>
      <PaymentMethodIntro>
        <h1>Mënyra e pagesës </h1>
      </PaymentMethodIntro>

      <FormControl component='fieldset'>
        <RadioGroup
          name='controlled-radio-buttons-group'
          value={value}
          onChange={handleChange}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SelectPaymentMethod>
            <CreditCardContainer>
              <FormControlLabel
                value='Credit Card'
                control={<Radio />}
                label='Credit Card'
                style={{ marginLeft: "5px" }}
              />
              <CardContainer>
                <StyledVisa />
                <StyledMastercard />
                <StyledMaestro />
                <StyledKlarna />
              </CardContainer>
            </CreditCardContainer>
            <PayPalContainer>
              <FormControlLabel
                value='PayPal'
                control={<Radio />}
                label='PayPal'
                style={{ marginLeft: "5px" }}
              />
              <CardContainer>
                <StyledPaypal />
              </CardContainer>
            </PayPalContainer>
          </SelectPaymentMethod>
        </RadioGroup>
        <TermsContainer>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={checkChange}
                inputProps={{ "aria-label": "controlled" }}
                boxColor='white'
              />
            }
            label={
              <StyledLabel>
                {"I agree to Air TV terms and conditions"}
              </StyledLabel>
            }
          />
        </TermsContainer>
      </FormControl>
      <StyledButton onClick={BlejButton} disabled={!checked || !value}>
        Blej
      </StyledButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
  background: #031224; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #031224,
    #0f2847
  ); /* Chrome 10-25, Safari 5.1-6 */
  background-image: linear-gradient(
    to right bottom,
    #121f3e,
    #1b2b4c,
    #24375b,
    #2c436a,
    #35507a
  );
  @media screen and (max-width: 800px) {
    height: 100%;
    width: 100%;
  }
`;

const StyledPlus = styled(TiPlusOutline)`
  height: 30px;
`;
const StyledMinus = styled(TiMinusOutline)`
  height: 30px;
`;
const StyledVisa = styled(Visa)`
  height: 40px;
  @media screen and (max-width: 500px) {
    height: 25px;
    width: auto;
  }
`;
const StyledMastercard = styled(Mastercard)`
  height: 40px;
  @media screen and (max-width: 500px) {
    height: 25px;
    width: auto;
  }
`;
const StyledMaestro = styled(Maestro)`
  height: 40px;
  @media screen and (max-width: 500px) {
    height: 25px;
    width: auto;
  }
`;
const StyledKlarna = styled(Klarna)`
  height: 40px;
  @media screen and (max-width: 500px) {
    height: 25px;
    width: auto;
    margin-right: 5px;
  }
`;

const StyledPaypal = styled(PaypalTransparent)`
  height: 40px;
  @media screen and (max-width: 500px) {
    height: 25px;
    width: auto;
    margin-right: 5px;
  }
`;
const StyleButton = styled(Button)`
  && {
    background-color: #0063e5;
    width: 100%;
    height: 100%;
    color: white;
    border: 1px solid black;
    &:hover {
      background-color: #0483ee;
    }
    h2 {
      margin: 0px;
      @media screen and (min-width: 400px) and (max-width: 800px) {
        font-size: 15px;
      }
    }
    @media screen and (max-width: 400px) {
      width: 100%;
      height: 30px;
      margin: 0px;
    }
  }
`;

const StyledLabel = styled.span`
  font-size: 20px;
  @media screen and (max-width: 800px) {
    font-size: 10px;
  }
`;

const TotalDescription = styled.div`
  height: 100%;
  width: 20%;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-weight: 10;
    margin-top: -5px;
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
    margin-top: 45px;
    margin-right: 15px;
    color: #e50e6b;
    @media screen and (max-width: 800px) {
      font-size: 20px;
      margin-top: 20px;
    }
  }
`;
const Description = styled.div`
  margin-top: 100px;
  width: 800px;
  height: 110px;
  background-color: #00253f;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
const Chromacastname = styled.h2`
  font-size: 20px;
  font-weight: 2;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Offer = styled.div`
  margin-left: 10px;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
  line-height: 0px;
  h1 {
    font-size: 35px;
    font-weight: 10;
    color: #5fffe0;
    @media screen and (max-width: 800px) {
      font-size: 25px;
    }
  }
  h2 {
    font-size: 22px;
    font-weight: 10;
    color: white;
    @media screen and (max-width: 800px) {
      font-size: 16px;
    }
  }
`;
const Total = styled.div`
  margin-top: 10px;
  width: 800px;
  height: 85px;
  background-color: #00253f;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
  align-items: center;
  justify-content: space-between;
  h1 {
    color: #5fffe0;
    margin-left: 35px;
    @media screen and (max-width: 800px) {
      font-size: 22px;
      margin-left: 10px;
    }
  }
`;
const AdditionalProducts = styled.div`
  margin-top: 10px;
  width: 800px;
  height: 110px;
  background-color: #00253f;
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: flex-start;
  @media screen and (max-width: 800px) {
    width: 80%;
    justify-content: space-between;
  }
`;

const ChromeCastIcon = styled.div`
  width: 20%;
  height: 100%;
  background: #00253f;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  @media screen and (max-width: 800px) {
    width: 120px;
  }
  img {
    border-radius: 5px;
    max-height: 90%;
    margin-left: 30px;
    @media screen and (max-width: 800px) {
      margin-left: 10px;
    }
  }
`;
const PriceFields = styled.div`
  width: 80%;
  height: 100%;
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 400px) and (max-width: 800px) {
    width: 60%;
  }
  @media screen and (max-width: 400px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  h2 {
    margin-left: 35px;
    @media screen and (min-width: 400px) and (max-width: 800px) {
      font-size: 15px;
      margin-left: 15px;
    }
    @media screen and (max-width: 400px) {
      font-size: 15px;
      margin: 10px;
    }
  }
`;
const AddButtonIcon = styled.div`
  width: 50%;
  height: 40%;
  background: #00253f;
  margin-right: 90px;
  cursor: pointer;
  display: flex;
  margin-left: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 400px) and (max-width: 800px) {
    width: 100%;
    margin-right: 10px;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    margin: 00px;
  }
`;
const Information = styled.div`
  width: 60%;
  height: 100%;
  background-color: #00253f;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-size: 12px;
    @media screen and (max-width: 800px) {
      font-size: 10px;
      margin-right: 5px;
    }
  }
`;

const PaymentMethodIntro = styled.div`
  margin-top: 20px;
  h1 {
    font-weight: 10;
  }
`;

const SelectPaymentMethod = styled.div`
  width: 600px;
  height: 110px;
  background-color: transparent;

  @media screen and (max-width: 800px) {
    width: 80vw;
  }
`;

const CreditCardContainer = styled.div`
  width: 100%;
  height: 50%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid lightgray;

  color: black;
  align-items: center;
`;
const CardContainer = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: 10px;
  align-items: center;

  @media screen and (max-width: 800px) {
    width: fit-content;
  }
`;
const PayPalContainer = styled.div`
  width: 100%;
  height: 50%;
  color: black;
  background-color: white;
  border: 2px solid lightgray;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TermsContainer = styled.div`
  width: 600px;
  height: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #e50e6b;
    width: 300px;
    height: 40px;
    font-weight: 40px;
    font-size: 20px;
    color: white;
    bottom: 0;
    margin-bottom: 50px;
    &:hover {
      background-color: #e50e00;
    }
    @media screen and (max-width: 800px) {
      width: 200px;
    }
  }
`;

export default FinalizeOffer;
// export default connect(mapStateToProps, mapDispatchToProps)(FinalizeOffer);
