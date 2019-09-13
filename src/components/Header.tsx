import React from 'react';
import styled from 'styled-components';
import SocialIcons from './SocialIcons';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderText = styled.h1`
  font-family: ${(props): string => props.theme.fonts.americaExtended};
  font-size: 1.5rem;
  margin: 0 0 1.45rem 0;
  padding: 0;
  color: ${(props): string => props.theme.colors.black};
  line-height: 1.1;
  letter-spacing: -1px;

  ${(props): string => props.theme.mediaQueries.small} {
    font-size: 2rem;
  }
`;

const Header: React.FC = () => (
  <HeaderWrapper>
    <HeaderText>Tim Brown</HeaderText>
    <SocialIcons />
  </HeaderWrapper>
);

export default Header;
