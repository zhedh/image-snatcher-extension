import styled from 'styled-components'
import Control from './Control'
import ImageList from './List'
import { useState } from 'react'
import { getCurrentTab } from '../../../utils/chrome'
import { useLoading, useNotification } from '../../../store'
import { isValidDomain } from '../../../utils/url'
import { ImageInfo, ImageSettingType } from '../../../types'
import { downloadImagesZip } from '../../../utils/download'

export default function Home() {
  const notification = useNotification()
  const [, setLoading] = useLoading()
  const [images, setImages] = useState<ImageInfo[]>([])
  const [selected, setSelected] = useState<Set<string>>(new Set())

  const handleCapture = async (settings: ImageSettingType[]) => {
    setImages([])

    const tab = (await getCurrentTab())!
    if (!tab?.id) {
      notification.error('未找到活动标签页')
      return
    }

    if (isValidDomain(tab.url!)) {
      notification.error('此页面不支持图片抓取，请在普通网页上使用')
      return
    }

    const response = await chrome.tabs.sendMessage(tab.id, {
      action: 'capture',
      payload: {
        settings,
        maxImages: 100,
        minSize: 50,
      },
    })

    console.log('抓取结果response：', response)

    if (!response || !response.success) {
      notification.error(response.message)
      return
    }

    if (!response.images.length) {
      notification.error('未找到图片')
      return
    }

    setImages(response.images || [])
  }

  const handleDownload = async (settings: ImageSettingType[]) => {
    if (!images.length) {
      notification.error('请先抓取图片')
      return
    }

    if (!selected.size) {
      notification.error('请先选择图片')
      return
    }

    setLoading(true)
    const records = images.filter((item) => selected.has(item.id))
    const compress = settings.includes(ImageSettingType.COMPRESS)
    downloadImagesZip(records, {
      compress,
      quality: compress ? 0.8 : 1,
    }).finally(() => setLoading(false))
  }

  return (
    <Wrapper>
      <Control
        total={selected.size}
        onCapture={handleCapture}
        onDownload={handleDownload}
      />

      <ImageList
        records={images}
        selected={selected}
        onSelected={setSelected}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* padding: 12px; */
`
