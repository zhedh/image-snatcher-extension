import {  Card, Subtitle, Label, Checkbox, Button } from '../../theme/components'
import { ThemeToggleButton } from '../../theme/ThemeToggle'

export default function Setting() {
  return (
    <div>
      <Card>
        <Subtitle>Extension Settings</Subtitle>

        <div>
          <Label>
            <Checkbox />
            Enable notifications
          </Label>

          <Label>
            <Checkbox />
            Auto-save settings
          </Label>

          <Label>
            <Checkbox />
            Enable advanced features
          </Label>
        </div>

        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          Theme Settings
          <ThemeToggleButton />
        </div>

        <Button>Save Settings</Button>
      </Card>
    </div>
  )
}
