import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Badges = () => {
  const navigate = useNavigate();
  const goToReward = () => {
    let path = "/reward";
    navigate(path);
  };
  return (
    <section>
      <h1>Badges You've Earned</h1>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid xs={12} md={4}>
          <img
            src={require("../Images/Badges/in-love.png")}
            alt="love smiley face"
            class="badges"
          ></img>
          <Grid xs={12}>
            <Button onClick={goToReward} variant="contained">
              see reward
            </Button>
          </Grid>
        </Grid>
        <Grid xs={12} md={4}>
          <img
            src={require("../Images/Badges/fist-bump.png")}
            alt="fist bump"
            class="badges"
          ></img>
          <Grid xs={12}>
            <Button onClick={goToReward} variant="contained">
              see reward
            </Button>
          </Grid>
        </Grid>
        <Grid xs={12} md={4}>
          <img
            src={require("../Images/Badges/hello.png")}
            alt="hello speech bubble"
            class="badges"
          ></img>
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

export default Badges;
