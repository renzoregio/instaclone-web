import styled from "styled-components";

const Input = ({ inputType, inputPlaceholder } : { inputType : string , inputPlaceholder : string }) => {
    const TextInput = styled.input`
        padding: 5px 8px;
        width: 258px;
        height: 36px;
        margin: 5px 28px; 
        border-radius: 5px;
        background: #fafafa;
        border: 1px solid ${props => props.theme.borderColor};
        outline: none;

        ::placeholder {
            font-size: 12px;
        }
    `

    return(
        <TextInput type={inputType} placeholder={inputPlaceholder} />
    )
}

export default Input;