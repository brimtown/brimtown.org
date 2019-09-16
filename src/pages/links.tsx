import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import theme from '../theme';
import Layout from '../components/Layout';
import Header from '../components/Header';

const Heading = styled.h3`
  font-family: ${(props): string => props.theme.fonts.america};
  font-size: 1rem;
  font-weight: bolder;
  margin: 0 0 0.5rem 0;
  padding: 0;
  color: ${(props): string => props.theme.colors.burnt};

  ${(props): string => props.theme.mediaQueries.small} {
    font-size: 1.25rem;
  }
`;

const Body = styled.p`
  font-size: 1.25rem;
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3%;

  ${(props): string => props.theme.mediaQueries.medium} {
    padding: 2rem 4rem;
  }
`;

const List = styled.ul`
  padding-left: 0.5rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
`;

const ListLink: React.FC = ({ to, children }) => {
  return (
    <li>
      <a href={to} target="_">
        {children}
      </a>
    </li>
  );
};

const Moo = styled.h1`
  font-family: ${(props): string => props.theme.fonts.americaExtended};
  color: ${(props): string => props.theme.colors.burnt};
  font-size: 1.75rem;
`;

const Foo = styled.div`
  margin-left: 3rem;
`;

const Coo = styled.div`
  width: 40%;
`;

const LinksPage: React.FC = () => (
  <>
    <Helmet>
      <style>{`body { background-color: ${theme.colors.lightcream}; transition: background-color ${theme.animations.fast}; }`}</style>
    </Helmet>
    <Layout>
      <LinksWrapper>
        <Header />
        <Foo>
          <Coo>
          <Moo>Links</Moo>
          <Heading>Press</Heading>
          <Body>Here are my links</Body>
          <List>
            <ListLink to="https://www.designsystems.com/the-forge-harrys-approach-to-multi-brand-design-systems/">
              "The Forge - Harry's Approach to the Multi-Brand Component
              Library" (Figma Design Systems)
            </ListLink>
            <ListLink to="https://www.gatsbyjs.org/blog/2019-01-30-flamingo-case-study/">
              Flamingo Site Case Study (Gatsby)
            </ListLink>
          </List>
          <Heading>Talks</Heading>
          <Body>Here are my talks</Body>
          <List>
            <ListLink to="https://www.youtube.com/watch?v=TDFuH1qexLk">
              "Statically Generating Performance" - NY Web Performance
            </ListLink>
            <ListLink to="https://www.youtube.com/watch?v=cp6nWSBEM0o">
              Building Flamingo with Gatsby - Gatsby Days NY
            </ListLink>
            <ListLink to="https://www.youtube.com/watch?v=oRG1E0xLB4U">
              Ecommerce and Performance Panel - JAMStack Conf
            </ListLink>
            <ListLink to="https://www.youtube.com/watch?v=uq7B_W1xIw0">
              "Statically Generating Performance" - Dev Stackup
            </ListLink>
            <ListLink to="https://www.youtube.com/watch?v=lunJFup4YAg&t=30m13s">
              "What Makes Gatsby Great" - Webinar
            </ListLink>
            <li>DevWeek NYC</li>
          </List>
          <Heading>Social</Heading>
          <List>
            <ListLink to="https://twitter.com/_brimtown">Twitter</ListLink>
            <ListLink to="https://github.com/brimtown">GitHub</ListLink>
            <ListLink to="https://linkedin.com/in/brimtown">LinkedIn</ListLink>
          </List>
        </Coo>
        </Foo>
      </LinksWrapper>
    </Layout>
  </>
);

export default LinksPage;
