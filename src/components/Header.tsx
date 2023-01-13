import { useState } from "react";
import Link from "next/link";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

import SignIn from "@/components/SignIn";
import { useAuthContext } from "@/components/AuthProvider";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { user, signOut } = useAuthContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
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
          </Stack>
          {user?.displayName ? (
            <Button color="inherit" onClick={signOut}>
              Sign Out
            </Button>
          ) : (
            <Button color="inherit" onClick={() => setOpen(true)}>
              Sign In
              <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogContent>
                  <SignIn />
                </DialogContent>
              </Dialog>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
