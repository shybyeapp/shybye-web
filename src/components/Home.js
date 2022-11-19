import { Button, Grid, Dialog, DialogContent } from "@mui/material";
import { useState } from "react";
import SignUp from "./SignUp";

const Home = () => {
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleClickOpenSignUp = () => {
    setOpenSignUp(true);
  };

  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };
  return (
    <section>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}></Grid>
        <Grid item xs={12} md={6}>
          <br></br>
          Complete challenges, collect rewards, reduce social anxiety!
          <br></br>
          <br></br>
          <Button variant="contained" onClick={handleClickOpenSignUp}>
            Get Started
            <Dialog open={openSignUp} onClose={handleCloseSignUp}>
              <DialogContent>
                <SignUp
                  handleClose={handleCloseSignUp}
                  open={openSignUp}
                ></SignUp>
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
    </section>
  );
};

export default Home;
