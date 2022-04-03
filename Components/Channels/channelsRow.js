import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { connect } from "react-redux";
import { channels_toggleFavorite, user_get } from "../../app/store/actions/api";

const mapStatetoProps = (state) => ({});

const mapDispatchtoProps = (dispatch) => {
  return {
    getUser: () => dispatch(user_get()),
    toggleFavoriteChannel: (channelId, onSuccess) =>
      dispatch(channels_toggleFavorite(channelId, onSuccess)),
  };
};

function ChannelsRow({
  id,
  starState,
  logo,
  description,
  url,
  atSidebar,
  onChannelPress = () => {},
  ...props
}) {
  const [isFavorite, setIsFavorite] = useState(starState);

  const imageClick = () => {
    console.log("clicked");
    setIsFavorite(!isFavorite);
    onStarPress();
  };

  const onStarPress = () => {
    props.toggleFavoriteChannel(id, () => props.getUser());
    setIsFavorite(!isFavorite);
  };
  return (
    <Container atSidebar={atSidebar}>
      <Star onClick={imageClick}>
        {isFavorite === true ? (
          //
          <AiOutlineStar size='15px' />
        ) : (
          <AiOutlineStar size='25px' />
          // <Image src='/images/star.svg' alt='nostar' width={25} height={25} />
        )}
      </Star>
      <ChannelContainer
        onClick={() => {
          onChannelPress();
        }}
      >
        <ImageContainer src={logo} />
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
  user-select: none;
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
  cursor: pointer;
  img {
    height: 25px;
    width: 25px;
  }
`;

const ImageContainer = styled.img`
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
// export default ChannelsRow;
export default connect(mapStatetoProps, mapDispatchtoProps)(ChannelsRow);
