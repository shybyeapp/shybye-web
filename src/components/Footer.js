import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {" © 2022 "}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Container
        component="main"
        sx={{ mt: 8, mb: 2 }}
        maxWidth="sm"
      ></Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            This app was hacked during GDI Hackathon '22! ✨
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
