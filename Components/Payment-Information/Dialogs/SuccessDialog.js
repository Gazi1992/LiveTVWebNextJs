import * as React from "react";

import Dialog from "@mui/material/Dialog";

import styled from "styled-components";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useRouter } from "next/router";
export default function AlertDialog({ handleOpen, handleParent, ref }) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
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
    router.push("/Home", undefined, { shallow: true });
  };

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <Content>
          <h1 style={{ marginBottom: "0px", color: "#6fba63" }}>SUCCESS</h1>
          <IoIosCheckmarkCircleOutline
            size='small'
            style={{ color: "#6fba63" }}
          />
        </Content>
      </Dialog>
    </div>
  );
}

const Content = styled.div`
  width: 400px;
  height: 600px;
  background-color: #eef7ed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;
