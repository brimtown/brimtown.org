import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../components/Header';
import homepage from '../assets/images/HomepageBackground.jpg';
import Ball from '../components/Ball';
import Layout from '../components/Layout';
import Grid from '../components/Grid';
import FullScreen from '../components/FullScreen';
import theme from '../theme';

interface HomepageWrapperProps {
  backgroundImage: string;
}

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0px, 5px, 0px);
  }

  to {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }
`;

const HomepageWrapper = styled(FullScreen)<HomepageWrapperProps>`
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props): string => props.backgroundImage});
  position: relative;

  ${(props): string => props.theme.mediaQueries.medium} {
    background-position: right;
    background-size: auto 100vh;
  }
`;

const HomepageGrid = styled(Grid)`
  min-height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BodyText = styled.div`
  opacity: 0;
  font-size: 1.75rem;
  font-family: ${(props): string => props.theme.fonts.sectra};
  line-height: 2.25rem;
  animation: ${FadeIn} ease-in 800ms both;

  ${(props): string => props.theme.mediaQueries.small} {
    font-size: 2.5rem;
    line-height: 3.25rem;
  }

  ${(props): string => props.theme.mediaQueries.medium} {
    max-width: 85%;
  }

  ${(props): string => props.theme.mediaQueries.large} {
    max-width: 60%;
  }
`;

const HomepageLink = styled.a`
  color: ${(props): string => props.theme.colors.cream};
  font-family: ${(props): string => props.theme.fonts.americaExtended};
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 200;
  transition: filter 300ms ease;
  text-decoration: underline;

  :hover {
    filter: brightness(115%);
  }

  ${(props): string => props.theme.mediaQueries.small} {
    font-size: 2rem;
  }
`;

const Footer = styled.div`
  padding-bottom: 1.5rem;
  transition: transform 200ms ease-out;

  :hover {
    transform: translate3d(0px, -3px, 0px);
  }

  ${(props): string => props.theme.mediaQueries.small} {
    padding-bottom: 0;
  }
`;

const EmailText = styled.a`
  color: ${(props): string => props.theme.colors.black};
  text-decoration: none;
  font-family: ${(props): string => props.theme.fonts.americaExtended};
  font-size: 1rem;

  ${(props): string => props.theme.mediaQueries.small} {
    font-size: 1.625rem;
  }
`;

const BodyParagraph = styled.p`
  margin-bottom: 2rem;
`;

const IndexPage: React.FC = () => (
  <Layout>
    <HomepageWrapper backgroundImage={homepage}>
      <Ball top={100} left={-20} delay={2000} />
      <HomepageGrid>
        <Header color={theme.colors.black} />
        <BodyText>
          <BodyParagraph>
            Tim is an experienced software engineer in New&nbsp;York City who
            builds for the web.
          </BodyParagraph>
          <BodyParagraph>
            He is a Software Engineer at{' '}
            <HomepageLink href="https://www.datadoghq.com/" target="_">
              Datadog
            </HomepageLink>
            .
          </BodyParagraph>
        </BodyText>
        <Footer>
          <EmailText href="mailto:brown.tim.lee@gmail.com">
            brown.tim.lee@gmail.com
          </EmailText>
        </Footer>
      </HomepageGrid>
    </HomepageWrapper>
  </Layout>
);

export default IndexPage;
