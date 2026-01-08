import styled from './styled'

// Navigation Components
export const Nav = styled.nav`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.md};
  border-bottom: 1px solid ${props => props.theme.colors.border};
  margin-bottom: ${props => props.theme.spacing.xl};
  background-color: ${props => props.theme.colors.surface};
`

export const NavLink = styled.a<{ $active?: boolean }>`
  text-decoration: ${props => props.$active ? 'underline' : 'none'};
  font-weight: ${props => props.$active ? props.theme.typography.fontWeight.bold : props.theme.typography.fontWeight.normal};
  color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.text};
  font-size: ${props => props.theme.typography.fontSize.base};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${props => props.theme.colors.primaryHover};
    text-decoration: underline;
  }
`

export const Card = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.sm};
  margin-bottom: ${props => props.theme.spacing.lg};
`

// Form Components
export const Button = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  border-radius: ${props => props.theme.borderRadius.md};
  border: 1px solid transparent;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  font-size: ${props => props.theme.typography.fontSize.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};

  ${props => {
    switch (props.$variant) {
      case 'secondary':
        return `
          background-color: ${props.theme.colors.secondary};
          color: white;

          &:hover {
            background-color: ${props.theme.colors.secondaryHover};
          }
        `
      default:
        return `
          background-color: ${props.theme.colors.primary};
          color: white;

          &:hover {
            background-color: ${props.theme.colors.primaryHover};
          }
        `
    }
  }}

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  font-size: ${props => props.theme.typography.fontSize.base};
  font-family: inherit;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.colors.primaryLight};
  }

  &::placeholder {
    color: ${props => props.theme.colors.textMuted};
  }
`

export const Label = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.sm};
  font-weight: ${props => props.theme.typography.fontWeight.medium};
  color: ${props => props.theme.colors.text};
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  accent-color: ${props => props.theme.colors.primary};
  margin-right: ${props => props.theme.spacing.sm};
`


export const Subtitle = styled.h2`
  font-size: ${props => props.theme.typography.fontSize['2xl']};
  font-weight: ${props => props.theme.typography.fontWeight.semibold};
  color: ${props => props.theme.colors.text};
  margin: 0 0 ${props => props.theme.spacing.md} 0;
  line-height: ${props => props.theme.typography.lineHeight.tight};
`

// Theme Toggle Components
export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  padding: ${props => props.theme.spacing.sm};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: ${props => props.theme.borderRadius.md};
  background-color: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: ${props => props.theme.typography.fontSize.sm};

  &:hover {
    background-color: ${props => props.theme.colors.surfaceHover};
    border-color: ${props => props.theme.colors.primary};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`

export const ThemeIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-size: 12px;
  font-weight: bold;
`
