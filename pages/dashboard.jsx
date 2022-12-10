import Badges from "@/components/Badges";
import Challenges from "@/components/Challenges";
import Grid from "@mui/material/Grid";

export default function Dashboard() {
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} />
        <Grid item xs={12}>
          Recommended Challenges
        </Grid>
        <Grid item xs={12}>
          <Challenges />
        </Grid>
      </Grid>
      <Badges />
    </section>
  );
};
