import styled from 'styled-components';

const Grid = styled.div`
  padding: 3%;

  ${(props): string => props.theme.mediaQueries.medium} {
    padding: 2rem 4rem;
  }
`;

export default Grid;
