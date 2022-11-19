import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SignIn(props) {
  const [currentUserData, setCurrentUserData] = React.useState({
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
    props.getUserCallback({
      username: currentUserData.username,
      password: currentUserData.password,
    });
    props.handleClose();
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
