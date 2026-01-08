import styled from 'styled-components'
import Control from './Control'
import ImageList from './List'
import { useState } from 'react'
import { getCurrentTab } from '../../../utils/chrome'
import { useNotification } from '../../../store'
import { isValidDomain } from '../../../utils/url'
import { ImageSettingType } from '../../../types'

export default function Home() {
  const notification = useNotification()
  const [images, setImages] = useState<[]>([])

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

    if(!response.images.length) {
      notification.error('未找到图片')
      return
    }

    setImages(response.images || [])
  }

  return (
    <Wrapper>
      <Control onCapture={handleCapture}></Control>

      <ImageList records={images}></ImageList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  /* padding: 12px; */
`
