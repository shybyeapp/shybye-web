import React from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Progress = () => {
  return (
    <Grid item>
      <Box sx={{ textAlign: 'left', backgroundColor: 'red' }}>
        <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Josefin Sans'}}>
          Progress
        </Typography>
      </ Box>
    </Grid>
  )
}

export default Progress