import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
}

const Frame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const FrameContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;

const Video: React.FC<Props> = ({ src }) => {
  return (
    <FrameContainer>
      <Frame
        src={src}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </FrameContainer>
  );
};

export default Video;
