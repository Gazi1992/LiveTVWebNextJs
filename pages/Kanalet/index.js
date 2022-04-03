import React, { useEffect } from "react";
import styled from "styled-components";
import AllChannels from "../../Components/Channels/AllChannels";
import PlayerHeader from "../../Components/Layout/PlayerHeader";
import Slider from "../../Components/Channels/Slider";
import { HiViewList } from "react-icons/hi";
import { MdViewColumn } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { CgFormatSlash } from "react-icons/cg";
import { Button } from "@mui/material";
import _ from "lodash";

function Kanalet(props) {
  const [format, setFormat] = React.useState(true);
  const [favorites, setFavorites] = React.useState(false);
  console.log(props.channels);

  const onChange = (newValue) => {
    setFormat(newValue);
  };

  const onChangeFav = (newValue) => {
    setFavorites(newValue);
  };

  return (
    <PlayerHeader>
      <Container>
        <SetFormat>
          <SetFavorites>
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
                <HiViewList size={20} />
                <CgFormatSlash size={25} />
                <MdViewColumn size={20} />
              </StylePassiveButton>
            </SelectorContainer>
          </SetFavorites>
          <SelectorContainer>
            <StyleActiveButton
              onClick={() => {
                onChange(false);
              }}
              checked={favorites}
            >
              <MdViewColumn size={30} />
            </StyleActiveButton>
            <StylePassiveButton
              onClick={() => {
                onChange(true);
              }}
              checked={favorites}
            >
              <HiViewList size={30} />
            </StylePassiveButton>
          </SelectorContainer>
        </SetFormat>
        {format === true ? (
          <AllChannelsWrapper>
            <AllChannels change={favorites} />
          </AllChannelsWrapper>
        ) : (
          <SliderWrapper>
            <Slider change={favorites} />
          </SliderWrapper>
        )}
      </Container>
    </PlayerHeader>
  );
}

const SetFormat = styled.div`
  margin-top: 80px;
  height: 100px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const SetFavorites = styled.div`
  height: 100px;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SelectorContainer = styled.div`
  margin-right: 50px;
  width: 120px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyleActiveButton = styled(Button)`
  && {
    width: 40%;
    height: 90%;
    background-color: transparent;
    background: transparent;
    border: 1px solid gray;
    color: white;
    border-radius: 4px 0px 0px 4px;
    &.Mui-disabled {
      background-color: #444444;
      color: white;
    }
    &:hover {
      background-color: #444444;
      background: #444444;
    }
    span {
      font-size: 10px;
    }
  }
`;

const AllChannelsWrapper = styled.div`
  height: calc(100vh - 180px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SliderWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StylePassiveButton = styled(Button)`
  && {
    width: 40%;
    height: 90%;
    background-color: transparent;
    background: transparent;
    border: 1px solid gray;
    color: white;
    border-radius: 0px 4px 4px 0px;
    &.Mui-disabled {
      background-color: #444444;
      color: white;
    }
    &:hover {
      background-color: #444444;
      background: #444444;
    }
    span {
      font-size: 10px;
    }
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
`;
export default Kanalet;
