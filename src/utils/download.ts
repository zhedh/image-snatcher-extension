import JSZip from "jszip"
import { ImageInfo } from "../types/image"
import { compressImage, getImageExtension } from "./image"
import { dataURLToBlob } from "./format"

/**
 * 通过创建临时的 <a> 元素触发浏览器下载文件
 *
 * 此函数利用HTML5的download属性来实现文件下载功能。
 * 适用于下载blob URL、data URL或其他可下载的资源。
 *
 * @param url - 要下载的文件的URL，可以是blob URL、data URL或常规的HTTP/HTTPS URL
 * @param filename - 下载时使用的文件名，包含文件扩展名（如 'image.jpg'）
 */
export const downloadFile = (url: string, filename: string) => {
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * 图片打包下载
 * @param images 
 * @param options 
 */
export const downloadImagesZip = async (images: ImageInfo[], options: {
  compress?: boolean
  quality?: number
}) => {
  const { compress = false, quality = 1 } = options

  console.log(`📦 开始打包 ${images.length} 张图片...`)

  const zip = new JSZip()
  const timestamp = new Date()
    .toISOString()
    .slice(0, 19)
    .replace(/:/g, '-')

  // 处理每张图片
  for (let i = 0; i < images.length; i++) {
    const image = images[i]
    try {
      console.log(`📸 处理图片 ${i + 1}/${images.length}: ${image.id}`)

      // 获取图片数据
      const imageData = compress
        ? dataURLToBlob(await compressImage(image.url, quality))
        : (await fetch(image.url)).blob()

      // 生成文件名
      const extension = compress
        ? 'jpg'
        : getImageExtension(image.url)
      const filename = `image_${String(i + 1).padStart(
        3,
        '0'
      )}.${extension}`

      zip.file(filename, imageData)
    } catch (error) {
      console.warn(`⚠️ 无法处理图片 ${image.id}:`, error)
      // 跳过有问题的图片，继续处理其他图片
    }
  }

  // 生成ZIP文件
  console.log('📦 生成ZIP文件...')
  const zipBlob = await zip.generateAsync({
    type: 'blob',
    compression: 'DEFLATE',
    compressionOptions: {
      level: 6
    }
  })

  // 下载ZIP文件
  const zipUrl = URL.createObjectURL(zipBlob)
  downloadFile(zipUrl, `images_${timestamp}.zip`)

  // 清理URL对象
  setTimeout(() => URL.revokeObjectURL(zipUrl), 1000)

  console.log(`✅ 成功打包下载 ${images.length} 张图片`)
}