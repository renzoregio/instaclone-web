import styled from "styled-components";

export const BaseBox = styled.div`
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.textColor};
        border: 1px solid ${props => props.theme.borderColor};
`