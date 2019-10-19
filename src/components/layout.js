import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import Header from './header';
import Footer from './footer';
import './layout.css';

const theme = {
  colours: {
    black: '#000000',
    white: '#FFFFFF',
  }
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 8vh 84vh 8vh;
`;

const Main = styled.main`
  display: block;
  margin: 1em;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={ theme }>
      <Wrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
