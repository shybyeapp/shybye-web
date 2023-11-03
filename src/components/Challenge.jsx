import React from 'react'
import Link from "next/link";
import styled from "styled-components";
import { ImageListItem, Button } from "@mui/material";

const Challenge = (props) => {
  const { challenge } = props

  return (
    <DetailContainer>
      <ImageBox>
        <ImageListItem key={challenge.img}>
          <img
            srcSet={`../../${challenge.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`../../${challenge.img}?w=164&h=164&fit=crop&auto=format`}
            alt={challenge.title}
            loading="lazy"
          />
        </ImageListItem>
      </ImageBox>
      <ContentBox>
        <ChallengeName>{challenge.challengeName}</ChallengeName>
        <CompletedNum>Completed 0 times</CompletedNum>
        <Description>
          {challenge.challengeDescription}
        </Description>
        <TipBox>Tip</TipBox>
        <PointsToGet>
          You will earn <b>{challenge.challengePoints} courage points</b> upon completion
        </PointsToGet>
      </ContentBox>
      <Link href="/started">
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#468189',
            color: '#fff',
            fontFamily: 'Josefin Sans',
            fontSize: 18,
            height: 64,
            textTransform: "none",
            width: 310,
            margin: 2,
          }}>
          Start Challenge
        </Button>
      </Link>
    </DetailContainer>
  )
}

const DetailContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 648px;
`;

const ImageBox = styled.div`
  height: 364px;
  margin-bottom: 35px;
  width: 648px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 648px;
`;

const ChallengeName = styled.div`
  font-size: 24px;
  margin-bottom: 16px;
  text-align: left;
`;

const CompletedNum = styled.div`
  margin-bottom: 16px;
  text-align: left;
`;

const Description = styled.div`
  margin-bottom: 16px;
  margin-top: 16px;
  text-align: left;
`;

const TipBox = styled.div`
  background-color: #BFC364;
  border-radius: 5px;
  line-height: 28px;
  margin-bottom: 16px;
  padding-left: 16px;
  text-align: left;
`;

const PointsToGet = styled.div`
  color: #468189;
  font-size: 20px;
  margin-bottom: 16px;
  margin-top: 16px;
  text-align: center;
`;

export default Challenge