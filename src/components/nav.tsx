import React from 'react';
import styled from 'styled-components';
import { Screen, Basics } from 'styles';
import { Toggle } from 'utils';

const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.body};
  border-bottom: 1px solid ${({ theme }) => theme.color}15;
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: ${Basics.transition};
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  ${Screen.largePhone`
    gap: 20px;
  `};
`;

const NavLink = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-size: ${Basics.fontSize.small};
  color: ${({ theme, active }) => active ? theme.link : theme.text};
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 20px;
  transition: ${Basics.transition};
  font-weight: ${({ active }) => active ? '600' : '400'};

  &:hover {
    color: ${({ theme }) => theme.link};
    background-color: ${({ theme }) => theme.color}10;
  }

  ${Screen.largePhone`
    font-size: ${Basics.fontSize.xsmall};
    padding: 6px 12px;
  `};
`;

const ThemeToggleContainer = styled.div`
  margin-left: 20px;
  ${Screen.largePhone`
    margin-left: 10px;
  `};
`;

interface NavProps {
  toggleTheme: () => void;
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Nav = ({ toggleTheme, activeSection, onSectionChange }: NavProps) => (
    <NavContainer>
        <NavContent>
            <NavLink
              active={activeSection === 'home'}
              onClick={() => onSectionChange('home')}
            >
              Home
            </NavLink>
            <NavLink
              active={activeSection === 'about'}
              onClick={() => onSectionChange('about')}
            >
              About
            </NavLink>
            <NavLink
              active={activeSection === 'contact'}
              onClick={() => onSectionChange('contact')}
            >
              Contact
            </NavLink>
            <ThemeToggleContainer>
                <Toggle toggleTheme={toggleTheme} />
            </ThemeToggleContainer>
        </NavContent>
    </NavContainer>
);

export default Nav;
