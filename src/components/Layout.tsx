import React from 'react';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import theme, { GlobalStyle } from '../theme';
import { Sectra, AmericaExtended } from '../theme/typography';
import favicon from '../favicon.png';

const Layout: React.FC = ({ children }) => {
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
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href={`${AmericaExtended.woff2}`}
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
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

export default Layout;
