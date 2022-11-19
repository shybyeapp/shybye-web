import Challenges from "./Challenges";
import Badges from "./Badges";
import Grid from "@mui/material/Grid";

const UserPage = () => {
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          Recommended Challenges
        </Grid>
        <Grid item xs={12}>
          <Challenges></Challenges>
        </Grid>
      </Grid>

      <Badges></Badges>
    </section>
  );
};

export default UserPage;
