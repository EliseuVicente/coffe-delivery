import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}

html,body {
    width: 100%;
    background-color: ${props => props.theme['background']};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
}
`