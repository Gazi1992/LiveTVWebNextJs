import React from "react";
import styled, { keyframes } from "styled-components";
import AllChannels from "../../Components/Channels/AllChannels";
// import SwitchSelector from "react-switch-selector";
import { useState } from "react";
import { HiViewList } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

function Sidebar() {
  const [favorites, setFavorites] = useState("false");

  const options = [
    {
      label: (
        <ImageContainer>
          <HiViewList
            color={favorites === "true" ? "#c3c6d8" : "#0fd03f"}
            size={30}
          />
        </ImageContainer>
      ),
      value: "false",
      selectedBackgroundColor: "#5f6064",
    },
    {
      label: (
        <ImageContainer>
          <AiFillStar
            color={favorites === "false" ? "#c0bac9" : "#0fd03f"}
            size={30}
          />
        </ImageContainer>
      ),
      value: "true",
      selectedBackgroundColor: "#101b5c",
    },
  ];

  const onChangeFav = (newValue) => {
    setFavorites(newValue);
  };

  const initialSelected = options.findIndex(({ value }) => value === "First");

  return (
    <Container>
      <RadioButtonContainer>
        <SetFormatSelectorContainer>
          {/* <SwitchSelector
            onChange={onChangeFav}
            options={options}
            initialSelectedIndex={initialSelected}
            backgroundColor={"#353b48"}
          /> */}
        </SetFormatSelectorContainer>
      </RadioButtonContainer>
      <AllChannels atSidebar='true' change={favorites} />
    </Container>
  );
}

const RadioButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 8px;
`;
const SetFormatSelectorContainer = styled.div`
  width: 60%;
  margin: 5px;
`;
const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
`;
const moveRight = keyframes`
 0% {
        width: 100px;
        opacity: 0;
      }
      70% {
        width: 300px; 
        opacity: 0.1;
      }
      100% {
        width: 400px;
        opacity: 1;
      }
`;
const Container = styled.div`
  position: absolute;
  width: 300px;
  height: 78%;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  overflow: scroll;
  opacity: 0;
  z-index: 2;

  overflow-y: hidden;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 25px;
  }

  ::-webkit-scrollbar-track {
    background: #d1d1d4;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
  }

  :hover {
    animation: ${moveRight} 0.2s linear;
    width: 400px;
    height: 83%;
    opacity: 1;
  }
`;

export default Sidebar;
