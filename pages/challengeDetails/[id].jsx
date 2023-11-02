import React from 'react'
import Grid from "@mui/material/Grid";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useChallengeContext } from '../../ChallengeContext'
import Link from "next/link";

const challengeDetail = () => {
  const { data } = useChallengeContext()

  const GoBackLink = () => {
    return (
      <Grid item>
        <Link href={`/dashboard`} style={{ textDecoration: "none" }}>
          <div>
            <ArrowBackIcon /><span>Go Back</span>
          </div>
        </Link>
      </Grid>
    )
  }

  if (data) {
    return (
      <>
        <Grid container spacing={4} sx={{ marginTop: 10, paddingLeft: 10, paddingRight: 10 }}>
          <GoBackLink />
          <Grid item><div>{data.challengeId}</div></Grid>
        </Grid>
      </>
    )
  } else {
    return (
      <GoBackLink />
    )
  }
}

export default challengeDetail