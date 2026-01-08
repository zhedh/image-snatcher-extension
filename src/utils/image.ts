import { ImageInfo, ImageType } from '../types'
import { generateId } from './base'

const createImageInfo = (img: HTMLImageElement, resolve: (image: ImageInfo) => void, reject: (error: Error) => void) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  const width = img.naturalWidth || img.width || 0
  const height = img.naturalHeight || img.height || 0

  // 如果尺寸仍然为0，可能是隐藏图片或加载失败
  if (width === 0 || height === 0) {
    // 检查是否是隐藏图片
    const style = window.getComputedStyle(img)
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') {
      reject(new Error('Image is hidden or failed to load'))
      return
    }
  }

  canvas.width = width
  canvas.height = height

  if (ctx && width > 0 && height > 0) {
    ctx.drawImage(img, 0, 0)
  }

  let thumbnail = ''
  try {
    thumbnail = canvas.toDataURL('image/jpeg', 0.3)
  } catch (error) {
    console.log('Error converting image to thumbnail:', error)
    thumbnail = img.src
  }

  resolve({
    id: generateId(),
    url: img.src,
    alt: img.alt || '',
    title: img.title || '',
    width: width,
    height: height,
    size: 0, // Will be calculated later
    type: ImageType.IMG,
    thumbnail,
    originalUrl: img.src
  })
}

export const getImageInfo = (img: HTMLImageElement): Promise<ImageInfo> => new Promise((resolve, reject) => {
  // 如果图片已经加载完成，直接处理
  if (img.complete && img.naturalWidth > 0) {
    createImageInfo(img, resolve, reject)
    return
  }

  // 如果图片还没加载，等待加载完成
  const handleLoad = () => {
    img.removeEventListener('load', handleLoad)
    img.removeEventListener('error', handleError)
    createImageInfo(img, resolve, reject)
  }

  const handleError = () => {
    img.removeEventListener('load', handleLoad)
    img.removeEventListener('error', handleError)
    // 对于加载失败的图片，如果有src也尝试创建信息
    if (img.src) {
      createImageInfo(img, resolve, reject)
    } else {
      reject(new Error('Image failed to load and has no src'))
    }
  }

  img.addEventListener('load', handleLoad)
  img.addEventListener('error', handleError)

  // 如果图片已经在加载中，设置一个超时
  setTimeout(() => {
    if (!img.complete) {
      img.removeEventListener('load', handleLoad)
      img.removeEventListener('error', handleError)
      // 即使超时也尝试创建信息
      createImageInfo(img, resolve, reject)
    }
  }, 3000) // 3秒超时
})



