import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import Logo from "./Logo";
import Link from "next/link";

export default function TemplateofAllChannels({ trigger }) {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return (
    <div>
      <StyledButton onClick={handleClickOpen("body")}>
        Të gjitha kanalet
      </StyledButton>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
        fullWidth
        maxWidth='lg'
      >
        <DialogTitleStyled id='scroll-dialog-title'>
          TË GJITHA KANALET
        </DialogTitleStyled>
        <DialogContent dividers={scroll === "paper"}>
          <Channels>
            <Logo logosrc='logo/dukagjini.png'></Logo>
            <Logo logosrc='logo/kanal10.png'></Logo>
            <Logo logosrc='logo/klan.png'></Logo>
            <Logo logosrc='logo/klanK.png'></Logo>
            <Logo logosrc='logo/Ktv.png'></Logo>
            <Logo logosrc='logo/rtk.jpg'></Logo>
            <Logo logosrc='logo/rtv21.png'></Logo>
            <Logo logosrc='logo/t7.png'></Logo>
            <Logo logosrc='logo/atv.jpg' differentiator='atv'></Logo>
            <Logo logosrc='logo/topchannel.png'></Logo>
            <Logo logosrc='logo/abc.png'></Logo>
            <Logo logosrc='logo/klanplus.png'></Logo>
            <Logo logosrc='logo/news24.png'></Logo>
            <Logo logosrc='logo/oranews.png'></Logo>
            <Logo logosrc='logo/alsatm.png'></Logo>
            <Logo logosrc='logo/rtsh.png'></Logo>
            <Logo logosrc='logo/kanal7.png'></Logo>
            <Logo logosrc='logo/rtshsport.svg'></Logo>
            <Logo logosrc='logo/rtk2.png'></Logo>
            <Logo logosrc='logo/vizionplus.png'></Logo>
            <Logo logosrc='logo/rtsh2.svg'></Logo>
            <Logo logosrc='logo/tvteuta.png'></Logo>
            <Logo logosrc='logo/boin.png'></Logo>
            <Logo logosrc='logo/syritv.png'></Logo>
            <Logo logosrc='logo/starplus.png'></Logo>
            <Logo logosrc='logo/rtsh3.svg'></Logo>
            <Logo logosrc='logo/rtshmuzike.svg'></Logo>
            <Logo logosrc='logo/rtk4.png'></Logo>
            <Logo logosrc='logo/rtk3.png'></Logo>
            <Logo logosrc='logo/tvrozafa.png'></Logo>
            <Logo logosrc='logo/rtv21junior.png'></Logo>
            <Logo logosrc='logo/rtshfilm.svg'></Logo>
            <Logo logosrc='logo/artatv.png'></Logo>
            <Logo logosrc='logo/rtv21mix.png'></Logo>
            <Logo logosrc='logo/scantv.png'></Logo>
            <Logo logosrc='logo/ulqinitv.png'></Logo>
            <Logo logosrc='logo/rtsh24.svg'></Logo>
            <Logo logosrc='logo/ballkanika.png'></Logo>
            <Logo logosrc='logo/dibratv.png'></Logo>
            <Logo logosrc='logo/zicotv.png'></Logo>
            <Logo logosrc='logo/shenjatv.png'></Logo>
            <Logo logosrc='logo/aav.png'></Logo>
            <Logo logosrc='logo/firstchannel.png'></Logo>
            <Logo logosrc='logo/dibratv.png'></Logo>
            <Logo logosrc='logo/zicotv.png'></Logo>
            <Logo logosrc='logo/shenjatv.png'></Logo>
          </Channels>
        </DialogContent>
        <DialogActions>
          <StyledButtonHome onClick={handleClose}>Cancel</StyledButtonHome>
          <StyledButtonHome href='/Payment'>Porosit</StyledButtonHome>
        </DialogActions>
      </Dialog>
    </div>
  );
}
const StyledButton = styled(Button)`
  && {
    margin-top: 80px;
    background-color: transparent;
    width: 300px;
    height: 60px;
    color: #0063e5;
    font-size: 20px;
    &:hover {
      color: #00a3e5;
    }
  }
`;

const DialogTitleStyled = styled(DialogTitle)`
  && {
    font-size: 20px;
    font-weight: 800;
    color: white;
    background-color: black;
  }
`;

const StyledButtonHome = styled(Button)`
  && {
    margin: 30px;
    background-color: #0063e5;
    width: 15%;
    height: 40px;
    color: white;
    &:hover {
      background-color: #0483ee;
    }
    @media screen and (max-width: 1400px) {
      margin: 10px;
    }
    @media screen and (max-width: 600px) {
      font-size: 10px;
    }
  }
`;
const Channels = styled.div`
  margin: 60px;
  display: grid;

  grid-row-gap: 50px;
  grid-column-gap: 30px;
  grid-template-columns: repeat(6, 1fr);
  @media screen and (max-width: 600px) {
    margin: 20px;
    display: grid;

    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 900px) and (max-width: 1400px) {
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(6, 1fr);
  }

  @media screen and (min-width: 600px) and (max-width: 900px) {
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
`;
