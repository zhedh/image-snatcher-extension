import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '../theme/ThemeContext'
import { MantineProvider } from '@mantine/core'
import App from './App.tsx'
import '@mantine/core/styles.css'
import './index.css'
import { NotificationProvider } from '../store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <MantineProvider>
        <NotificationProvider>
          <App />
        </NotificationProvider>
      </MantineProvider>
    </ThemeProvider>
  </StrictMode>
)
