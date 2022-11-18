import * as React from "react";
import { AppBar, Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

function Header(props) {
  // const { sections, title } = props;

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
          <Button color="inherit" style={{ textDecoration: "none" }}>
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
