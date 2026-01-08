import { Button, Checkbox, Group } from '@mantine/core'
import { IconDownload, IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { ImageSettingType } from '../../../types'
import { useLoading } from '../../../store'

interface ControlProps {
  total?: number
  onCapture: (settings: ImageSettingType[]) => Promise<boolean | void>
  onDownload: (settings: ImageSettingType[]) => void
}

const SETTING_OPTIONS = [
  {
    label: 'IMG标签',
    value: ImageSettingType.IMG,
  },
  {
    label: 'CSS背景图',
    value: ImageSettingType.CSS,
  },
  {
    label: 'Canvas画布',
    value: ImageSettingType.CANVAS,
  },
  {
    label: '图片压缩',
    value: ImageSettingType.COMPRESS,
  },
]

export default function Control(props: ControlProps) {
  const theme = useTheme()
  const [loading, setLoading] = useLoading()
  const [settings, setSettings] = useState<ImageSettingType[]>([
    ImageSettingType.IMG,
  ])

  const handleCapture = () => {
    setLoading(true)
    props.onCapture(settings).finally(() => setLoading(false))
  }

  return (
    <Wrapper>
      <Actions>
        <Button size="xs" fullWidth loading={!!loading} onClick={handleCapture}>
          <IconSearch size={16} />
          &nbsp;抓取图片
        </Button>
        <Button
          size="xs"
          fullWidth
          color={theme.colors.success}
          loading={!!loading}
          onClick={() => props.onDownload(settings)}
        >
          <IconDownload size={16} />
          &nbsp;下载（{props.total || 0}）
        </Button>
      </Actions>
      <CheckboxWrapper>
        <Checkbox.Group
          defaultValue={['react']}
          withAsterisk
          value={settings}
          onChange={(value) => setSettings(value as ImageSettingType[])}
        >
          <Group mt="xs">
            {SETTING_OPTIONS.map((item) => (
              <Checkbox
                key={item.value}
                size="xs"
                value={item.value}
                label={item.label}
              />
            ))}
          </Group>
        </Checkbox.Group>
      </CheckboxWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding: 12px;
  background-color: #f5f5f5;
`

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

const CheckboxWrapper = styled.div`
  display: flex;
  gap: 10px;
`
