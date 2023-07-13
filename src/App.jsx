import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/themes/global'
import { defaultTheme } from "./styles/themes/default"

export function App() {

  const coffees2 = [1,2,3,4]

  return (
   
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
          <Router />
          <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
