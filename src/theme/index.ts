export interface Theme {
  colors: {
    primary: string
    primaryHover: string
    primaryLight: string
    secondary: string
    secondaryHover: string
    background: string
    surface: string
    surfaceHover: string
    text: string
    textSecondary: string
    textMuted: string
    border: string
    borderLight: string
    success: string
    warning: string
    error: string
    info: string
  }
  typography: {
    fontFamily: string
    fontSize: {
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
    }
    fontWeight: {
      normal: number
      medium: number
      semibold: number
      bold: number
    }
    lineHeight: {
      tight: number
      normal: number
      relaxed: number
    }
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
  }
  borderRadius: {
    none: string
    sm: string
    md: string
    lg: string
    xl: string
    full: string
  }
  shadows: {
    none: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  breakpoints: {
    sm: string
    md: string
    lg: string
    xl: string
  }
}

export const lightTheme: Theme = {
  colors: {
    // Blue primary color scheme
    primary: '#007bff',
    primaryHover: '#0056b3',
    primaryLight: '#e3f2fd',
    secondary: '#6c757d',
    secondaryHover: '#545b62',
    // Neutral colors
    background: '#ffffff',
    surface: '#f8f9fa',
    surfaceHover: '#e9ecef',
    text: '#212529',
    textSecondary: '#495057',
    textMuted: '#6c757d',
    border: '#dee2e6',
    borderLight: '#f8f9fa',
    // Status colors
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    info: '#17a2b8',
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
}

export const darkTheme: Theme = {
  ...lightTheme,
  colors: {
    // Blue primary color scheme (darker for dark theme)
    primary: '#4dabf7',
    primaryHover: '#339af0',
    primaryLight: '#1e3a5f',
    secondary: '#868e96',
    secondaryHover: '#6c757d',
    // Dark neutral colors
    background: '#1a1a1a',
    surface: '#2d2d2d',
    surfaceHover: '#3d3d3d',
    text: '#ffffff',
    textSecondary: '#e9ecef',
    textMuted: '#adb5bd',
    border: '#495057',
    borderLight: '#343a40',
    // Status colors (same as light theme)
    success: '#28a745',
    warning: '#ffc107',
    error: '#dc3545',
    info: '#17a2b8',
  },
}
