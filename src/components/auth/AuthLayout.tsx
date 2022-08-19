import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const Wrapper = styled.div`
    width: 350px;
`

const AuthLayout = ({ children } : { children: React.ReactNode }) => {

    return (
        <Container>
            <Wrapper>
                { children }
            </Wrapper>
        </Container>
    )
}

export default AuthLayout;