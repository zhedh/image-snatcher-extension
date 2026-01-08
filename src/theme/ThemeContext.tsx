import React, { createContext, useContext, useEffect, useState } from 'react'
import { Theme, lightTheme, darkTheme } from './index'
import { ThemeProvider as StyledThemeProvider } from './styled'

type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  mode: ThemeMode
  toggleTheme: () => void
  setTheme: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const THEME_STORAGE_KEY = 'image-snatcher-theme'

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light')
  const [theme, setTheme] = useState<Theme>(lightTheme)

  // Load theme from storage on mount
  useEffect(() => {
    chrome.storage.sync.get([THEME_STORAGE_KEY], (result) => {
      const savedMode = result[THEME_STORAGE_KEY] as ThemeMode
      if (savedMode && (savedMode === 'light' || savedMode === 'dark')) {
        setMode(savedMode)
        setTheme(savedMode === 'dark' ? darkTheme : lightTheme)
      }
    })
  }, [])

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light'
    setMode(newMode)
    setTheme(newMode === 'dark' ? darkTheme : lightTheme)

    // Save to storage
    chrome.storage.sync.set({ [THEME_STORAGE_KEY]: newMode })
  }

  const setThemeMode = (newMode: ThemeMode) => {
    setMode(newMode)
    setTheme(newMode === 'dark' ? darkTheme : lightTheme)

    // Save to storage
    chrome.storage.sync.set({ [THEME_STORAGE_KEY]: newMode })
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      mode,
      toggleTheme,
      setTheme: setThemeMode
    }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
