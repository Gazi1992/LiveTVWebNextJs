import React, { useRef } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import Sidebar from "../../Components/LiveTV-Components/Sidebar";
import { connect } from "react-redux";
import PlayerHeader from "../../Components/Layout/PlayerHeader";
import ResponsiveStyledPlayer from "../../Components/Channels/ColumnComponents/InteractivePlayer/TestComponent";
import _ from "lodash";
import { getChannels } from "../../app/store/actions/liveTV";
import { channels_get, user_get } from "../../app/store/actions/api";

const mapStatetoProps = (state) => ({
  LiveTVCHannels: _.get(state, `liveTV_channels.data.filteredChannels`, []),
  channelsFetching: _.get(state, `liveTV.channels`, []),
  playing: _.get(state, `liveTV.channelPlaying`, ""),
  channels: _.get(state, `channels.data`, []),
  user: _.get(state, `user.data`, []),
  userAWS: _.get(state, `userAWS`, []),
});
const mapDispatchtoProps = (dispatch) => {
  return {
    getLiveTVChannels: () => {
      dispatch(getChannels());
    },
    getChannels: () => {
      dispatch(channels_get());
    },
    getUser: () => {
      dispatch(user_get());
    },
  };
};

function LiveTV(props) {
  useEffect(() => {
    props.getChannels();
    props.getUser();
  }, []);

  // console.log(props.channels);
  // console.log(props.user);
  // console.log("USER AWS ", props.userAWS);

  const playerProps = { playing: false, height: "90%" };

  return (
    <PlayerHeader>
      <Container>
        {/* {!props.channelsFetching && } */}
        {/*
        <Sidebar />*/}
        <ResponsiveStyledPlayer {...playerProps} />
      </Container>
    </PlayerHeader>
  );
}

const Container = styled.div`
  background-color: black;
  height: 91vh;
  width: 100vw;
  margin-top: 80px;
`;

//export default LiveTV;
export default connect(mapStatetoProps, mapDispatchtoProps)(LiveTV);
