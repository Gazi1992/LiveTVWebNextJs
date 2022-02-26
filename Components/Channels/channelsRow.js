import React from "react";
import styled from "styled-components";
import { useState } from "react";
// import _ from "lodash";
// import { connect } from "react-redux";

const mapStatetoProps = (state) => ({
  liveTVChannels: _.get(state, `liveTV_channels.data.filteredChannels`, []),
  favoriteChannels: _.get(state, `liveTV.favoriteChannels`, []),
});

const mapDispatchtoProps = (dispatch) => {
  return {};
};

function ChannelsRow({
  starState,
  logo,
  description,
  url,
  atSidebar,
  onStarPress = () => {},
  onChannelPress = () => {},
}) {
  const [isFavorite, setIsFavorite] = useState(starState);

  const imageClick = () => {
    setIsFavorite(!isFavorite);
    onStarPress();
  };

  // console.log({ description: description, isFavorite: isFavorite });

  return (
    <Container atSidebar={atSidebar}>
      <Star onClick={imageClick}>
        {starState === true ? (
          <img src='images/filled-star.svg' alt='star' />
        ) : (
          <img src='images/star.svg' alt='nostar' />
        )}
      </Star>
      <ChannelContainer
        onClick={() => {
          onChannelPress();
        }}
      >
        <Image src={logo} />
        <DescriptionContainer>
          <p>{description}</p>
        </DescriptionContainer>
      </ChannelContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  user-select: none;
  background: ${(p) => (p.atSidebar === "true" ? "transparent" : "#282632")};
  color: white;
  margin-top: 5px;
  :hover {
    background: ${(p) => (p.atSidebar === "true" ? "#282632" : "black")};
  }
`;

const ChannelContainer = styled.div`
  height: 100%;
  width: ${(p) => (p.atSidebar === "true" ? "85%" : "80%")};
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Star = styled.div`
  height: 100%;
  width: ${(p) => (p.atSidebar === "true" ? "15%" : "20%")};
  display: flex;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  img {
    height: 25px;
    width: 25px;
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 40px;
  height: 80%;
  position: relative;
`;

const DescriptionContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
  width: 50%;
  height: 100%;

  text-align: left;

  p {
    font-size: 15px;
  }
`;
export default ChannelsRow;
// export default connect(mapStatetoProps, mapDispatchtoProps)(ChannelsRow);
