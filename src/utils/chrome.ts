export const getCurrentTab = async (): Promise<chrome.tabs.Tab | undefined> => {
  const [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true
  })
  return tab
}