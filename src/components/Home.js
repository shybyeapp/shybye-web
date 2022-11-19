import * as React from "react";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import SignUp from "./SignUp";

function Home(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12}></Grid>
      <Grid item xs={12} md={6}>
        <br></br>
        Complete challenges, collect rewards, reduce social anxiety!
        <br></br>
        <br></br>
        <Button variant="contained" onClick={handleClickOpen}>
          Get Started
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <SignUp handleClose={handleClose} open={open}></SignUp>
            </DialogContent>
          </Dialog>
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src={require("../Images/Logos/ShyBye.png")}
          alt="ShyBye logo"
        ></img>
      </Grid>
    </Grid>
  );
}

export default Home;