import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const PageWrapper = styled.div`
  padding: 3%;

  @media (min-width: 768px) {
    padding: 2rem 4rem;
  }
`;
const Heading = styled.h1`
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
  color: ${(props): string => props.theme.black};
  font-weight: bold;
  text-rendering: optimizeLegibility;
  line-height: 1.1;

  @media (min-width: 480px) {
    font-size: 2.25rem;
  }
`;

const Body = styled.p`
  font-family: Helvetica, sans-serif;
  font-size: 1.25rem;
`;

const NotFoundPage = () => (
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
