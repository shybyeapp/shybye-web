import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  AppBar, 
  Box, 
  Button,
  Dialog,
  DialogContent,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import SignIn from "@/components/SignIn";

const BACKENDURL = "https://shy-bye-app.fly.dev";

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => void setOpen(true);
  const handleClose = () => void setOpen(false);

  const getUserData = (userInfo) => {
    axios
      .get(`${BACKENDURL}/login`, userInfo)
      .then((res) => {
        console.log(res);
        console.log("logging user in");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div">
            shybye
          </Typography>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/about" style={{ textDecoration: "none" }}>
              <Button color="inherit">About</Button>
            </Link>
            <Link href="/research" style={{ textDecoration: "none" }}>
              <Button color="inherit">Research</Button>
            </Link>
            <Button color="inherit" onClick={handleClickOpen}>
              Sign In
              <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                  <SignIn
                    handleClose={handleClose}
                    open={open}
                    getUserCallback={getUserData}
                  />
                </DialogContent>
              </Dialog>
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
