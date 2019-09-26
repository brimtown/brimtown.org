import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Grid from '../components/Grid';
import FullScreen from '../components/FullScreen';
import Ball from '../components/Ball';
import Header from '../components/Header';
import theme from '../theme';

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
  font-family: Helvetica, sans-serif;
  font-size: 1.25rem;
`;

const NotFoundPage: React.FC = () => (
  <Layout>
    <FullScreen>
      <Ball top={100} left={-20} delay={500} />
      <Ball top={100} left={-20} delay={750} />
      <Ball top={100} left={-20} delay={1000} />
      <Grid>
        <Header color={theme.colors.black} />
        <Heading>Oops</Heading>
        <Body>The page you requested couldn't be found.</Body>
      </Grid>
    </FullScreen>
  </Layout>
);

export default NotFoundPage;
