import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { setPackage } from "../../../app/store/actions/others";
import { useRouter } from "next/router";
import { BiTv } from "react-icons/bi";
import PriceSelection from "../../../Components/Payment-Information/PriceSelection/PriceSelection";
import PriceSelectionBlue from "../../../Components/Payment-Information/PriceSelection/Edon";
import {
  FcMultipleSmartphones,
  FcTouchscreenSmartphone,
  FcMultipleDevices,
} from "react-icons/fc";

import Image from "next/image";
// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPackage: (data) => dispatch(setPackage(data)),
//   };
// };

const ofertat = [
  {
    name: "MOBIL",
    price: "4.99",
    priceTotal: "4.99",
    length: "1",
  },

  {
    name: "MOBIL+",
    price: "4.99",
    priceTotal: "60",
    length: "12",
  },
  {
    name: "FAMILY",
    price: "12.99",
    priceTotal: "12.99",
    length: "1",
  },
  {
    name: "FAMILY+",
    price: "9.99",
    priceTotal: "120",
    length: "12",
  },
  {
    name: "FAMILY PREMIUM",
    priceTotal: "160",
    price: "14.99",
    length: "12",
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: "100px",
  },
});

function OfferSelection(props) {
  const router = useRouter();
  // const history = useHistory();
  const finalizeOffer = (data) => {
    router.push("/Payment/Finalizeoffer");
    // props.setPackage(data);
    // history.push("/Payment/FinalizeOffer");
  };

  return (
    <Container>
      <Wrapper>
        <PriceSelection
          buttonClicked={() => {
            finalizeOffer(ofertat[0]);
          }}
          setcolor={"first"}
          offer={ofertat[0].name}
          oldPrice='6.99'
          price='4.99'
          nrikanaleve='150'
          kanaleTotal='2000'
          LiveEventscheck={"cross"}
          netflix={"cross"}
          pajisjet='1 Smartphone'
          hd={"cross"}
          size='notpreferred'
          months={ofertat[0].length + " Muaj"}
          Icon={
            <FcTouchscreenSmartphone style={{ color: "blue" }} size='medium' />
          }
          VOD='0'
        ></PriceSelection>
        <PriceSelection
          buttonClicked={() => {
            finalizeOffer(ofertat[1]);
          }}
          setcolor={"second"}
          offer={ofertat[1].name}
          oldPrice='6.99'
          price='4.99'
          nrikanaleve='150'
          kanaleTotal='2000'
          LiveEventscheck={"cross"}
          kanaletepreferuara='1'
          netflix={"cross"}
          Icon={<FcMultipleSmartphones size='medium' />}
          isBlackstate='gray'
          pajisjet='3 Smartphone'
          hd={"cross"}
          size='notpreferred'
          months={ofertat[1].length + " Muaj"}
          VOD='0'
        ></PriceSelection>
        <PriceSelection
          buttonClicked={() => {
            finalizeOffer(ofertat[2]);
          }}
          setcolor={"third"}
          offer={ofertat[2].name}
          oldPrice='18.99'
          price='12.99'
          nrikanaleve='150'
          kanaleTotal='2000'
          LiveEventscheck={"true"}
          kanaletepreferuara={true}
          isBlackstate='purple'
          LiveEventscheck={"true"}
          netflix={"true"}
          size='big'
          pajisjet='5 screens'
          hd={"true"}
          months={ofertat[2].length + " Muaj"}
          VOD='100'
          size='notpreferred'
          Icon={<FcMultipleDevices size='medium' />}
        ></PriceSelection>
        <PriceSelection
          buttonClicked={() => {
            finalizeOffer(ofertat[3]);
          }}
          setcolor={"fourth"}
          offer={ofertat[3].name}
          oldPrice='15.99'
          price='9.99'
          nrikanaleve='25'
          kanaleTotal='2000'
          LiveEventscheck={"true"}
          kanaletepreferuara={true}
          isBlackstate='purple'
          LiveEventscheck={"true"}
          netflix={"true"}
          pajisjet='5 screens'
          months={ofertat[3].length + " Muaj"}
          hd={true}
          size='preferred'
          Icon={
            <TwelveMonthsIcon>
              <FcMultipleDevices
                size='70px'
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                  opacity: "15",
                  zIndex: "2",
                }}
              />
              <img
                src='/images/rotate-arrow.svg'
                style={{
                  height: "99px",
                  color: `linear-gradient(to right, rgba(0, 224, 255, 1), rgba(0, 133, 255, 1))`,
                  position: "absolute",
                  top: "0",
                  left: "0",
                  opacity: "1",
                  zIndex: "1",
                }}
              />
            </TwelveMonthsIcon>
          }
          VOD='100'
        ></PriceSelection>
        <PriceSelection
          buttonClicked={() => {
            finalizeOffer(ofertat[4]);
          }}
          setcolor='fifth'
          offer={ofertat[4].name}
          oldPrice='19.99'
          price='14.99'
          nrikanaleve='25'
          kanaleTotal='2000'
          LiveEventscheck={true}
          kanaletepreferuara={true}
          isBlackstate='purple'
          LiveEventscheck={true}
          months={ofertat[4].length + " Muaj"}
          netflix={true}
          pajisjet='5 screens'
          size='notpreferred'
          hd={true}
          VOD='100'
          Icon={
            <TwelveMonthsIcon>
              <FcMultipleDevices
                size='80px'
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  opacity: "15",
                  zIndex: "2",
                }}
              />
              <FcMultipleDevices
                size='80px'
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                  opacity: "15",
                  zIndex: "2",
                }}
              />
            </TwelveMonthsIcon>
          }
        ></PriceSelection>
      </Wrapper>
    </Container>
  );
}

const SpecialOfferDiv = styled.div`
  width: 100%;
  height: 100%;
  background: transparent;
  position: relative;
`;
const TwelveMonthsIcon = styled.div`
  height: 100px;
  width: 100px;
  position: relative;

  z-index: 2;
  border-radius: 75px;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: linear-gradient(
    108deg,
    rgba(1, 147, 86, 1) 0%,
    rgba(10, 01, 122, 1) 100%
  ); */

  background-image: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1400px) {
    height: 100%;
  }
`;

const Wrapper = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1400px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style="stroke: none; fill:red;"></path>
  </svg>
`;

const StyledButton = styled(Button)`
  && {
    background-color: #e50e6b;
    width: 90%;
    font-weight: 20;
    color: white;
    bottom: 0;

    &:hover {
      background-color: #e50e00;
    }
  }
`;

export default OfferSelection;

// export default connect(mapStateToProps, mapDispatchToProps)(OfferSelection);
