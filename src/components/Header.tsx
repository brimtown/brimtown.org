import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  grid-area: head;
`;

const HeaderText = styled.h1`
  font-family: ${(props): string => props.theme.fonts.univers};
  font-size: 1.75rem;
  margin: 0 0 1.45rem 0;
  padding: 0;
  color: ${(props): string => props.theme.colors.black};
  font-weight: bold;
  text-rendering: optimizeLegibility;
  line-height: 1.1;

  ${(props): string => props.theme.mediaQueries.small} {
    font-size: 2rem;
  }
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <HeaderText>Tim Brown</HeaderText>
  </HeaderWrapper>
);

export default Header;
