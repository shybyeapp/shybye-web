import React from 'react'
import Grid from "@mui/material/Grid";
import styled from "styled-components";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Progress = () => {
  return (
    <Grid
      item
      xs={12}
      md={12}
      sx={{
        minWidth: 420,
        minHeight: 240,
        marginTop: 10
      }}
    >
      <AchievementContainer>
        <AchievementBox>
          <TitleBox>
            <Box>
              <Typography variant="h5">
                Next Achievement
              </Typography>
            </Box>
            <Box>
              <ViewAllLink>
                view all
              </ViewAllLink>
            </Box>
          </TitleBox>
          <MedalBox>
            Medals
          </MedalBox>
        </AchievementBox>
      </AchievementContainer>
    </Grid>
  )
}

const AchievementContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AchievementBox = styled.div`
  border: 1px solid #DFDFDF;
  border-radius: 5px;
  min-height: 240px;
`

const TitleBox = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  min-width: 420px;
`;

const MedalBox = styled.div`
  display: flex;
  height: 210px;
  justify-content: center;
  margin-top: 20px;
  width: 420px;
`;

const ViewAllLink = styled.div`
  text-decoration: underline
`;

export default Progress