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

/**
 * 获取图片信息
 * @param img 
 * @returns 
 */
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

/**
 * 压缩图片并返回指定格式的data URL
 *
 * 通过Canvas API将图片重新编码为指定格式，以实现图片压缩。
 * 支持跨域图片加载，失败时返回原始URL。
 *
 * @param url - 要压缩的图片URL，支持HTTP/HTTPS和data URL
 * @param quality - 压缩质量，范围0-1，1为最高质量
 * @param format - 输出图片格式，默认为'jpeg'，可选'png'等
 * @returns Promise<string> 压缩后的 data URL字符串，格式为"data:image/{format};base64,..."
 */
export const compressImage = async (
  url: string,
  quality: number,
  format: string = 'jpeg'
): Promise<string> => new Promise((resolve) => {
  const img = new Image()
  img.crossOrigin = 'anonymous'
  img.onload = () => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight

    if (ctx) {
      ctx.drawImage(img, 0, 0)
    }

    resolve(canvas.toDataURL(`image/${format}`, quality))
  }
  img.onerror = () => resolve(url)
  img.src = url
})

/**
 * 从URL中获取图片的扩展名
 * @param url 
 * @returns 
 */
export const getImageExtension = (url: string): string => {
  try {
    // 尝试从URL路径获取扩展名
    const { pathname } = new URL(url)
    const extension = pathname
      .split('.')
      .pop()
      ?.toLowerCase()

    // 如果是常见图片格式，返回该格式，否则默认jpg
    const validExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp']
    return validExtensions.includes(extension || '') ? extension! : 'jpg'
  } catch {
    return 'jpg'
  }
}
