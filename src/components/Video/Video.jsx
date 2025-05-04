import styled from "styled-components";
import Container from "../Container/Container";

const VideoContent = styled.video`
  width: 100%;
  margin-top: 60px;
  border-radius: 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Video = ({ videoSrc }) => {
  return (
    <Container>
      <VideoContent
        src={videoSrc}
        controls
        muted
        loop
        autoPlay
        type="video/mp4"
      />
    </Container>
  );
};

export default Video;
