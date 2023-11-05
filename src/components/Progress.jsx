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
        <ProgressBox>
          <ProfileBox>
            <ProfilePicBox>
              <img
                src='../../../images/badges/speech.png'
                width={100}
                height={100}
              />
              <EditLink>Edit Profile</EditLink>
            </ProfilePicBox>

            <ProgressBarBox>
              <LevelBox>
                <LevelText>Level</LevelText>
                <Level>0</Level>
              </LevelBox>
              <BarBox>
                <ProgressBar max="100" value="80" />
              </BarBox>
              <PointsBox>
                <Points>0/5 pts</Points>
              </PointsBox>
            </ProgressBarBox>
          </ProfileBox>
          <StatusContainer>
            Status Container
          </StatusContainer>
        </ProgressBox>
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

const ProgressBox = styled.div`
  align-items: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 480px;
  justify-content: center;
  width: 400px;
`;

const ProfileBox = styled.div`
  align-items: center;
  border: 1px solid #DFDFDF;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-around;
  width: 400px;
`;

const ProfilePicBox = styled.div`
  background-color: white;
  border: 1px solid #DFDFDF;
  border-radius: 50%;
  height: 100px;
  width: 100px;
`;

const EditLink = styled.p`
  text-decoration: underline
`;

const ProgressBarBox = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: space-around;
  width: 360px;
`;

const LevelBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 50px;
`;

const LevelText = styled.div`
  font-size: 16px;
  margin: auto;
`;

const Level = styled.div`
  font-size: 36px;
`;

const BarBox = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  justify-content: center;
  width: 300px;
`;

const ProgressBar = styled.progress`
  appearance: none;
  width: 90%;
  height: 30px;
  border-radius: 20px;
  &::-webkit-progress-bar {
    border-radius: 20px;
  }
  &::-webkit-progress-value {
    background-color: #9DBEBB;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
  }
  &::-moz-progress-bar {
    background-color: #9DBEBB;
  }
`;

const PointsBox = styled.div`
  height: 60px;
  width: 80px;
`;

const Points = styled.p`
  line-height: 24px;
  text-align: center;
`;

const StatusContainer = styled.div`
  align-items: center;
  border: 1px solid #DFDFDF;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top: none;
  display: flex;
  flex-direction: column;
  height: 120px;
  justify-content: space-around;
  width: 400px;
`;

export default Progress