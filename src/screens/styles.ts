import { createGlobalStyle, DefaultTheme } from "styled-components"
 
export const lightModeTheme: DefaultTheme = {
    backgroundColor: "whitesmoke",
    textColor: "black"
  }

export const darkModeTheme: DefaultTheme = {
    backgroundColor: "black",
    textColor: "white"
}

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.backgroundColor };
        color: ${props => props.theme.textColor };
    }
`