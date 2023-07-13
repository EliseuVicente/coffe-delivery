import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/themes/global'
import { defaultTheme } from "./styles/themes/default"

import { ProductsContext } from "./contexts/ProductsContext"
import { coffees } from "./pages/Home/components/products"

export function App() {

  return (
   
    <ThemeProvider theme={defaultTheme}>
      <ProductsContext.Provider value={{coffees}}>
        <BrowserRouter>
            <Router />
            <GlobalStyle />
        </BrowserRouter>
      </ProductsContext.Provider>
    </ThemeProvider>

  )
}

export default App
