import React from 'react'
import styled from 'styled-components'
import { ImageInfo } from '../../../types'
import Empty from '../../../components/Empty'
import ImageItem from './Item'

interface ImageListProps {
  records: ImageInfo[]
}

const ImageList = (props: ImageListProps) => {
  const { records } = props

  if (records.length === 0)
    return (
      <Wrapper>
        <Empty message="请抓取图片" />
      </Wrapper>
    )

  return (
    <Wrapper>
      {records.map((item) => (<ImageItem key={item.id} image={item} checked={false} onChecked={function (): void {
        throw new Error('Function not implemented.')
      } } onDownload={function (image: ImageInfo): void {
        throw new Error('Function not implemented.')
      } }></ImageItem>))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 0;
  padding-bottom: 32px;
  max-height: 400px;
  overflow-y: auto;
  background-color: #fff;
`

export default React.memo(ImageList)
