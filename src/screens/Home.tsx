import { useState } from "react";
import styled from "styled-components";
// import { isLoggedInVar } from "../apollo";

const Home = () => {

    const [isPressed, setIsPressed] = useState(false);

    interface TitleStyle {
        isPressed: boolean;
    }

    const Container = styled.div`
        background-color: whitesmoke;
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

    const Title = styled.h1<TitleStyle>`
        color: ${props => props.isPressed ? "red" : "black"};
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
            <Title isPressed={isPressed}>Home Screen</Title>
            <Button onClick={() => setIsPressed(prevState => !prevState)}>Press here</Button>
        </Container>
    )
}

export default Home;