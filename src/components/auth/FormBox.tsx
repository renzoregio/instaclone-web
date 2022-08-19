import React from "react";
import styled from "styled-components";
import { BaseBox } from "../shared";

const Container = styled(BaseBox)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;  
    text-align: center;      

    h1 {
        margin: 0px;
        color: #8e8e8e;
        font-weight: 600;
        font-size: 17px;
        width: 88%;
    }
    
    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
            font-size: 12px;
            margin: 10px 23px;
            color: rgb(142,142,142,1);
        }
    }
`

const FormBox = ({ children } : { children : React.ReactNode }) => {
    
    return (
        <Container>
            { children }
        </Container>
    )
}

export default FormBox;