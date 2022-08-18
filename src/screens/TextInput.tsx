import styled from "styled-components";

const TextInputTag = ({ inputType, inputPlaceholder } : { inputType : string , inputPlaceholder : string }) => {
    const TextInput = styled.input`
        padding: 5px 8px;
        width: 258px;
        height: 36px;
        margin: 5px 28px; 
        border-radius: 5px;
        background: #fafafa;
        border: 1px solid ${props => props.theme.borderColor};
        outline: none;
    `

    return(
        <TextInput type={inputType} placeholder={inputPlaceholder} />
    )
}

export default TextInputTag;