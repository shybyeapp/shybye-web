import { useRouter } from "next/router";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Badges() {
  const router = useRouter()
  const goToReward = () => router.push("/reward")

  return (
    <section>
      <h1>Badges You've Earned</h1>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid xs={12} md={4}>
          <img
            src="images/badges/in-love.png"
            alt="love smiley face"
            class="badges"
          />
          <Grid xs={12}>
            <Button onClick={goToReward} variant="contained">
              see reward
            </Button>
          </Grid>
        </Grid>
        <Grid xs={12} md={4}>
          <img
            src="images/badges/fist-bump.png"
            alt="fist bump"
            class="badges"
          />
          <Grid xs={12}>
            <Button onClick={goToReward} variant="contained">
              see reward
            </Button>
          </Grid>
        </Grid>
        <Grid xs={12} md={4}>
          <img
            src="images/badges/hello.png"
            alt="hello speech bubble"
            class="badges"
          />
          <Grid xs={12}>
            <Button onClick={goToReward} variant="contained">
              see reward
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};
