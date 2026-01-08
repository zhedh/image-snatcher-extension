import { MemoryRouter } from 'react-router-dom'
import { GlobalStyles } from '../theme/GlobalStyles'
import RouterRenderer from './router/Renderer'
import Header from './layouts/Header'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <MemoryRouter>
        <>
          <Header/>
          <RouterRenderer/>
        </>
      </MemoryRouter>
    </>
  )
}
