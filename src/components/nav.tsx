import React from 'react';
import styled from 'styled-components';
import { Screen } from 'styles';
import { Toggle } from 'utils';

const NavContainer = styled.div`
  position: fixed;
  height: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  background-color: transparent;
  width: 100%;
  ${Screen.largePhone`
    height: 0px;
  `};
`;

const Nav = ({ toggleTheme }: any) => (
    <NavContainer>
        <Toggle toggleTheme={toggleTheme} />
    </NavContainer>
);

export default Nav;
