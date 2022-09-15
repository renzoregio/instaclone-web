import { createGlobalStyle, DefaultTheme } from "styled-components"
 
export const lightModeTheme: DefaultTheme = {
    backgroundColor: "#FAFAFA",
    textColor: "rgb(38, 38, 38)",
    accent: "#0095f6",
    borderColor:"rgb(219, 219, 219)"
  }

export const darkModeTheme: DefaultTheme = {
    backgroundColor: "#2c2c2c",
    textColor: "white",
    accent: "gray",
    borderColor: ""
}

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body {
        background-color: ${props => props.theme.backgroundColor };
        color: ${props => props.theme.textColor };
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: rgb(18, 18, 18)
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`