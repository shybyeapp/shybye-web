import Grid from "@mui/material/Grid";

export default function Research() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        lineHeight: 2,
        fontSize: 18,
      }}
    >
      <Grid xs={12} sx={{ m: 8, p: 8 }}>
        <p>
          <b>
            Millions of Americans are affected by Social Anxiety disorder and
            millions more suffer from an epidemic of loneliness.
          </b>
        </p>
        <p>
          The CDC considers loneliness and isolation a serious public health
          risk. According to nih.gov, loneliness is linked to high blood
          pressure, heart disease, obesity, a weakened immune system, anxiety,
          depression, and cognitive decline.
        </p>
        <p>
          But never fear! ShyBye has your back! With ShyBye you will exercise
          your social muscles and have an epic time while making friends and
          improving your overall well-being!
        </p>
        <p>Who knows? you may even make some lasting, lifelong, changes!</p>
      </Grid>
    </Grid>
  );
};