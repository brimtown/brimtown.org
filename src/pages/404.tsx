import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const PageWrapper = styled.div`
  padding: 3%;

  ${(props): string => props.theme.mediaQueries.medium} {
    padding: 2rem 4rem;
  }
`;
const Heading = styled.h1`
  font-family: Univers, Helvetica, sans-serif;
  font-size: 1.75rem;
  letter-spacing: 1px;
  margin: 0 0 1.45rem 0;
  padding: 0;
  color: ${(props): string => props.theme.black};
  font-weight: bold;
  text-rendering: optimizeLegibility;
  line-height: 1.1;

  ${(props): string => props.theme.mediaQueries.small} {
    font-size: 2.25rem;
  }
`;

const Body = styled.p`
  font-family: Helvetica, sans-serif;
  font-size: 1.25rem;
`;

const NotFoundPage: React.FC = () => (
  <Layout>
    <PageWrapper>
      <Heading>Not Found</Heading>
      <Body>The page you requested couldn't be found.</Body>
      <Body>
        <a href="/">Return home.</a>
      </Body>
    </PageWrapper>
  </Layout>
);

export default NotFoundPage;
