import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import PriceSelection from "../../../Components/Payment-Information/PriceSelection/PriceSelection";
import {
  FcMultipleSmartphones,
  FcTouchscreenSmartphone,
  FcMultipleDevices,
} from "react-icons/fc";

const ofertat = [
  {
    name: "MOBIL",
    price: "4.99",
    priceTotal: "4.99",
    length: "1",
    duration: "muaj",
    oldPrice: "6.99",
  },

  {
    name: "FAMILY",
    price: "12.99",
    priceTotal: "12.99",
    length: "1",
    duration: "muaj",
    oldPrice: "18.99",
  },
  {
    name: "FAMILY+",
    price: "9.99",
    priceTotal: "120",
    length: "12",
    duration: "vit",
    oldPrice: "14.99",
  },
  {
    name: "FAMILY PREMIUM",
    priceTotal: "160",
    price: "14.99",
    length: "12",
    duration: "vit",
    oldPrice: "20.99",
  },
];

function OfferSelection(props) {
  const router = useRouter();

  const finalizeOffer = (data) => {
    router.push({
      pathname: "/Payment/Finalizeoffer",
      query: { detail: JSON.stringify(data) },
    });
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
          oldPrice={ofertat[0].oldPrice}
          price={ofertat[0].price}
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
          oldPrice={ofertat[1].oldPrice}
          price={ofertat[1].price}
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
          oldPrice={ofertat[2].oldPrice}
          price={ofertat[2].price}
          nrikanaleve='150'
          kanaleTotal='2000'
          LiveEventscheck={"true"}
          kanaletepreferuara={true}
          isBlackstate='purple'
          netflix={"true"}
          pajisjet='5 screens'
          hd={"true"}
          months={ofertat[2].length + " Muaj"}
          VOD='100'
          size='preferred'
          Icon={<FcMultipleDevices size='medium' />}
        ></PriceSelection>
        <PriceSelection
          buttonClicked={() => {
            finalizeOffer(ofertat[3]);
          }}
          setcolor={"fourth"}
          offer={ofertat[3].name}
          oldPrice={ofertat[3].oldPrice}
          price={ofertat[3].price}
          nrikanaleve='25'
          kanaleTotal='2000'
          LiveEventscheck={"true"}
          kanaletepreferuara={true}
          isBlackstate='purple'
          netflix={"true"}
          pajisjet='5 screens'
          months={ofertat[3].length + " Muaj"}
          hd={true}
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
      </Wrapper>
    </Container>
  );
}

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
`;

export default OfferSelection;

// export default connect(mapStateToProps, mapDispatchToProps)(OfferSelection);
