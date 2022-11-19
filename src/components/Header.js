import * as React from "react";
import { AppBar, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import SignIn from "./SignIn";

function Header(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          <Button color="inherit" onClick={handleClickOpen}>
            Sign In
            <Dialog open={open} onClose={handleClose}>
              <DialogContent>
                <SignIn handleClose={handleClose} open={open}></SignIn>
              </DialogContent>
            </Dialog>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
