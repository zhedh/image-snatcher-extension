// Background service worker for the image snatcher extension
// This keeps the extension context alive for message passing

chrome.runtime.onInstalled.addListener(() => {
  console.log('Image Snatcher extension installed')
})

// Keep the service worker alive
chrome.runtime.onMessage.addListener((request, _sender, sendResponse) => {
  // Handle any background-specific messages if needed
  if (request.action === 'keepAlive') {
    sendResponse({ status: 'alive' })
    return true
  }

  // For other messages, let them pass through to content scripts
  return false
})
