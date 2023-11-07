import React from 'react'
import Grid from "@mui/material/Grid";
import Splash from "@/components/Splash";

const Started = () => {
  return (
    <Grid
      alignItems="center"
      container
      direction="column"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >
      <Grid item justify="center">
        <Splash />
      </Grid>
    </Grid>
  )
}

export default Started