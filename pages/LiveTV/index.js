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
import { isMobile } from "react-device-detect";
import MobileLiveTV from "../..//Components/MobileLiveTV";
import { useRouter } from "next/router";

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
  const router = useRouter();
  useEffect(() => {
    props.getChannels();
    props.getUser();
  }, []);

  useEffect(() => {
    if (props.getUser()) {
      router.push("/SignIn ", undefined, { shallow: true });
      console.log("User is" + props.getUser());
    } else {
      console.log("Not Exists !");
    }
  }, []);
  // console.log(props.channels);
  // console.log(props.user);
  // console.log("USER AWS ", props.userAWS);

  const playerProps = { playing: false, height: "90%" };

  return (
    <>
      {isMobile ? (
        <MobileLiveTV />
      ) : (
        <PlayerHeader>
          <Container>
            <Sidebar />
            <ResponsiveStyledPlayer {...playerProps} />
          </Container>
        </PlayerHeader>
      )}
    </>
  );
}
const MobileContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 10;
`;
const Container = styled.div`
  background-color: black;
  height: calc(100vh - 80px);
  width: 100vw;
  margin-top: 80px;
`;

//export default LiveTV;
export default connect(mapStatetoProps, mapDispatchtoProps)(LiveTV);
