import { useState } from "react";
import { useRouter } from "next/router";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";

import { useAuthContext } from "@/components/AuthProvider";
import SignIn from "@/components/SignIn";

export default function Home() {
  const router = useRouter();
  const { user } = useAuthContext();
  const [open, setOpen] = useState(false);

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
        {user ? (
          <Button variant="contained" onClick={() => router.push("/dashboard")}>
            Dashboard
          </Button>
        ) : (
          <Button variant="contained" onClick={() => setOpen(true)}>
            Get started
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogContent>
                <SignIn />
              </DialogContent>
            </Dialog>
          </Button>
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        <img src="images/brand/ShyBye.png" alt="ShyBye logo" className="logo" />
      </Grid>
    </Grid>
  );
}
