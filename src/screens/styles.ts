import { createGlobalStyle } from "styled-components"

interface Theme {
    backgroundColor: string,
    textColor: string
  }

export const lightModeTheme: Theme = {
    backgroundColor: "whitesmoke",
    textColor: "black"
  }

export const darkModeTheme: Theme = {
    backgroundColor: "black",
    textColor: "white"
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.backgroundColor };
        color: ${props => props.theme.textColor };
    }
`