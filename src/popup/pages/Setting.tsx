import { Checkbox } from '@mantine/core'
import { ThemeToggleButton } from '../../theme/ThemeToggle'

export default function Setting() {
  return (
    <div>
      <div>
        <h3>Extension Settings</h3>

        <div>
          <label>
            <Checkbox />
            Enable notifications
          </label>

          <label>
            <Checkbox />
            Auto-save settings
          </label>

          <label>
            <Checkbox />
            Enable advanced features
          </label>
        </div>

        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          Theme Settings
          <ThemeToggleButton />
        </div>

        <button>Save Settings</button>
      </div>
    </div>
  )
}
