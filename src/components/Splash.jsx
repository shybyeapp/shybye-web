import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { ImageListItem, Button } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";

export default function Splash() {
  return (
    <DetailContainer>
      <ImageBox>
        <ImageListItem key={1}>
          <img
            srcSet={`../../images/challenges/startedDino.png?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`../../images/challenges/startedDino.png?w=164&h=164&fit=crop&auto=format`}
            alt="qweq"
            loading="lazy"
          />
        </ImageListItem>
      </ImageBox>
      <ContentBox>
        <Title>You have started your first challenge!</Title>
        <SubTitle>Go out there an complete your first challenge.</SubTitle>
      </ContentBox>
      <Link href="/dashboard">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#468189",
            color: "#fff",
            fontSize: 18,
            height: 64,
            textTransform: "none",
            width: 420,
            margin: 2,
          }}
        >
          <IconBox>
            <SpaceDashboardIcon />
          </IconBox>
          Return to your Dashboard
        </Button>
      </Link>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 648px;
`;

const ImageBox = styled.div`
  height: 156px;
  margin-bottom: 35px;
  width: 170px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 648px;
`;

const Title = styled.div`
  font-size: 36px;
  line-height: 42px;
  margin-bottom: 16px;
  text-align: center;
  width: 588px;
`;

const SubTitle = styled.div`
  margin-bottom: 70px;
`;

const IconBox = styled.span`
  margin-right: 12px;
  margin-top: 8px;
`;
