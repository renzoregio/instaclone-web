import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { FormValues } from "../../types/auth";
interface ITextInput {
    hasError?: boolean;
}

const TextInput = styled.input<ITextInput>`
        padding: 5px 8px;
        width: 258px;
        height: 36px;
        margin: 5px 28px; 
        border-radius: 5px;
        background: #fafafa;
        border: 1px solid ${props => props.hasError ? "tomato" : props.theme.borderColor};
        outline: none;

        ::placeholder {
            font-size: 12px;
        }

        &:focus {
            border: 1px solid ${props => props.hasError ? "tomato" : "rgb(38, 38, 38)"};
        }
`

interface IValidationObj {
    required?: boolean | string,
    minLength?: {
        value: number,
        message: string
    },
}

interface IInput {
    type : string , 
    placeholder : string, 
    register: UseFormRegister<FormValues>, 
    name: "username" | "password" | "firstName" | "lastName" | "email" | "payload", 
    validations?: IValidationObj, 
    hasError?: boolean, 
    onFocus? : any  
}

const Input = ({ type, placeholder, register, name, validations, hasError, onFocus, ...rest } : IInput) => {
    return <TextInput type={type} {...register(name, validations)} placeholder={placeholder} hasError={hasError} onFocus={onFocus} {...rest} />
    
}

export default Input;