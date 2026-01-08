import { defineManifest } from '@crxjs/vite-plugin'
import pkg from './package.json'

export default defineManifest({
  manifest_version: 3,
  name: pkg.name,
  version: pkg.version,
  icons: {
    16: "public/icons/icon-16.png",
    32: "public/icons/icon-32.png",
    48: "public/icons/icon-48.png",
    128: "public/icons/icon-128.png"
  },
  background: {
    service_worker: 'src/background.ts',
  },
  action: {
    default_icon: {
      48: "public/icons/icon-48.png",
    },
    default_popup: 'src/popup/index.html',
  },
  permissions: [
    'activeTab',
    "storage",
    "downloads",
    "scripting",
    'sidePanel',
    'contentSettings',
    'storage',
  ],
  content_scripts: [{
    js: ['src/content/main.tsx'],
    matches: ['https://*/*'],
  }],
  side_panel: {
    default_path: 'src/sidepanel/index.html',
  },
})
