import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home/index"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from './styles/themes/global'

export function App() {

  return (
   
    <ThemeProvider theme={defaultTheme}>
      <Home />

      <GlobalStyle />
    </ThemeProvider>

  )
}

export default App
