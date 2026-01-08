import { ImageInfo, ImageSettingType, ImageType } from '../../types'
import { generateId } from '../../utils/base'
import { getImageInfo } from '../../utils/image'

const MAX_IMAGES = 100
const MIN_SIZE = 0

const captureTagImages = async (maxImages = MAX_IMAGES, minSize = MIN_SIZE) => {
  const images = []

  const imgElements = document.querySelectorAll('img')

  for (const img of Array.from(imgElements)) {
    if (images.length >= maxImages) break

    try {
      const imageInfo = await getImageInfo(img)
      if (imageInfo.width >= minSize && imageInfo.height >= minSize) {
        images.push(imageInfo)
      }
    } catch (error) {
      console.log('captureTagImages___error=================')
      console.warn('Failed to capture tag image:', error)
    }
  }

  return images
}

const captureCssImages = async (maxImages = MAX_IMAGES) => {
  const images: ImageInfo[] = []
  const elements = document.querySelectorAll('*')

  elements.forEach((element) => {
    if (images.length >= maxImages) return

    const computedStyle = window.getComputedStyle(element)
    const backgroundImage = computedStyle.backgroundImage
    if (!backgroundImage || backgroundImage === 'none') return

    const urls = backgroundImage.match(/url\(['"]?([^'"]+)['"]?\)/g)
    if (!urls) return
    urls.forEach((urlMatch) => {
      const url = urlMatch.match(/url\(['"]?([^'"]+)['"]?\)/)?.[1]
      if (url && !url.startsWith('data:')) {
        images.push({
          id: generateId(),
          url: url.startsWith('http') ? url : new URL(url, window.location.href).href,
          alt: 'CSS Background Image',
          title: `CSS Background (${element.tagName.toLowerCase()})`,
          width: 0,
          height: 0,
          size: 0,
          type: ImageType.CSS,
          thumbnail: url,
          originalUrl: url
        })
      }
    })
  })

  return images
}

const captureCanvasImages = async (maxImages = MAX_IMAGES) => {
  const images: ImageInfo[] = []
  const canvases = document.querySelectorAll('canvas')

  for (const canvas of Array.from(canvases)) {
    if (images.length >= maxImages) break

    try {
      const dataUrl = canvas.toDataURL('image/png')

      images.push({
        id: generateId(),
        url: dataUrl,
        alt: 'Canvas Image',
        title: 'Canvas Capture',
        width: canvas.width,
        height: canvas.height,
        size: 0,
        type: ImageType.CANVAS,
        thumbnail: dataUrl,
        originalUrl: dataUrl
      })
    } catch (error) {
      console.warn('Failed to capture canvas:', error)
    }
  }

  return images
}

export const captureImages = async (options: {
  settings: ImageSettingType[];
  maxImages?: number;
  minSize?: number;
}) => {
  const images: ImageInfo[] = []
  const seenUrls = new Set<string>()

  // Helper function to add image if not duplicate
  const addImageIfUnique = (image: ImageInfo) => {
    if (!seenUrls.has(image.url) && images.length < MAX_IMAGES) {
      seenUrls.add(image.url)
      images.push(image)
    }
  }

  // Capture img tags
  if (options.settings.includes(ImageSettingType.IMG)) {
    const tagImages = await captureTagImages(options.maxImages, options.minSize)
    tagImages.forEach((image: ImageInfo) => addImageIfUnique(image))
  }

  // Capture CSS background images
  if (options.settings.includes(ImageSettingType.CSS)) {
    const cssImages = await captureCssImages()
    cssImages.forEach((image: ImageInfo) => addImageIfUnique(image))
  }

  // Capture canvas elements
  if (options.settings.includes(ImageSettingType.CANVAS)) {
    const canvasImages = await captureCanvasImages()
    canvasImages.forEach((image: ImageInfo) => addImageIfUnique(image))
  }

  return images
}