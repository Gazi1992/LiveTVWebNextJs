import React from "react";
import styled, { keyframes } from "styled-components";
import AllChannels from "../../Components/Channels/AllChannels";
// import SwitchSelector from "react-switch-selector";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { HiViewList } from "react-icons/hi";
import { MdViewColumn } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { CgFormatSlash } from "react-icons/cg";
import { Button } from "@mui/material";

function Sidebar() {
  const [favorites, setFavorites] = useState(false);

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
      <ButtonContainer>
        <SelectorContainer>
          <StyleActiveButton
            onClick={() => {
              onChangeFav(true);
            }}
            disabled={favorites}
            checked={favorites}
          >
            <AiOutlineStar size={30} />
          </StyleActiveButton>
          <StylePassiveButton
            onClick={() => {
              onChangeFav(false);
            }}
            disabled={!favorites}
            checked={favorites}
          >
            <HiViewList size={30} />
          </StylePassiveButton>
        </SelectorContainer>
      </ButtonContainer>

      <SidebarChannelContainer>
        <AllChannels atSidebar='true' change={favorites} />
      </SidebarChannelContainer>
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
const SidebarChannelContainer = styled.div`
  width: 100%;

  height: calc(100vh - 220px);
`;
const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
`;
const StyleActiveButton = styled(Button)`
  && {
    width: 45%;
    height: 80%;
    background-color: transparent;
    background: transparent;
    border: 1px solid gray;
    color: white;
    border-radius: 4px 0px 0px 4px;
    &.Mui-disabled {
      background-color: #ebf5fd;
      color: #3f9cf3;
    }
    &:hover {
      background-color: #ebf5fd;
      background: #ebf5fd;
    }
    span {
      font-size: 10px;
    }
  }
`;

const StylePassiveButton = styled(Button)`
  && {
    width: 40%;
    height: 80%;
    background-color: transparent;
    background: transparent;
    border: 1px solid gray;
    color: white;
    border-radius: 0px 4px 4px 0px;
    &.Mui-disabled {
      background-color: #ebf5fd;
      color: #3f9cf3;
    }
    &:hover {
      background-color: #ebf5fd;
      background: #ebf5fd;
    }
    span {
      font-size: 10px;
    }
  }
`;
const ButtonContainer = styled.div`
  height: 60px;
  width: 80%;

  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  justify-content: center;
`;
const SelectorContainer = styled.div`
  width: 130px;
  height: 50px;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const moveRight = keyframes`
      0% {
        width: 150px;
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
  /* background: yellow; */
  background-image: linear-gradient(
    90deg,
    #000000 0%,
    #000000a6 60%,
    #0000ff00 90%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  overflow: scroll;
  opacity: 0;
  z-index: 2;
  height: calc(100vh - 220px);
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
    height: calc(100vh - 160px);
    opacity: 1;
  }
`;

export default Sidebar;
