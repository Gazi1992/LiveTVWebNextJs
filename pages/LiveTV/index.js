import React, { useRef, useState } from "react";
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
import ReactLoading from "react-loading";
import { Auth } from "aws-amplify";

const mapStatetoProps = (state) => ({
  LiveTVCHannels: _.get(state, `liveTV_channels.data.filteredChannels`, []),
  channelsFetching: _.get(state, `liveTV.channels`, []),
  playing: _.get(state, `liveTV.channelPlaying`, ""),
  channels: _.get(state, `channels.data`, []),
  user: _.get(state, `user.data`, null),
  userAWS: _.get(state, `userAWS`, null),
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
  const [loading, setLoading] = useState(true);
  const [isloggedIn, setIsloggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then((user) => {
        setIsloggedIn(true);
      })
      .catch((err) => {
        router.push("/Home", undefined, { shallow: true });
        setIsloggedIn(false);
      });
  }, []);

  useEffect(() => {
    if (!isloggedIn) {
      setLoading(false);
    } else {
    }
  }, [isloggedIn]);

  useEffect(() => {
    props.getChannels();
    props.getUser();
  }, []);

  useEffect(() => {
    if (props.user != null && props.channels.length > 0 && isloggedIn) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [props.user, props.channels, isloggedIn]);

  const playerProps = { playing: false, height: "90%" };

  return (
    <>
      {loading ? (
        <LoadingWrapper>
          <ReactLoading type='bars' color='white' height={267} width={175} />
        </LoadingWrapper>
      ) : (
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
      )}
    </>
  );
}

const Container = styled.div`
  background-color: black;
  height: calc(100vh - 80px);
  width: 100%;
  margin-top: 80px;
`;
const LoadingWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//export default LiveTV;
export default connect(mapStatetoProps, mapDispatchtoProps)(LiveTV);
