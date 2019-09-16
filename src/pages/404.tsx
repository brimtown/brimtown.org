import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Ball from '../components/Ball';
import Header from '../components/Header';

const PageWrapper = styled.div`
  min-height: 85vh;
  overflow: hidden;
  position: relative;
  min-width: 100vw;
  padding: 3%;

  ${(props): string => props.theme.mediaQueries.small} {
    min-height: 100vh;
  }

  ${(props): string => props.theme.mediaQueries.medium} {
    padding: 2rem 4rem;
  }
`;

const Heading = styled.h1`
  font-family: ${(props): string => props.theme.fonts.americaExtended};
  font-size: 1.75rem;
  letter-spacing: 1px;
  margin: 0 0 1.45rem 0;
  padding: 0;
  color: ${(props): string => props.theme.black};
  line-height: 1.1;

  ${(props): string => props.theme.mediaQueries.small} {
    font-size: 2.25rem;
  }
`;

const Body = styled.p`
  font-size: 1.25rem;
`;

const NotFoundPage: React.FC = () => (
  <Layout>
    <PageWrapper>
      <Header />
      <Ball top={100} left={-20} delay={500} />
      <Ball top={300} left={-20} delay={1000} />
      <Ball top={500} left={-20} delay={1500} />
      <Heading>Not Found</Heading>
      <Body>The page you requested couldn't be found.</Body>
      <Body>
        <a href="/">Return home.</a>
      </Body>
    </PageWrapper>
  </Layout>
);

export default NotFoundPage;
