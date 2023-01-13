import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 2,
          px: 2,
          mt: "auto",
          backgroundColor: "#FBF8EE",
        }}
      >
        <Container maxWidth="sm">
          This app was hacked by Team ShyDevs during GDI Hackathon '22! ✨
        </Container>
      </Box>
    </Box>
  );
}
