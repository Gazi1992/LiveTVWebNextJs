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
    name: "Mobil",
    price: "4.99",
    priceTotal: "4.99",
    length: "1",
  },

  {
    name: "Mobil+",
    price: "4.99",
    priceTotal: "60",
    length: "12",
  },
  {
    name: "Family",
    price: "12.99",
    priceTotal: "12.99",
    length: "1",
  },
  {
    name: "Family+",
    price: "9.99",
    priceTotal: "120",
    length: "12",
  },
  {
    name: "Family Premium",
    priceTotal: "160",
    price: "14.99",
    length: "12",
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
            oldPrice='6.99'
            price='4.99'
            nrikanaleve='150'
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
            oldPrice='6.99'
            price='4.99'
            currentPlan='false'
            setBackground={"yellow"}
            nrikanaleve='150'
            kanaleTotal='2000'
            LiveEventscheck={"cross"}
            kanaletepreferuara='1'
            netflix={"cross"}
            isBlackstate='gray'
            pajisjet='3 Smartphone'
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
            oldPrice='18.99'
            price='12.99'
            nrikanaleve='150'
            setBackground={"green"}
            kanaleTotal='2000'
            LiveEventscheck={"true"}
            kanaletepreferuara={true}
            isBlackstate='purple'
            currentPlan='true'
            LiveEventscheck={"true"}
            netflix={"true"}
            size='big'
            pajisjet='5 screens'
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
            oldPrice='15.99'
            price='9.99'
            currentPlan='false'
            nrikanaleve='25'
            setBackground={"blue"}
            kanaleTotal='2000'
            LiveEventscheck={"true"}
            kanaletepreferuara={true}
            isBlackstate='purple'
            LiveEventscheck={"true"}
            netflix={"true"}
            size='big'
            pajisjet='5 screens'
            months={ofertat[3].length + " Muaj"}
            hd={true}
            size='preferred'
          />
          <CardForPackage
            buttonClicked={() => {
              finalizeOffer(ofertat[4]);
            }}
            setcolor='fifth'
            offer={ofertat[4].name}
            oldPrice='19.99'
            price='14.99'
            currentPlan='false'
            nrikanaleve='25'
            kanaleTotal='2000'
            LiveEventscheck={true}
            kanaletepreferuara={true}
            isBlackstate='purple'
            LiveEventscheck={true}
            months={ofertat[4].length + " Muaj"}
            netflix={true}
            pajisjet='5 screens'
            hd={true}
            VOD='100'
          />
        </CardContainer>
      </Container>
    </PlayerHeader>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 100px);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
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
