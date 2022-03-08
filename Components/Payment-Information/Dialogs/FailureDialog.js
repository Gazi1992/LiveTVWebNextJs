import * as React from "react";

import Dialog from "@mui/material/Dialog";
import styled from "styled-components";
import { BiErrorCircle } from "react-icons/bi";
export default function AlertDialog({ handleOpen, handleParent }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handleClick = () => {
      handleClickOpen(handleOpen);
      setTimeout(() => {
        handleClose();
      }, 1000);
    };
    if (handleOpen) {
      handleClick();
    }
  }, [handleOpen]);

  const handleClickOpen = (handleOpen) => {
    setOpen(handleOpen);
  };

  const handleClose = () => {
    handleParent(false);
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} fullScreen>
        <Content>
          <h1 style={{ marginBottom: "0px", color: "#e8625d" }}>Failure</h1>
          <BiErrorCircle size='256px' style={{ color: "#e8625d" }} />
        </Content>
      </Dialog>
    </div>
  );
}

const Content = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fceded;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;
