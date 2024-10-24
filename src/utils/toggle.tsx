import React from 'react';
import { func } from 'prop-types';
import styled from 'styled-components';
import { Screen } from 'styles';
import { Brightness } from 'components/svg';

const Toggle = ({ toggleTheme }: any) => (
    <BrightnessContainer onClick={toggleTheme} >
      <Brightness />
    </BrightnessContainer>
);

Toggle.propTypes = {
  toggleTheme: func.isRequired,
};

export default Toggle;

/**
 * styles
 */
const BrightnessContainer = styled.button`
  position: fixed;
  border: none;
  background-color: transparent;
  outline: none;
  margin-top: 10px;
  right: 50px;
  bottom: 50px;
  svg {
    fill: ${({ theme }) => theme.button};
    width: 30px;
    height: 30px;
    ${Screen.miniTablet`
      width: 25px;
      height: 25px;
    `};
  }
  ${Screen.pad`
    right: 100px;
    margin-top: 20px;
  `};
  ${Screen.miniTablet`
    right: 25px;
    margin-top: 10px;
  `};

  &:focus{
    outline: none;
  }
`;
