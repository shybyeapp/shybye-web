import Badges from "@/components/Badges";
import Challenges from "@/components/Challenges";
import Progress from "@/components/Progress";
import NextAchievement from "@/components/NextAchievement";
import Grid from "@mui/material/Grid";

export default function Dashboard() {
  return (
    <>
      <Grid container spacing={4} sx={{ marginTop: 10, paddingLeft: 10, paddingRight: 10 }}>
        <Grid item xs={12} md={7}>
          <Challenges title={'My Challenges'} />
          <Challenges title={'Browse Challenges'} />
        </Grid>
        <Grid item xs={12} md={5}>
          <Progress />
          <NextAchievement />
        </Grid>
      </Grid>
      <Badges />
    </>
  );
}
