import { Button, Grid } from "@mui/material";

const Home = () => {
  return (
    <section>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12}></Grid>
        <Grid item xs={12} md={6}>
          <br></br>
          Complete challenges, collect rewards, reduce social anxiety!
          <br></br>
          <br></br>
          <Button variant="contained">Get Started</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={require("../Images/Logos/ShyBye.png")}
            alt="ShyBye logo"
          ></img>
        </Grid>
      </Grid>
    </section>
  );
};

export default Home;
