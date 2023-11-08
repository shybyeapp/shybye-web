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
            Shybye
          </Typography>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Link href="/dashboard">
              <Button variant="h6" color="inherit" sx={{ textTransform: "none" }}>
                Dashboard
              </Button>
            </Link>
            <Link href="/">
              <Button variant="h6" color="inherit" sx={{ textTransform: "none" }}>
                Resources
              </Button>
            </Link>
            <Link href="/">
              <Button variant="h6" color="inherit" sx={{ textTransform: "none" }}>
                Achievements
              </Button>
            </Link>
            <Button
              variant="h6"
              color="inherit"
              sx={{ textTransform: "none" }}
              onClick={handleClickOpen}
            >
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
