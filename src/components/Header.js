import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SignIn from "./SignIn";
// import Link from '@mui/material/Link';

function Header(props) {
  // const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 2, borderColor: "divider" }}>
        {/* <Button size="small">Subscribe</Button> */}
        <Typography
          component="h1"
          variant="h5"
          // color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          SHYBYE
        </Typography>
        <Button variant="text" size="small" onClick={<SignIn></SignIn>}>
          Sign in
        </Button>
        <Button variant="text" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      ></Toolbar>
    </React.Fragment>
  );
}

export default Header;
