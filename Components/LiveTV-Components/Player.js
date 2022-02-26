import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { selectUrl } from "../../features/user/setChannel";
import { useSelector } from "react-redux";

function Player({ className }) {
  const Url = useSelector(selectUrl);
  return (
    <ReactPlayer
      url={Url}
      className={className}
      playing
      width="100%"
      height="100%"
      controls={true}
      muted
    />
  );
}

const AbsolutelyPositionedPlayer = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
`;

const RelativePositionWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const ResponsiveStyledPlayer = () => (
  <RelativePositionWrapper>
    <AbsolutelyPositionedPlayer />
  </RelativePositionWrapper>
);

export default ResponsiveStyledPlayer;
