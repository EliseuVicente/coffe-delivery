import { ThemeProvider } from "styled-components"
import { Router } from "./Router"
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/themes/global'
import { defaultTheme } from "./styles/themes/default"

import { ProductsContext } from "./contexts/ProductsContext"
import { coffees } from "./pages/Home/components/products"
import { useState } from "react"

export function App() {
  const [selected, setSelected] = useState(false);

  return (
   
    <ThemeProvider theme={defaultTheme}>
      <ProductsContext.Provider value={{coffees, selected, setSelected}}>
        <BrowserRouter>
            <Router />
            <GlobalStyle />
        </BrowserRouter>
      </ProductsContext.Provider>
    </ThemeProvider>

  )
}

export default App
