import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Content = styled.main`
    margin: 0 auto;
    max-width: 930px;
    margin-top: 45px;
    width: 100%;
    margin-top: 100px;
`

const Layout = ({ children } : { children: React.ReactNode }) => {
    return(
        <>
            <Header />
            <Content>
                { children }
            </Content>
        </>
    )
}

export default Layout;