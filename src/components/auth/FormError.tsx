import styled from "styled-components";

const StyledFormError = styled.p`
    color: tomato;
    font-size: 12px;
    font-weight: bold;
    margin: 10px 23px;
`


const FormError = ({ errorText } : { errorText: string }) => {
    return (
        <StyledFormError>{errorText}</StyledFormError>
    )
}

export default FormError;