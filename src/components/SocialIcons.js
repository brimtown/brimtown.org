import React from 'react';
import styled from 'styled-components';
import Github from '../assets/images/GithubIcon.svg';
import Twitter from '../assets/images/TwitterIcon.svg';
import Linkedin from '../assets/images/LinkedinIcon.svg';

const SocialIconsWrapper = styled.div`
  grid-area: icon;
  display: flex;
  margin-top: 6px;
  justify-content: space-between;
`;

const Icon = styled.a`
  width: 20px;
  height: 20px;
  margin: 0px 5px;
  transition: transform 300ms ease;

  :hover {
    transform: rotate(-15deg);
  }

  @media (min-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;

const IconImage = styled.img`
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
`;

const SocialIcon = ({ path, source, alt }) => (
  <Icon href={path} target="_">
    <IconImage src={source} alt={alt} />
  </Icon>
);

const SocialIcons = () => (
  <SocialIconsWrapper>
    <SocialIcon
      source={Github}
      path="https://github.com/brimtown"
      alt="GitHub logo"
    />
    <SocialIcon
      source={Twitter}
      path="https://twitter.com/_brimtown"
      alt="Twitter logo"
    />
    <SocialIcon
      source={Linkedin}
      path="https://www.linkedin.com/in/brimtown/"
      alt="LinkedIn logo"
    />
  </SocialIconsWrapper>
);

export default SocialIcons;
