import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../components/Header';
import homepage from '../assets/images/HomepageBackground.jpg';
import SocialIcons from '../components/SocialIcons';
import Ball from '../components/Ball';
import Layout from '../components/Layout';

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

const HomepageWrapper = styled.div<HomepageWrapperProps>`
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props): string => props.backgroundImage});
  display: grid;
  grid-gap: 10px;
  grid-template-areas:
    'head icon'
    'body body'
    'foot foot';
  grid-template-columns: 10fr 2fr;
  grid-template-rows: 1fr 5fr 1fr;
  height: 100vh;
  overflow: hidden;
  padding: 3%;
  position: relative;
  width: 100vw;

  ${(props): string => props.theme.mediaQueries.medium} {
    background-position: right;
    background-size: auto 100vh;
    grid-template-areas:
      'head head icon'
      'body body    .   '
      'foot foot foot';
    grid-template-columns: 9fr 2fr 1fr;
    grid-template-rows: 1fr 3fr 1fr;
    padding: 2rem 4rem;
  }

  ${(props): string => props.theme.mediaQueries.large} {
    grid-template-areas:
      'head head icon'
      'body .    .   '
      'foot foot foot';
    grid-template-columns: 7fr 4fr 1fr;
  }
`;

const BodyText = styled.div`
  opacity: 0;
  font-size: 1.75rem;
  font-family: ${(props): string => props.theme.fonts.sectra};
  line-height: 2.25rem;
  grid-area: body;
  align-self: center;
  animation: ${FadeIn} ease-in 800ms both;

  ${(props): string => props.theme.mediaQueries.small} {
    font-size: 2.5rem;
    line-height: 3.25rem;
  }
`;

const HomepageLink = styled.a`
  color: ${(props): string => props.theme.colors.cream};
  font-family: ${(props): string => props.theme.fonts.americaExtended};
  font-size: 1.625rem;
  text-transform: uppercase;
  font-weight: 200;
  transition: filter 300ms ease;

  :hover {
    filter: brightness(115%);
  }

  ${(props): string => props.theme.mediaQueries.small} {
    font-size: 1.75rem;
  }
`;

const Footer = styled.div`
  grid-area: foot;
  align-self: end;
`;

const EmailText = styled.a`
  color: ${(props): string => props.theme.colors.black};
  text-decoration: none;
  font-family: ${(props): string => props.theme.fonts.americaExtended};
  font-size: 1.2rem;
  height: 2em;
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-position: left center;
  transition: transform 300ms ease;

  :hover {
    transform: translate3d(0px, -3px, 0px);
  }

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
      <Ball top={100} left={-20} delay={2500} />
      <Header />
      <SocialIcons />
      <BodyText>
        <BodyParagraph>
          Tim is an experienced software engineer in New&nbsp;York City who
          builds for the web.
        </BodyParagraph>
        <BodyParagraph>
          He is a Senior Software Engineer at{' '}
          <HomepageLink href="https://www.harrys.com/" target="_">
            Harry's
          </HomepageLink>
          .
        </BodyParagraph>
      </BodyText>
      <Footer>
        <EmailText href="mailto:brown.tim.lee@gmail.com">
          brown.tim.lee@gmail.com
        </EmailText>
      </Footer>
    </HomepageWrapper>
  </Layout>
);

export default IndexPage;
