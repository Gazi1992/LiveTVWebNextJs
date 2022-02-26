import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import _ from "lodash";
import styled from "styled-components";
import Column from "./Column";
import Link from "next/link";

import { setChannelPlaying, getChannels } from "../../app/store/actions/liveTV";
import { connect } from "react-redux";
import { wrapper } from "../../app/store";
import { bindActionCreators } from "redux";

// export const getServerSideProps = wrapper.getServerSideProps((store) => () => {
//   store.dispatch(getChannels());
// });

const mapStatetoProps = (state) => ({
  channelsfromJSON: _.get(state, `liveTV.channels`, []),
  favoriteChannels: _.get(state, `liveTV.favoriteChannels`, []),
});

const mapDispatchtoProps = (dispatch) => {
  return {
    setChannelPlaying: (data) => dispatch(setChannelPlaying(data)),
    getChannels: bindActionCreators(getChannels, dispatch),
  };
};

function Slider({ kanalet, change, ...props }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [channels, setChannels] = useState([]);
  const [initialValue, setInitialValue] = useState(0);

  useEffect(() => {
    if (change === true) {
      setChannels(props.favoriteChannels);
    } else {
      // console.log(props.liveTVChannels.Albania);
      setChannels(kanalet);
    }
  }, [change]);

  const increaseValue = (value) => {
    setInitialValue(value + 1);
  };
  const decreaseValue = (value) => {
    setInitialValue(value - 1);
  };
  const increasePage = (active) => {
    var test = Math.ceil(channels.length / 6);
    if (active === test - 1) {
    } else {
      console.log(channels.length);
      setActiveSlide(active + 1);
      increaseValue(active);
    }
  };

  const decreasePage = (active) => {
    if (active < 1) {
      active = 1;
    }
    decreaseValue(active);
    setActiveSlide(active - 1);
    console.log(active);
  };

  return (
    <Container>
      <BackButtonWrapper>
        <ArrowBtn
          type='left'
          onClick={() => {
            decreasePage(activeSlide);
          }}
        />
      </BackButtonWrapper>
      <ContentContainer>
        {channels
          .slice(initialValue * 6, (activeSlide + 1) * 6)
          .map((channel) => (
            <Column
              logo={channel.logo}
              clickHandler={() => {
                props.setChannelPlaying(channel.url);
                <Link href='/Favorites' />;
              }}
            />
          ))}
      </ContentContainer>
      <ForwardButtonWrapper>
        <ArrowBtn
          type='right'
          onClick={() => {
            increasePage(activeSlide);
          }}
        />
      </ForwardButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: static;
  width: 99vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
`;

const BackButtonWrapper = styled.div`
  position: sticky;
  height: 100vh;
  width: 5%;
  top: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ForwardButtonWrapper = styled.div`
  position: sticky;
  height: 100vh;
  width: 5%;
  top: 0;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  position: sticky;
  left: 0;
  width: 90%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ArrowBtn = styled.span`
  display: inline-block;

  position: absolute;
  top: 50%;
  right: ${({ type }) => (type === "right" ? "8px" : "unset")};
  left: ${({ type }) => (type === "left" ? "8px" : "unset")};
  transform: ${({ type }) =>
    `translateY(-50%) rotate(${type === "right" ? "45deg" : "-135deg"})`};
  width: 25px;
  height: 25px;
  cursor: pointer;
  border-top: 2px solid #888;
  border-right: 2px solid #888;
  &:hover {
    border-color: #333;
  }
`;
export default connect(mapStatetoProps, mapDispatchtoProps)(Slider);
