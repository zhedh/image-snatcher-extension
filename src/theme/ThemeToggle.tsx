import React from 'react'
import { useTheme } from './ThemeContext'

export const ThemeToggleButton: React.FC = () => {
  const { mode, toggleTheme } = useTheme()

  return (
    <div onClick={toggleTheme}>
      <i>
        {mode === 'light' ? '☀️' : '🌙'}
      </i>
      {mode === 'light' ? 'Light' : 'Dark'}
    </div>
  )
}
