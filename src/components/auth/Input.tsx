import { FieldValues, Resolver, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import { LoginFormValues } from "../../screens/Login";


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

        &:focus {
            border: 1px solid rgb(38, 38, 38)
        }
    `

interface IValidationObj {
    required?: boolean | string,
    minLength?: {
        value: number,
        message: string
    },
}

const Input = ({ type, placeholder, register, name, validations, ...rest } : { type : string , placeholder : string, register: UseFormRegister<LoginFormValues>, name: "username" | "password", validations?: IValidationObj  }) => {

    return <TextInput type={type} {...register(name, validations)} placeholder={placeholder} {...rest} />
    
}

export default Input;