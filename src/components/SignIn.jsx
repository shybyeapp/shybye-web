import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

/**
 * @typedef {object} Props
 * @property {(formData: { username: string; password: string }) => void} getUserCallback
 * @property {() => void} handleClose
 */

/** @param {Props} props */
export default function SignIn({ getUserCallback, handleClose }) {
  const [currentUserData, setCurrentUserData] = useState({
    username: "",
    password: "",
  });

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const loginFormData = { ...currentUserData };
    loginFormData[stateName] = inputValue;

    setCurrentUserData(loginFormData);
  };

  const handleSignInSubmit = (event) => {
    event.preventDefault();
    getUserCallback(currentUserData);
    handleClose();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Sign In
        <Box
          component="form"
          onSubmit={handleSignInSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="Username"
            label="Username"
            name="Username"
            autoComplete="Username"
            // autoFocus
            onChange={onFormChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Button type="close" variant="contained" sx={{ mt: 3, mb: 2, ml: 1 }}>
            Cancel
          </Button>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item></Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
