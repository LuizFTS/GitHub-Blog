import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { GlobalStyle } from './styles/global'
import { GithubProvider } from './contexts/GithubContext'

export function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GithubProvider>
          <Router />

        </GithubProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}
