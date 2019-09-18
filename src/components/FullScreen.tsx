import styled from 'styled-components';

const FullScreen = styled.div`
  min-height: 85vh;
  min-width: 100vw;
  overflow: hidden;

  ${(props): string => props.theme.mediaQueries.small} {
    min-height: 100vh;
  }
`;

export default FullScreen;
