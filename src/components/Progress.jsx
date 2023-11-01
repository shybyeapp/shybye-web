import React from 'react'
import Grid from "@mui/material/Grid";
import styled from "styled-components";

const Progress = () => {
  return (
    <Grid
      item
      xs={12}
      md={12}
      sx={{
        minWidth: 420,
        minHeight: 510,
      }}
    >
      <ProgressContainer>
        <BackgroundBox>
          background image
        </BackgroundBox>
        <ProgressBarBox>
          <ProfilePicBox>
            <img
              src='../../../images/badges/speech.png'
              width={100}
              height={100}
            />
            <EditLink>Edit Profile</EditLink>
            <ProgressBar>Progress Bar</ProgressBar>
          </ProfilePicBox>
        </ProgressBarBox>
        <OtherProgressBox>
          other progress
        </OtherProgressBox>
      </ProgressContainer>
    </Grid>
  )
}

const ProgressContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BackgroundBox = styled.div`
  border: 1px solid #DFDFDF;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 150px;
  width: 420px;
`;

const ProgressBarBox = styled.div`
  border: 1px solid #DFDFDF;
  display: flex;
  height: 210px;
  justify-content: center;
  width: 420px;
`;

const ProfilePicBox = styled.div`
  background-color: white;
  border-radius: 50%;
  height: 100px;
  margin: -50px 50px 0;
  width: 100px;
`;

const EditLink = styled.p`
  text-decoration: underline
`;

const ProgressBar = styled.div``;

const OtherProgressBox = styled.div`
  border: 1px solid #DFDFDF;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  height: 150px;
  width: 420px;
`;

export default Progress