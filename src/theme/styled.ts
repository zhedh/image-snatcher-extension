import styled, { css, createGlobalStyle, keyframes, ThemeProvider } from 'styled-components'

import { Theme } from './index'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled
