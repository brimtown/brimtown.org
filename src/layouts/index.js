import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import theme from '../theme';
import favicon from '../favicon.png';

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content:
              'Tim Brown is an experienced software engineer in New York City who builds for the web.',
          },
          { name: 'keywords', content: 'Tim Brown, software engineer' },
        ]}
        link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
      />
      <div>{children()}</div>
    </div>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
