import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import theme, { GlobalStyle } from '../theme';
import { Sectra, Univers } from '../theme/typography';
import favicon from '../favicon.png';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta
          name="description"
          content="Tim Brown is an experienced software engineer in New York City who builds for the web."
        />
        <meta name="keywords" content="Tim Brown, software engineer" />
        <link
          rel="preload"
          href={`${Sectra.woff2}`}
          as="font"
          type="font/woff2"
          crossOrigin
        />
        <link
          rel="preload"
          href={`${Univers.woff2}`}
          as="font"
          type="font/woff2"
          crossOrigin
        />
        <link rel="shortcut icon" type="image/png" href={`${favicon}`} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <div>{children}</div>
        </>
      </ThemeProvider>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;
