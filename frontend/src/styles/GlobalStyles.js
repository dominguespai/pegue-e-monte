import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Adiciona smooth scroll para elementos com scroll */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.primary} transparent;
  }

  /* Estiliza a scrollbar para navegadores WebKit */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
  }

  /* Classes utilitárias */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section {
    padding: 5rem 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .section {
      padding: 3rem 0;
    }
  }
`;

export default GlobalStyles;
