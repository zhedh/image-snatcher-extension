import { ActionType } from '../../types'
import { captureImages } from './image_capture'

export const setup = () => {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log('request: ', request)
    console.log('sender: ', sender)

    // 检测脚本是否已经注入完成
    if (request.action === 'ping') {
      sendResponse({ pong: true })
      return true
    }

    // 获取当前页面的图片
    if (request.action === ActionType.CAPTURE) {
      const options = request.payload

      try {
        captureImages(options)
        .then((images) => sendResponse({ success: true, images }))
        .catch((error) => {
          console.log('captureImages___error: ', error)
          sendResponse({ success: false, error: error.message })
        })
      } catch (error) {
        console.log('获取当前页面的图片-captureImages___error: ', error)
        sendResponse({ success: false, error: error })
      }

      
      return true // Keep the message channel open for async response
    }
   

    if (request.action === 'getPageInfo') {
      sendResponse({
        title: document.title,
        url: window.location.href,
        imagesCount: document.querySelectorAll('img').length
      })
    }
  })
}