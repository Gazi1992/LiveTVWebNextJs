import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import LogoDevice from "./LogoDevice";
import Link from "next/link";

export default function TemplateofAllDevices({ trigger }) {
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
    <Container>
      <StyledButton onClick={handleClickOpen("body")}>
        Të gjitha pajisjet
      </StyledButton>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
        fullWidth
        maxWidth='xl'
      >
        <DialogTitleStyled id='scroll-dialog-title'>
          TË GJITHA PAJISJET
        </DialogTitleStyled>
        <DialogContent dividers={scroll === "paper"}>
          <Devices>
            <LogoDevice
              logosrc='logodevice/Android.png'
              name='Android'
            ></LogoDevice>
            <LogoDevice logosrc='logodevice/IOS.png' name='IOS'></LogoDevice>
            <LogoDevice
              logosrc='logodevice/ChromecastTV.png'
              name='Google Chromecast'
            ></LogoDevice>
            <LogoDevice
              logosrc='logodevice/AndroidTV.png'
              name='Android TV'
            ></LogoDevice>
            <LogoDevice
              logosrc='logodevice/AppleTV.png'
              name='Apple TV'
            ></LogoDevice>
            <LogoDevice
              logosrc='logodevice/FireStickTV.png'
              name='Amazon Fire TV stick'
            ></LogoDevice>
            <LogoDevice
              logosrc='logodevice/NvidiaShieldTV.png'
              name='Nvidia Shield'
            ></LogoDevice>
            <LogoDevice
              logosrc='logodevice/panasonicTV.png'
              name='Panasonic Shield'
            ></LogoDevice>
            <LogoDevice
              logosrc='logodevice/xBoxOneTV.png'
              name='xBoxOne '
            ></LogoDevice>
            <LogoDevice
              logosrc='logodevice/AmazonFireTV.png'
              name='Amazon TV'
            ></LogoDevice>
            <LogoDevice logosrc='logodevice/LGTV.png' name='LG TV'></LogoDevice>
            <LogoDevice
              logosrc='logodevice/samsungTV.png'
              name='Samsung TV'
            ></LogoDevice>
          </Devices>
        </DialogContent>
        <DialogActions>
          <StyledButtonHome onClick={handleClose}>Cancel</StyledButtonHome>
          <StyledButtonHome href='/Payment'>Porosit</StyledButtonHome>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledButton = styled(Button)`
  && {
    background-color: #f96121;
    width: 100%;
    height: 100%;
    color: white;
    &:hover {
      background-color: #e45114;
    }
  }
`;

const DialogTitleStyled = styled(DialogTitle)`
  && {
    font-size: 25px;
    font-weight: 800;
    color: white;
    background-color: darkmagenta;
    @media screen and (max-width: 1400px) {
      font-size: 10px;
      font-weight: 200;
    }
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
      margin: 5px;
      height: 30px;
      width: 5%;
      font-size: 10px;
    }
  }
`;
const Devices = styled.div`
  display: grid;

  grid-row-gap: 50px;
  grid-column-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 600px) {
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: 800px) and (max-width: 1400px) {
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 600px) and (max-width: 800px) {
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
`;
