
import { useState } from "react";
import axios from "axios";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";

import SignUp from "@/components/SignUp";

const BACKENDURL = "https://shy-bye-app.fly.dev";

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => void setOpen(true);
  const handleClose = () => void setOpen(false);

  // async call to db: POST user
  const addUserData = (userInfo) => {
    axios
      .post(`${BACKENDURL}/users`, userInfo)
      .then((res) => {
        console.log(res);
        console.log("adding user");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{
        fontFamily: "Inter",
        fontSize: 32,
        fontWeight: "bold",
        lineHeight: 2,
      }}
    >
      <br></br>
      <Grid item xs={12}></Grid>
      <Grid item xs={12} md={6}>
        Complete challenges,
        <br></br>Collect rewards, & <br></br>Reduce social anxiety
        <br></br>
        <Button variant="contained" onClick={handleClickOpen}>
          Get Started
          <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <SignUp
                handleClose={handleClose}
                open={open}
                addUserCallback={addUserData}
              />
            </DialogContent>
          </Dialog>
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src="images/brand/ShyBye.png"
          alt="ShyBye logo"
          className="logo"
        />
      </Grid>
    </Grid>
  );
}