import Badges from "@/components/Badges";
import Challenges from "@/components/Challenges";
import Grid from "@mui/material/Grid";

export default function Dashboard() {
  return (
    <section>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Challenges title={'My Challenges'}/>
          <Challenges title={'Browse Challenges'}/>
        </Grid>
        <Grid item xs={12} md={5}>
          Hello
        </Grid>
      </Grid>
      <Badges />
    </section>
  );
}
