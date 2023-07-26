import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/themes/global'
import { defaultTheme } from "./styles/themes/default"

import { ProductsContextProvider } from "./contexts/ProductsContext"

export function App() {

  return (
   
    <ThemeProvider theme={defaultTheme}>
      <ProductsContextProvider>
        <BrowserRouter>
            <Router />
            <GlobalStyle />
        </BrowserRouter>
      </ProductsContextProvider>
    </ThemeProvider>

  )
}

export default App
