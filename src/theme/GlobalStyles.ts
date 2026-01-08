import { createGlobalStyle } from './styled'

export const GlobalStyles = createGlobalStyle`
  /* Chrome Extension Style Isolation */
  #${() => 'chrome-extension-' + chrome.runtime.id} {
    /* Reset and base styles */
    * {
      box-sizing: border-box;
    }

    html, body {
      margin: 0;
      padding: 0;
      font-family: ${({ theme }) => theme.typography.fontFamily};
      font-size: ${({ theme }) => theme.typography.fontSize.base};
      line-height: ${({ theme }) => theme.typography.lineHeight.normal};
      color: ${({ theme }) => theme.colors.text};
      background-color: ${({ theme }) => theme.colors.background};
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    /* Extension specific styles */
    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }

    .logo:hover {
      filter: drop-shadow(0 0 2em ${({ theme }) => theme.colors.primary});
    }

    .logo.react:hover {
      filter: drop-shadow(0 0 2em ${({ theme }) => theme.colors.primary});
    }

    .logo.crx:hover {
      filter: drop-shadow(0 0 2em ${({ theme }) => theme.colors.primary});
    }

    /* Button styles */
    button {
      border-radius: ${({ theme }) => theme.borderRadius.md};
      border: 1px solid transparent;
      padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
      font-size: ${({ theme }) => theme.typography.fontSize.sm};
      font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
      font-family: inherit;
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        background-color: ${({ theme }) => theme.colors.primaryHover};
      }

      &:active {
        transform: translateY(1px);
      }
    }

    /* Input styles */
    input[type="checkbox"] {
      accent-color: ${({ theme }) => theme.colors.primary};
    }

    /* Link styles */
    a {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.colors.primaryHover};
        text-decoration: underline;
      }
    }

    /* Form elements */
    label {
      display: block;
      margin-bottom: ${({ theme }) => theme.spacing.sm};
      font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    }

    /* Card-like containers */
    .card {
      background-color: ${({ theme }) => theme.colors.surface};
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-radius: ${({ theme }) => theme.borderRadius.lg};
      padding: ${({ theme }) => theme.spacing.lg};
      box-shadow: ${({ theme }) => theme.shadows.sm};
    }
  }
`
