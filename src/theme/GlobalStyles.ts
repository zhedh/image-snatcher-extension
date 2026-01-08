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
  }
`
