import React from "react";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import styled from "styled-components";

export default function GoBackLink() {
  return (
    <Link href={`/dashboard`} style={{ textDecoration: "none" }}>
      <BackLinkContainer>
        <BackLinkBox>
          <ArrowBackIcon />
        </BackLinkBox>
        <BackLinkBox>
          <span>Go Back</span>
        </BackLinkBox>
      </BackLinkContainer>
    </Link>
  );
}

const BackLinkContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-left: 10px;
`;

const BackLinkBox = styled.div`
  margin: 10px;
`;
