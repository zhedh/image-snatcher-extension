import { IconHome, IconSettings } from '@tabler/icons-react'
import styled from 'styled-components'
import LOGO from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigator = useNavigate()

  const handleToWebsite = () => {
    window.open('https://www.tuojieyun.com/image-snatcher/website')
  }

  return (
    <Wrapper>
      <h1>
        <img src={LOGO} alt="" />
        <span>图片抓取器</span>
      </h1>
      <aside>
        <IconHome size={20} color="#333" onClick={handleToWebsite} />
        {/* <IconSettings
          size={20}
          color="#333"
          onClick={() => navigator('setting')}
        /> */}
      </aside>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 44px;
  padding: 0 16px;
  background-color: #fff;
  color: #333;

  h1 {
    display: flex;
    align-items: center;
    gap: 10px;

    img {
      width: 28px;
      height: 28px;
    }

    span {
      font-size: 16px;
    }
  }

  aside {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`

export default Header
