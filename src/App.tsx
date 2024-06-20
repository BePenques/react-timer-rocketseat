import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
// import { Home } from './Home'

export function App() {
  // return <Home />
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
        <GlobalStyle /> {/* Necessario estar dentro do thema */}
      </BrowserRouter>
    </ThemeProvider>
  )
}
