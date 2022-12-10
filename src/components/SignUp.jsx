import { useState } from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

/**
 * @typedef {object} Props
 * @property {(formData: { username: string; password: string }) => void} addUserCallback
 * @property {() => void} handleClose
 */

/** @param {Props} props */
export default function SignUp({ addUserCallback, handleClose }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const router = useRouter()

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newFormData = { ...userData };
    newFormData[stateName] = inputValue;

    setUserData(newFormData);
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    addUserCallback(userData);
    handleClose();
    router.push("/dashboard")
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
        Sign Up
        <Box
          component="form"
          noValidate
          onSubmit={handleSignUpSubmit}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={onFormChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                onChange={onFormChange}
              />
            </Grid>
            <Grid item xs={12}></Grid>
          </Grid>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Button type="close" variant="contained" sx={{ mt: 3, mb: 2, ml: 1 }}>
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
