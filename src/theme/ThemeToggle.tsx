import React from 'react'
import { useTheme } from './ThemeContext'
import { ThemeToggle as StyledThemeToggle, ThemeIcon } from './components'

export const ThemeToggleButton: React.FC = () => {
  const { mode, toggleTheme } = useTheme()

  return (
    <StyledThemeToggle onClick={toggleTheme}>
      <ThemeIcon>
        {mode === 'light' ? '☀️' : '🌙'}
      </ThemeIcon>
      {mode === 'light' ? 'Light' : 'Dark'}
    </StyledThemeToggle>
  )
}
