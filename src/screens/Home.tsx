import styled from "styled-components";
import { isDarkModeThemeVar } from "../apollo";
// import { isLoggedInVar } from "../apollo";

const Home = () => {

    const switchTheme = () => {
        if(isDarkModeThemeVar()){
            isDarkModeThemeVar(false);
        } else {
            isDarkModeThemeVar(true);
        }
    }

    const Container = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    `

    const Title = styled.h1`
        font-size: 40px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    `

    const Button = styled.button`
        border-radius: 20px;
        padding: 20px;
        box-shadow: 0px 5px;
    `

    return (
        <Container>
            <Title>Home Screen</Title>
            <Button onClick={switchTheme}>{isDarkModeThemeVar() ? "Light" : "Dark"} Mode</Button>
        </Container>
    )
}

export default Home;