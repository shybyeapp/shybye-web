import React from 'react'
import Grid from "@mui/material/Grid";
import { useChallengeContext } from '../../ChallengeContext'
import Challenge from "@/components/Challenge";
import GoBackLink from "@/components/GoBackLink";

const challengeDetail = () => {
  const { data } = useChallengeContext()

  return (
    <Grid
      container
      spacing={4}
      direction="column"
      sx={{ marginTop: 2, }}
    >
      <Grid item>
        <GoBackLink />
      </Grid>
      <Grid item xs={12} md={12}>
        {data && (<Challenge challenge={data} />)}
      </Grid>
    </Grid>
  )
}

export default challengeDetail