import React from "react";
import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import PlayerHeader from "../../../../Components/Layout/PlayerHeader";
import { setPackage } from "../../../../app/store/actions/others";
import CardForPackage from "../../../../Components/LiveTV-Components/Account/Changes/Payment-Cards/PriceSelection/CardForPackage";
import { StyledEngineProvider } from "@mui/material/styles";
// import { connect } from "react-redux";
import ConfirmDialog from "../../../../Components/LiveTV-Components/Account/Changes/Payment-Cards/PriceSelection/ConfirmDialog";

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

function Plan(props) {
  const finalizeOffer = (data) => {
    props.setPackage(data);
    // history.push("/Payment/FinalizeOffer");
  };
  return (
    <PlayerHeader>
      <Container>
        <CardContainer>
          <CardForPackage
            buttonClicked={() => {
              finalizeOffer(ofertat[0]);
            }}
            setcolor={"first"}
            offer={ofertat[0].name}
            oldPrice={ofertat[0].oldPrice}
            price={ofertat[0].price}
            nrikanaleve='250'
            kanaleTotal='2000'
            currentPlan='false'
            LiveEventscheck={"cross"}
            kanaletepreferuara='1'
            netflix={"cross"}
            isBlackstate='gray'
            pajisjet='1 Smartphone'
            hd={"cross"}
            setBackground={"red"}
            size='small'
            months={ofertat[0].length + " Muaj"}
          />

          <CardForPackage
            buttonClicked={() => {
              finalizeOffer(ofertat[1]);
            }}
            setcolor={"second"}
            offer={ofertat[1].name}
            oldPrice={ofertat[1].oldPrice}
            price={ofertat[1].price}
            currentPlan='false'
            setBackground={"yellow"}
            nrikanaleve='250'
            kanaleTotal='2000'
            LiveEventscheck={"cross"}
            kanaletepreferuara='1'
            netflix={"cross"}
            isBlackstate='gray'
            pajisjet='3 Pajisje'
            hd={"cross"}
            size='small'
            months={ofertat[1].length + " Muaj"}
            VOD='0'
          />
          <CardForPackage
            buttonClicked={() => {
              finalizeOffer(ofertat[2]);
            }}
            setcolor={"third"}
            offer={ofertat[2].name}
            oldPrice={ofertat[2].oldPrice}
            price={ofertat[2].price}
            nrikanaleve='250'
            setBackground={"green"}
            kanaleTotal='2000'
            LiveEventscheck={"true"}
            kanaletepreferuara={true}
            isBlackstate='purple'
            currentPlan='true'
            netflix={"true"}
            size='big'
            pajisjet='3 Pajisje'
            hd={"true"}
            months={ofertat[2].length + " Muaj"}
            VOD='100'
          />
          <CardForPackage
            buttonClicked={() => {
              finalizeOffer(ofertat[3]);
            }}
            setcolor={"fourth"}
            offer={ofertat[3].name}
            oldPrice={ofertat[3].oldPrice}
            price={ofertat[3].price}
            currentPlan='false'
            nrikanaleve='250'
            setBackground={"blue"}
            kanaleTotal='2000'
            LiveEventscheck={"true"}
            kanaletepreferuara={true}
            isBlackstate='purple'
            netflix={"true"}
            pajisjet='5 Pajisje'
            months={ofertat[3].length + " Muaj"}
            hd={true}
            size='preferred'
          />
        </CardContainer>
      </Container>
    </PlayerHeader>
  );
}

const Container = styled.div`
  width: 100%;
  /* height: calc(100vh - 100px); */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1400px) {
    height: 100%;
  }
`;

const CardContainer = styled.div`
  width: 100vw;
  height: fit-content;
  margin-top: 20px;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  @media screen and (max-width: 1400px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 80px;
  }
`;

const BlockHeaderContainer = styled.div`
  width: 100%;
  height: 30px;
  background: #31343e;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const RowContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #31343e;
  border-right: 1px solid #31343e;
  border-left: 1px solid #31343e;
`;

const DateContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  span {
    margin-left: 10px;
    word-wrap: normal;
  }
`;
const DescriptionContainer = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const TotalContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  span {
    margin-right: 10px;
  }
`;

export default Plan;
