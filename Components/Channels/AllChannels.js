import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import ChannelsRow from "./channelsRow";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import { wrapper } from "../../app/store";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import {
  addFavoriteChannel,
  removeFavoriteChannel,
  setChannelPlaying,
  getChannels,
} from "../../app/store/actions/liveTV";

// export const getServerSideProps = wrapper.getServerSideProps((store) => () => {
//   store.dispatch(getChannels());
// });

const mapStatetoProps = (state) => ({
  liveTVChannels: _.get(state, `liveTV.channels`, []),
  favoriteChannels: _.get(state, `liveTV.favoriteChannels`, []),
  playing: _.get(state, `liveTV.channelPlaying`, ""),
});

const mapDispatchtoProps = (dispatch) => {
  return {
    addFavorite: (channel) => dispatch(addFavoriteChannel(channel)),
    removeFavorite: (channel) => dispatch(removeFavoriteChannel(channel)),
    setChannelPlaying: (channel) => dispatch(setChannelPlaying(channel)),
    getCh: bindActionCreators(getChannels, dispatch),
  };
};

function AllChannels({ kanalet, atSidebar, change, ...props }) {
  const cache = React.useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 50,
    })
  );

  const [channels, setChannels] = React.useState([]);

  useEffect(() => {
    if (change === true) {
      setChannels(props.favoriteChannels);
    } else {
      setChannels(props.liveTVChannels);
    }
  }, [props.liveTVChannels, change]);

  return (
    <Container atSidebar={atSidebar}>
      <div style={{ width: "100%", height: atSidebar ? "100%" : "80vh" }}>
        {channels.length > 0 && (
          <AutoSizer>
            {({ width, height }) => (
              <List
                width={width}
                height={height}
                rowHeight={cache.current.rowHeight}
                deferredMeasurementCache={cache.current}
                rowCount={channels.length}
                rowRenderer={({ key, index, style, parent }) => {
                  const channel = channels[index];

                  const isFavorite = props.favoriteChannels
                    .map((item) => item.url)
                    .includes(channels[index].url);
                  {
                    // console.log({
                    //   change: change,
                    //   index: index,
                    //   description: channel.name,
                    //   isFavorite: isFavorite,
                    // });
                  }

                  return (
                    <CellMeasurer
                      key={key}
                      cache={cache.current}
                      parent={parent}
                      columnIndex={0}
                      rowIndex={index}
                    >
                      <div style={style}>
                        <ChannelsRow
                          id={channel.id}
                          atSidebar={atSidebar}
                          key={channel.id}
                          url={channel.url}
                          logo={channel.logo}
                          starState={isFavorite}
                          description={channel.name}
                          onStarPress={() => {
                            if (isFavorite) props.removeFavorite(channel);
                            else props.addFavorite(channel);
                          }}
                          onChannelPress={() => {
                            props.setChannelPlaying(channel.url);
                          }}
                        />
                      </div>
                    </CellMeasurer>
                  );
                }}
              />
            )}
          </AutoSizer>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 0px;
  width: ${(p) => (p.atSidebar === "true" ? "100%" : "90%")};
  height: ${(p) => (p.atSidebar === "true" ? "91vw" : "100%")};
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${(p) => (p.atSidebar === "true" ? "transparent" : "black")};
  color: white;
`;

export default connect(mapStatetoProps, mapDispatchtoProps)(AllChannels);
// export default AllChannels;
