import styled from "styled-components";

export default function StatusBox(props) {
  const { img, title } = props;

  return (
    <StatusContainer>
      <StatusWrapper>
        <ImgBox>
          <img src={`../../../images/status/${img}.png`} />
        </ImgBox>
        <Score>0</Score>
      </StatusWrapper>
      <TitleWrapper>
        <Text>{title}</Text>
      </TitleWrapper>
    </StatusContainer>
  );
}

const StatusContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 10px;
  justify-content: center;
  width: 120px;
`;

const StatusWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 80px;
  width: 94px;
`;

const ImgBox = styled.div`
  align-items: center;
  display: flex;
  height: 60px;
  width: 94px;
`;

const Score = styled.div`
  font-size: 40px;
  height: 46px;
  line-height: 50px;
  width: 94px;
`;

const TitleWrapper = styled.div`
  height: 46px;
  margin-bottom: 8px;
  width: 60px;
`;

const Text = styled.p`
  font-size: 1em;
`;
