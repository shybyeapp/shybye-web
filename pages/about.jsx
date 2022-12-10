import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

export default function About() {
  return (
    <section>
      <Grid
        item
        xs={12}
        sx={{
          fontFamily: "Inter",
          fontSize: 32,
          fontWeight: "bold",
        }}
        elevation={3}
      >
        <h1>About the Team</h1>
      </Grid>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid
          item
          xs={12}
          sx={{
            fontFamily: "Inter",
            fontSize: 16,
          }}
          elevation={3}
        >
          <h2>UX Design & Research</h2>
        </Grid>

        <Grid item xs={6} md={4} alignItems="center" justifyContent="center">
          <Paper
            sx={{
              minHeight: 200,
              fontFamily: "Inter",
              fontSize: 16,
              fontWeight: "bold",
            }}
            elevation={3}
            alignItems="center"
            justifyContent="center"
          >
            <br></br>
            Linda Paredes
            <br></br>
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper
            sx={{
              minHeight: 200,
              fontFamily: "Inter",
              fontSize: 16,
              fontWeight: "bold",
            }}
            elevation={3}
          >
            <br></br>Zinet Hyssen
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper
            sx={{
              minHeight: 200,
              fontFamily: "Inter",
              fontSize: 16,
              fontWeight: "bold",
            }}
            elevation={3}
          >
            <br></br>Faduma Hashi
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper
            sx={{
              minHeight: 200,
              fontFamily: "Inter",
              fontSize: 16,
              fontWeight: "bold",
            }}
            elevation={3}
          >
            <br></br>Nitika aSharma
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            fontFamily: "Inter",
            fontSize: 16,
          }}
          elevation={3}
        >
          <h2>Back End</h2>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper
            sx={{
              minHeight: 200,
              fontFamily: "Inter",
              fontSize: 16,
              fontWeight: "bold",
            }}
            elevation={3}
          >
            <br></br>
            <Box>Valorie Broderick</Box>
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper
            sx={{
              minHeight: 200,
              fontFamily: "Inter",
              fontSize: 16,
              fontWeight: "bold",
            }}
            elevation={3}
          >
            <br></br>Anthony Ahrens
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper
            sx={{
              minHeight: 200,
              fontFamily: "Inter",
              fontSize: 16,
              fontWeight: "bold",
            }}
            elevation={3}
          >
            <br></br>Joseph Stephens
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            fontFamily: "Inter",
            fontSize: 16,
          }}
          elevation={3}
        >
          <h2>Front End</h2>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper
            sx={{
              minHeight: 200,
              fontFamily: "Inter",
              fontSize: 16,
              fontWeight: "bold",
            }}
            elevation={3}
          >
            <br></br>Gabriela Webb
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper
            sx={{
              minHeight: 200,
              fontFamily: "Inter",
              fontSize: 16,
              fontWeight: "bold",
            }}
            elevation={3}
          >
            <br></br>Cristine Johnson
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper
            sx={{
              minHeight: 200,
              fontFamily: "Inter",
              fontSize: 16,
              fontWeight: "bold",
            }}
            elevation={3}
          >
            <br></br>Valorie Broderick
          </Paper>
        </Grid>

        <Grid item xs={6} md={4}>
          <Paper
            sx={{
              minHeight: 200,
              fontFamily: "Inter",
              fontSize: 16,
              fontWeight: "bold",
            }}
            elevation={3}
          >
            <br></br>Kandance Ferguson
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            fontFamily: "Inter",
            fontSize: 32,
          }}
          elevation={3}
        >
          <h1>About the Stack</h1>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            fontFamily: "Inter",
            fontSize: 16,
            lineHeight: 2,
          }}
          elevation={3}
        >
            This app was made in 4 days during the 2022 Girl Develop It Virtual
            Hackathon for Health.
            <br></br>The back end of this app was made with Spring, Java,
            PostgresQL, and deployed on fly.io.
            <br></br>The front end of this app was made with React, Javascript,
            MaterialUI, & deployed on Netlify.
            <br></br>Planning, protypes, and design were assembled on Figma.
            <br></br>Badge images sourced from Flaticon.
        </Grid>
      </Grid>
    </section>
  );
};
