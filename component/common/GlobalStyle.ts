import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .badge-secondary {
    background-color: ${({ theme }) => theme.colors.cardBackground} !important;
    color: ${({ theme }) => theme.colors.textSecondary} !important;
  }

  hr {
    border-color: ${({ theme }) => theme.colors.border};
  }

  h4 {
    color: ${({ theme }) => theme.colors.text};
  }

  @media print {
    body {
      background-color: #ffffff !important;
      color: #1e293b !important;
    }

    .no-print {
      display: none !important;
    }
  }
`;
