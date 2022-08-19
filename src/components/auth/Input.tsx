import styled from "styled-components";

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

const Input = ({ type, placeholder, ...rest } : { type : string , placeholder : string }) => {

    return <TextInput type={type} placeholder={placeholder} {...rest} />
    
}

export default Input;