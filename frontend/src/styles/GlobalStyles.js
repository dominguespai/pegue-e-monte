import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    line-height: ${({ theme }) => theme.typography.lineHeight.tight};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: ${({ theme }) => theme.transitions.default};
    
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    transition: ${({ theme }) => theme.transitions.default};
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Smooth scrolling */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.primary} transparent;
  }

  /* WebKit scrollbar styling */
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  /* Utility classes */
  .container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.xl};

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: 0 ${({ theme }) => theme.spacing.lg};
    }
  }

  .section {
    padding: ${({ theme }) => theme.spacing['5xl']} 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding: ${({ theme }) => theme.spacing['3xl']} 0;
    }
  }

  /* Animation classes */
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* Button styles */
  .btn {
    display: inline-block;
    padding: ${({ theme }) => theme.buttons.primary.padding};
    font-size: ${({ theme }) => theme.buttons.primary.fontSize};
    text-transform: ${({ theme }) => theme.buttons.primary.textTransform};
    transition: ${({ theme }) => theme.buttons.primary.transition};
    text-align: center;
    
    &.btn-primary {
      background: ${({ theme }) => theme.buttons.primary.background};
      color: ${({ theme }) => theme.buttons.primary.color};
      border-radius: ${({ theme }) => theme.buttons.primary.borderRadius};
      
      &:hover {
        background: ${({ theme }) => theme.buttons.primary.hoverBackground};
        color: ${({ theme }) => theme.buttons.primary.hoverColor};
      }
    }
    
    &.btn-secondary {
      background: ${({ theme }) => theme.buttons.secondary.background};
      color: ${({ theme }) => theme.buttons.secondary.color};
      border: ${({ theme }) => theme.buttons.secondary.border};
      border-radius: ${({ theme }) => theme.buttons.secondary.borderRadius};
      
      &:hover {
        background: ${({ theme }) => theme.buttons.secondary.hoverBackground};
        color: ${({ theme }) => theme.buttons.secondary.hoverColor};
      }
    }
  }
`;

export default GlobalStyles;
