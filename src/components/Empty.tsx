import styled from 'styled-components'
import LOGO from '../assets/logo.svg'

interface EmptyProps {
  icon?: string
  message: string
}

const Empty = (props: EmptyProps) => {
  const { icon = LOGO, message } = props

  return (
    <Wrapper>
      <img src={icon} alt="" />
      <p>{message}</p>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  padding: 20px;
  text-align: center;

  img {
    width: 80px;
    opacity: 0.6;
  }

  p {
    margin: 0;
    color: #999;
    font-size: 14px;
  }
`

export default Empty
