import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const H1 = styled.h1`
  margin: 0;
`;

const Head = styled.header`
  align-items: center;
  background-color: ${props => props.theme.colours.black};
  display: flex;
  padding: 0.5em 1em;
`;

const StyledLink = styled(({ noUnderline, ...rest }) => <Link { ...rest } />)`
  color: ${props => props.theme.colours.white};
  text-decoration: ${props => props.noUnderline ? 'none' : 'underline'};
`;

const Header = ({ siteTitle }) => (
  <Head>
    <H1>
      <StyledLink noUnderline to="/">
        {siteTitle}
      </StyledLink>
    </H1>
  </Head>
);

Header.defaultProps = {
  siteTitle: '',
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
