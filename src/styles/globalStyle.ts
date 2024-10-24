import { createGlobalStyle } from 'styled-components';
import { ITheme } from 'types';
import Basics from './basics';
import Screen from './screen';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,500;0,700;1,400&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Radio+Canada:wght@300;500;600;700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,400;0,600;0,800;0,900;1,500&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,200;8..144,400;8..144,500;8..144,600;8..144,700&display=swap');

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }: ITheme) => theme.body};
    font-family: ${Basics.fonts.RadioCanada};
  }
  
  h1 {
    font-family: ${Basics.fonts.RadioCanada};
    color: ${({ theme }) => theme.color};
  }

  h2 {
    font-family: ${Basics.fonts.RadioCanada};
    font-weight: 600;
    color: ${({ theme }) => theme.subtitle};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: ${({ theme }) => theme.link};
    position: relative;
    transition: ${Basics.transition};
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.link};
      outline: 0;
      &:after {
        width: 100%;
      }
    }

  }

  p {
    font-family: ${Basics.fonts.RadioCanada};
    color: ${({ theme }) => theme.color};
    word-spacing: 2px;
  }

  ol { 
    counter-reset: item;
    list-style-type: none;
    margin-left: -2.5em;
  }
  li { 
    display: block; 
    font-size: 28px;
    font-family: ${Basics.fonts.RadioCanada};
    color: ${Basics.colors.deepBlue};
    font-weight: 500;
    word-spacing: 2px;

    ${Screen.tablet`
      font-size: 22px;
    `};
  }

  li:before { 
    content: counter(item, decimal-leading-zero) ". "; 
    counter-increment: item;
    color: ${Basics.colors.deepBlue};
    font-weight: 400;
  }
`;

export default GlobalStyle;
