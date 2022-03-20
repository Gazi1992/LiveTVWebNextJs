import React from "react";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";

function ConfirmDialog({ invoke, setInvoke }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <Dialog
        open={invoke}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          <Header>
            <h2>Ndrysho pakon</h2>
          </Header>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            <Row>
              <h3 style={{ color: "#878787" }}>Plani aktual: Family</h3>
              <p style={{ color: "#878787" }}>
                150 Kanale Shqip. Shfaqet ne 5 pajisje njekohesisht. Kanale
                totale 20000.
              </p>
            </Row>
          </DialogContentText>
          <DialogContentText id='alert-dialog-description'>
            <Row style={{ borderTop: "0px solid transparent" }}>
              <h3>Plani i ri: Family Premium</h3>
              <p>
                150 Kanale Shqip. Shfaqet ne 5 pajisje njekohesisht. Kanale
                totale 20000.
              </p>
            </Row>
          </DialogContentText>
          <DialogContentText id='alert-dialog-description'>
            <p style={{ color: "black" }}>
              Plani i ri fillon me:
              <span style={{ fontWeight: "700" }}> 22.02.2022</span>
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setInvoke(false);
            }}
          >
            Anulo
          </Button>
          <AgreeStyledButton
            color='primary'
            variant='contained'
            onClick={() => {
              setInvoke(false);
            }}
            sx={{
              color: "white",
            }}
            autoFocus
          >
            Konfirmo
          </AgreeStyledButton>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

const Container = styled.div``;
const AgreeStyledButton = styled(Button)`
  && {
    margin-right: 15px;
    background: #4091ff;
    background-color: #4091ff;
  }
`;

const Header = styled.div`
  h2 {
    margin: 5px;
  }
`;

const Row = styled.div`
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  padding: 20px;
  color: #333333;
  border: 1px solid gray;
  p {
    margin: 0px;
  }
  h3 {
    margin: 0px;
  }
`;

export default ConfirmDialog;
