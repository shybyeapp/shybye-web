import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SignUp(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const onFormChange = (event) => {
    const stateName = event.target.name;
    const inputValue = event.target.value;

    const newFormData = { ...userData };
    newFormData[stateName] = inputValue;

    setUserData(newFormData);
  };

  const handleSignUpSubmit = (event) => {
    event.preventDefault();
    props.addUserCallback({
      username: userData.username,
      password: userData.password,
    });
    props.handleClose();
    toDashboard();
  };

  let navigate = useNavigate();
  const toDashboard = () => {
    let path = "/dashboard";
    navigate(path);
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
