import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import ChannelsRow from "./channelsRow";
import { connect } from "react-redux";
import _ from "lodash";

import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

import { channels_toggleFavorite } from "../../app/store/actions/api";

const mapStatetoProps = (state) => ({
  user: _.get(state, `user.data`, null),
  channels: _.get(state, `channels.data`, []),
});

const mapDispatchtoProps = (dispatch) => {
  return {
    getUser: () => dispatch(user_get()),
    toggleFavoriteChannel: (channelId, onSuccess) =>
      dispatch(channels_toggleFavorite(channelId, onSuccess)),
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
      setChannels(
        props.channels.filter((item) =>
          props.user.favoriteChannels.includes(item.id)
        )
      );
    } else {
      setChannels(props.channels);
    }
  }, [change]);

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

                  const isFavorite = props.user.favoriteChannels.includes(
                    channel.id
                  );

                  // {
                  //   console.log({
                  //     change: change,
                  //     index: index,
                  //     description: channel.name,
                  //     isFavorite: isFavorite,
                  //   });
                  // }

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
  width: ${(p) => (p.atSidebar === "true" ? "100%" : "90%")};
  height: ${(p) => (p.atSidebar === "true" ? "100%" : "100%")};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background: ${(p) => (p.atSidebar === "true" ? "transparent" : "black")};
  color: white;
`;

export default connect(mapStatetoProps, mapDispatchtoProps)(AllChannels);
// export default AllChannels;
