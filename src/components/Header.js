import * as React from "react";
import { AppBar, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import SignIn from "./SignIn";
import axios from "axios";
import { UserAuth } from "../context/AuthContext";

// const BACKENDURL = "https://shy-bye-app.fly.dev";

function Header(props) {
  const [open, setOpen] = React.useState(false);
  const { user, googleSignOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await googleSignOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const getUserData = (userInfo) => {
  //   axios
  //     .get(`${BACKENDURL}/login`, userInfo)
  //     .then((res) => {
  //       console.log(res);
  //       console.log("logging user in");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button color="inherit">
              <Link to="/" style={{ textDecoration: "none" }}>
                Home{" "}
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/about" style={{ textDecoration: "none" }}>
                {" "}
                About{" "}
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/research" style={{ textDecoration: "none" }}>
                Research{" "}
              </Link>
            </Button>
          </Stack>
          {user?.displayName ? (
            <Button color="inherit" onClick={handleSignOut}>
              Sign Out
            </Button>
          ) : (
            <Button color="inherit" onClick={handleClickOpen}>
              Sign In
              <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                  <SignIn
                    handleClose={handleClose}
                    open={open}
                    // getUserCallback={getUserData}
                  ></SignIn>
                </DialogContent>
              </Dialog>
            </Button>
          )}

          {/* <Dialog open={open} onClose={handleClose}>
            <DialogContent>
              <SignIn
                handleClose={handleClose}
                open={open}
                // getUserCallback={getUserData}
              ></SignIn>
            </DialogContent>
          </Dialog> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
