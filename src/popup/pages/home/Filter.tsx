import { Button, Input } from '@mantine/core'
import styled from 'styled-components'

interface FilterProps {
  keyword: string
  onKeywordChange: (keyword: string) => void
  onSelectAll: () => void
  onClear: () => void
}

const Filter = (props: FilterProps) => {
  const { keyword, onKeywordChange, onSelectAll, onClear } = props

  return (
    <Wrapper>
      <Input
        size="xs"
        placeholder="输入关键字进行过滤"
        rightSectionPointerEvents="auto"
        rightSection={
          keyword !== '' ? (
            <Input.ClearButton onClick={() => onKeywordChange('')} />
          ) : undefined
        }
        value={keyword}
        onChange={(e) => onKeywordChange(e.target.value)}
      />
      <Button size="xs" onClick={onSelectAll}>
        全选
      </Button>
      <Button size="xs" variant="default" onClick={onClear}>
        清空
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  gap: 8px;
  padding: 8px 12px;

  :first-child {
    flex: 1;
  }
`

export default Filter
