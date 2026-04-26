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
  padding: 18px 0;
  background-color: ${({ theme }) => theme.body}ee;
  backdrop-filter: blur(12px);
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  ${Screen.largePhone`
    gap: 4px;
  `};
`;

const NavLink = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-size: 13px;
  font-family: ${Basics.fonts.Montserrat};
  color: ${({ theme, active }) => active ? theme.link : theme.text};
  cursor: pointer;
  padding: 8px 20px;
  border-radius: 6px;
  transition: all 0.2s ease;
  font-weight: ${({ active }) => active ? '600' : '500'};
  letter-spacing: 0.04em;
  text-transform: uppercase;

  &:hover {
    color: ${({ theme }) => theme.link};
    background-color: ${({ theme }) => theme.color}08;
  }

  ${Screen.largePhone`
    font-size: 11px;
    padding: 6px 14px;
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
              active={activeSection === 'work'}
              onClick={() => onSectionChange('work')}
            >
              Work
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
