import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle, Settings, Logout } from "@mui/icons-material";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography component="div">ShyBye</Typography>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Link href="/dashboard">
              <Button
                size="large"
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                Dashboard
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="large"
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                Resources
              </Button>
            </Link>
            <Link href="/">
              <Button
                size="large"
                color="inherit"
                sx={{ textTransform: "none" }}
              >
                Achievements
              </Button>
            </Link>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} sx={{ marginRight: 6 }}>
                <IconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Settings />
                </IconButton>
                Settings
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ marginRight: 6 }}>
                <IconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                View Profile
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ marginRight: 6 }}>
                <IconButton
                  size="medium"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <Logout />
                </IconButton>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
