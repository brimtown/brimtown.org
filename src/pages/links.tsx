import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import theme from '../theme';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Grid from '../components/Grid';
import Video from '../components/Video';

const List = styled.ul`
  padding-left: 0.5rem;
  margin-left: 1rem;
  margin-bottom: 1.5rem;
`;

const Item = styled.li`
  font-size: 1rem;
  margin-bottom: 0.5rem;

  ${(props): string => props.theme.mediaQueries.small} {
    font-size: 1.25rem;
  }
`;

const Link = styled.a`
  color: ${(props): string => props.theme.colors.orange};
  transition: color ${(props): string => props.theme.animations.fast};

  :visited {
    color: ${(props): string => props.theme.colors.burnt};
  }

  :hover {
    color: ${(props): string => props.theme.colors.cream};
  }
`;

const Heading = styled.h2`
  font-family: ${(props): string => props.theme.fonts.americaExtended};
  color: ${(props): string => props.theme.colors.burnt};
  font-size: 1.25rem;
  line-height: 1.5;

  ${(props): string => props.theme.mediaQueries.small} {
    font-size: 1.75rem;
  }
`;

const PageWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Links: React.FC = () => (
  <List>
    <Item>
      "The Forge" - Harry's Approach to the Multi-Brand Component Library{' '}
      <Link href="https://www.designsystems.com/the-forge-harrys-approach-to-multi-brand-design-systems/">
        (designsystems.com)
      </Link>
    </Item>
    <Item>
      Flamingo Site Case Study{' '}
      <Link href="https://www.gatsbyjs.org/blog/2019-01-30-flamingo-case-study/">
        (gatsbyjs.org)
      </Link>
    </Item>
  </List>
);

const Talks: React.FC = () => (
  <List>
    <Item>
      "Statically Generating Performance" - NY Web Performance
      <Video src="https://www.youtube.com/embed/TDFuH1qexLk" />
    </Item>
    <Item>
      "Building Flamingo with Gatsby" - Gatsby Days NY
      <Video src="https://www.youtube.com/embed/cp6nWSBEM0o" />
    </Item>
    <Item>
      E-commerce and Performance Panel - JAMStack Conf
      <Video src="https://www.youtube.com/embed/oRG1E0xLB4U" />
    </Item>
    <Item>
      "Statically Generating Performance" -{' '}
      <Link href="https://www.youtube.com/watch?v=uq7B_W1xIw0">
        {' '}
        Dev Stackup
      </Link>
    </Item>
    <Item>
      "What Makes Gatsby Great" -{' '}
      <Link href="https://www.youtube.com/watch?v=lunJFup4YAg&t=30m13s">
        {' '}
        Webinar
      </Link>
    </Item>
    <Item>DevWeek NYC</Item>
  </List>
);

const Social: React.FC = () => (
  <List>
    <Item>
      <Link href="https://twitter.com/_brimtown">Twitter</Link>
    </Item>
    <Item>
      <Link href="https://github.com/brimtown">GitHub</Link>
    </Item>
    <Item>
      <Link href="https://linkedin.com/in/brimtown">LinkedIn</Link>
    </Item>
  </List>
);

const LinksPage: React.FC = () => (
  <>
    <Helmet>
      <style>{`body { background-color: ${theme.colors.lightcream}; transition: background-color ${theme.animations.fast}; }`}</style>
      <title>Tim Brown | Links</title>
    </Helmet>
    <Layout>
      <Grid>
        <Header />
        <PageWrapper>
          <Heading>Talks</Heading>
          <Talks />
          <Heading>Links</Heading>
          <Links />
          <Heading>Social</Heading>
          <Social />
        </PageWrapper>
      </Grid>
    </Layout>
  </>
);

export default LinksPage;
