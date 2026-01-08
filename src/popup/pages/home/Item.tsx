import styled from 'styled-components'
import { Checkbox } from '@mantine/core'
import { ImageInfo } from '../../../types'

interface Props {
  checked: boolean
  image: ImageInfo
  onChecked: () => void
  onDownload: (image: ImageInfo) => void
}

const ImageItem = (props: Props) => {
  const { image } = props

  return (
    <Wrapper>
      <Checkbox
        size="xs"
        checked={props.checked}
        onChange={props.onChecked}
        style={{ marginRight: '12px' }}
        label={''}
      />
      <ImageThumbnail src={image.thumbnail || image.url} alt={image.alt} />
      <ImageBox>
        <h4>{image.title || image.alt || `图片 ${image.id.slice(-6)}`}</h4>
        <small>{image.url}</small>
        <aside>
          <span>
            {image.width}×{image.height}
          </span>
          <ImageType type={image.type}>{image.type}</ImageType>
        </aside>
      </ImageBox>
      <Actions>
        <button onClick={() => window.open(image.url, '_blank')}>查看</button>
        <button onClick={() => props.onDownload(image)}>下载</button>
      </Actions>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #e9ecef;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f8f9fa;
  }

  &:last-child {
    border-bottom: none;
  }
`

const ImageThumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 12px;
  border: 1px solid #e9ecef;
`

const ImageBox = styled.div`
  flex: 1;
  min-width: 0;
  margin-right: 12px;

  > h4 {
    margin: 0;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    font-weight: 500;
    color: #212529;
  }

  > small {
    display: block;
    max-width: 300px;
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 12px;
    color: #6c757d;
  }

  > aside {
    display: flex;
    gap: 12px;
    font-size: 11px;
    color: #868e96;
  }
`

const ImageType = styled.span<{ type: string }>`
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;

  background: ${(props) => {
    switch (props.type) {
      case 'img':
        return '#e3f2fd'
      case 'css':
        return '#f3e5f5'
      case 'canvas':
        return '#e8f5e8'
      default:
        return '#f8f9fa'
    }
  }};

  color: ${(props) => {
    switch (props.type) {
      case 'img':
        return '#1976d2'
      case 'css':
        return '#7b1fa2'
      case 'canvas':
        return '#388e3c'
      default:
        return '#6c757d'
    }
  }};
`

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  > button {
    padding: 3px 9px;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    background: white;
    color: #495057;
    font-size: 11px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #007bff;
      color: white;
      border-color: #007bff;
    }
  }
`

export default ImageItem
