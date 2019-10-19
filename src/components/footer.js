import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
  align-items: center;
  display: flex;
  padding: 0 1em;
`;

const Footer = () => (
  <Foot>
    &copy; { new Date().getFullYear() }
  </Foot>
);

export default Footer;
