import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Typography, Button, IconButton } from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles";

import styled from "styled-components";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
import FastRewindIcon from "@mui/icons-material/FastRewind";
// import FastRewindIcon from "@material-ui/icons/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Slider from "@mui/material/Slider";
import Tooltip from "@mui/material/Tooltip";
import Grid from "@mui/material/Grid";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeMute from "@mui/icons-material/VolumeOff";
import FullScreen from "@mui/icons-material/Fullscreen";
import Popover from "@material-ui/core/Popover";
import LiveTvIcon from "@mui/icons-material/LiveTv";

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement='top' title={value}>
      {children}
    </Tooltip>
  );
}

const Controls = forwardRef(
  (
    {
      onSeek,
      onSeekMouseDown,
      onSeekMouseUp,
      onDuration,
      onRewind,
      onPlayPause,
      onFastForward,
      playing,
      played,
      elapsedTime,
      totalDuration,
      onMute,
      muted,
      onVolumeSeekDown,
      onChangeDispayFormat,
      playbackRate,
      onPlaybackRateChange,
      onToggleFullScreen,
      volume,
      onVolumeChange,
      onBookmark,
    },
    ref
  ) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
      <Container ref={ref}>
        <Wrapper style={{ flexGrow: 1 }}>
          <Grid
            item
            container
            direction='row'
            alignItems='center'
            justify='space-between'
            style={{ padding: 0 }}
          ></Grid>

          <PlayFooter
            style={{
              padding: 0,
              // backgroundColor: " #090b13",
              opacity: "1",
            }}
          >
            <SliderContainer>
              <StyledSlider
                min={0}
                max={100}
                ValueLabelComponent={(props) => (
                  <ValueLabelComponent {...props} value={elapsedTime} />
                )}
                value={played * 100}
                onChange={onSeek}
                onMouseDown={onSeekMouseDown}
                onChangeCommitted={onSeekMouseUp}
                onDuration={onDuration}
              />
            </SliderContainer>
            <FooterButtonsContainer>
              <PlayPauseRewindContainer>
                <StyledControlIcons onClick={onRewind} aria-label='rewind'>
                  <FastRewindIcon fontSize='inherit' />
                </StyledControlIcons>
                <StyledControlIcons onClick={onPlayPause} aria-label='play'>
                  {playing ? (
                    <PauseIcon fontSize='inherit' />
                  ) : (
                    <PlayArrowIcon fontSize='inherit' />
                  )}
                </StyledControlIcons>
                <StyledControlIcons
                  onClick={onFastForward}
                  aria-label='forward'
                >
                  <FastForwardIcon fontSize='inherit' />
                </StyledControlIcons>
              </PlayPauseRewindContainer>
              <VolumeLiveTVContainer>
                <StyledControlIcons
                  // onClick={() => setState({ ...state, muted: !state.muted })}
                  onClick={onMute}
                >
                  {muted ? (
                    <VolumeMute fontSize='large' />
                  ) : volume > 0.5 ? (
                    <VolumeUp fontSize='large' />
                  ) : (
                    <VolumeDown fontSize='large' />
                  )}
                </StyledControlIcons>
                <VolumeContainer>
                  <VolumeSlider
                    min={0}
                    max={100}
                    value={muted ? 0 : volume * 100}
                    onChange={onVolumeChange}
                    aria-labelledby='input-slider'
                    onMouseDown={onSeekMouseDown}
                    onChangeCommitted={onVolumeSeekDown}
                  />
                </VolumeContainer>

                <Button
                  variant='text'
                  onClick={
                    onChangeDispayFormat
                    //     () =>
                    //   setTimeDisplayFormat(
                    //     timeDisplayFormat == "normal" ? "remaining" : "normal"
                    //   )
                  }
                ></Button>
                <IconButton>
                  <LiveTvIcon fontSize='large' color='secondary' />
                </IconButton>
              </VolumeLiveTVContainer>
              <SpeedMaximaseContainer>
                <BottomIcon
                  onClick={handleClick}
                  aria-describedby={id}
                  variant='text'
                >
                  <Typography>{playbackRate}X</Typography>
                </BottomIcon>

                <Popover
                  container={ref.current}
                  open={open}
                  id={id}
                  onClose={handleClose}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Grid container direction='column-reverse'>
                    {[0.5, 1, 1.5, 2].map((rate) => (
                      <Button
                        key={rate}
                        //   onClick={() => setState({ ...state, playbackRate: rate })}
                        onClick={() => onPlaybackRateChange(rate)}
                        variant='text'
                      >
                        <Typography
                          color={
                            rate === playbackRate ? "secondary" : "inherit"
                          }
                        >
                          {rate}X
                        </Typography>
                      </Button>
                    ))}
                  </Grid>
                </Popover>
                <BottomIcon onClick={onToggleFullScreen}>
                  <FullScreen fontSize='large' />
                </BottomIcon>
              </SpeedMaximaseContainer>
            </FooterButtonsContainer>
          </PlayFooter>
        </Wrapper>
      </Container>
    );
  }
);

const Container = styled.div`
  visibility: visible;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FooterButtonsContainer = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const VolumeContainer = styled.div`
  height: 20px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const PlayFooter = styled.div`
  position: relative;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 5%,
    /*  These three 'smooth' out the fade. */ rgba(0, 0, 0, 0.6) 5%,
    rgba(0, 0, 0, 0.7) 80%,
    rgba(0, 0, 0, 0.9) 85%,
    /* Solid to match the background. */ rgba(0, 0, 0, 1) 100%
  );
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PlayPauseRewindContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-items: center;
`;
const VolumeLiveTVContainer = styled.div`
  position: absolute;
  right: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const SpeedMaximaseContainer = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SliderContainer = styled.div`
  position: absolute;
  top: -12px;
  left: 0;
  width: 96%;
  transform: translate(2%, 0);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const StyledSlider = styled(Slider)`
  color: #7b0082;
  :hover {
    color: #9b0082;
  }

  & .MuiSlider-thumb {
    height: 10px;
    width: 10px;
    border-radius: 5px;
  }
  & .MuiSlider-valuelabel {
    left: "calc(-50% + 4px)";
  }
`;
const VolumeSlider = styled(Slider)`
  margin-left: 20px;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #0063e5;
    width: 200px;
    height: 48px;
    color: white;
    margin-right: 20px;
    &:hover {
      background-color: #0483ee;
    }

    @media screen and (max-width: 1000px) {
      width: 100px;
      margin-right: 0;
      align-self: center;
      justify-self: flex-start;
    }
  }
`;

const BottomIcon = styled(Button)`
  && {
    color: #999;
    :hover {
      color: #fff;
    }
  }
`;
const StyledControlIcons = styled(IconButton)`
  && {
    color: #ffffff;

    font-size: 45px;
    transform: scale(0.9);
    :hover {
      color: #fff;
      transform: scale(1);
    }
  }
`;
Controls.propTypes = {
  onSeek: PropTypes.func,
  onSeekMouseDown: PropTypes.func,
  onSeekMouseUp: PropTypes.func,
  onDuration: PropTypes.func,
  onRewind: PropTypes.func,
  onPlayPause: PropTypes.func,
  onFastForward: PropTypes.func,
  onVolumeSeekDown: PropTypes.func,
  onChangeDispayFormat: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onToggleFullScreen: PropTypes.func,
  onMute: PropTypes.func,
  playing: PropTypes.bool,
  played: PropTypes.number,
  elapsedTime: PropTypes.string,
  totalDuration: PropTypes.string,
  muted: PropTypes.bool,
  playbackRate: PropTypes.number,
};
export default Controls;
