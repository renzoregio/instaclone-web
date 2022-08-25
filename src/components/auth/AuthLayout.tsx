import { useReactiveVar } from "@apollo/client";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { disableDarkMode, enableDarkMode, isDarkModeThemeVar } from "../../apollo";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column; 
`

const Footer = styled.footer`
    
`

const DarkModeBtn = styled.span`
    cursor: pointer;
`

const Wrapper = styled.div`
    width: 350px;
`

const AuthLayout = ({ children } : { children: React.ReactNode }) => {
    const darkMode = useReactiveVar(isDarkModeThemeVar)
    return (
        <Container>
            <Wrapper>
                { children }
            </Wrapper>
            <Footer>
                <DarkModeBtn onClick={darkMode ? disableDarkMode : enableDarkMode} >
                    <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
                </DarkModeBtn>
            </Footer>
        </Container>
    )
}

export default AuthLayout;