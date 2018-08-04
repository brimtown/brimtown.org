import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  grid-area: head;
`;

const HeaderText = styled.h1`
  font-family: Univers, Helvetica, sans-serif;
  font-size: 1.75rem;
  letter-spacing: 1px;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: ${props => props.theme.black};
  font-weight: bold;
  text-rendering: optimizeLegibility;
  line-height: 1.1;

  @media (min-width: 480px) {
    font-size: 2.25rem;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderText>Tim Brown</HeaderText>
  </HeaderWrapper>
);

export default Header;
