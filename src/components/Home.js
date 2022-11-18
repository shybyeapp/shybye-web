import { Grid } from "@mui/material";

const Home = () => {
  return (
    <section>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6}>
          Complete challenges, collect rewards, reduce social anxiety!
        </Grid>
        <Grid item xs={6}>
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
