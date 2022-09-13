import { UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { FormValues } from "../../types/auth";

const TextInput = styled.input`
    border: 0;
    margin: 20px 0px;
    :focus {
        outline: none;   
    }
`

interface IValidationObj {
    required?: boolean | string,
    minLength?: {
        value: number,
        message: string
    },
}

interface CommentInput {
    type : string , 
    placeholder : string, 
    register: UseFormRegister<FormValues>, 
    name: "payload", 
    validations?: IValidationObj, 
    onFocus? : any  
}

const Input = ({ type, placeholder, register, name, validations, onFocus, ...rest } : CommentInput) => {
    return <TextInput type={type} {...register(name, validations)} placeholder={placeholder} onFocus={onFocus} {...rest} />
    
}
export default Input;