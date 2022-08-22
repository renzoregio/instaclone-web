import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import routes from "../routes"
import { AuthLayout, FormBox, BottomBox, Input, Logo, Button, Divider, FormError } from "../components/auth"
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";

const LogInWithFacebookContainer = styled.a`
        display: flex; 
        justify-content: space-evenly;
        width: 60%;
        align-items: center;
        margin: 7px 15px 15px 15px;
        text-decoration: none;
        
        span {
            font-size: 15px;
            font-weight: 500;
            color: #385185;
            margin-left: 5px;
        }
    `

export type LoginFormValues = {
    username: string,
    password: string
}


const Login = () => {
    const { register, handleSubmit, formState: { errors, isValid } }  = useForm<LoginFormValues>({ mode: "onChange" })
    
    const isValidSubmit = (data : any) => {
        // console.log("VALID", data)
    }

    return (
        <AuthLayout>
            <PageTitle pageTitle="Login" />
            <FormBox>
                <Logo />
                <form onSubmit={handleSubmit(isValidSubmit)}>
                    <Input type="text" register={register} hasError={errors?.username?.message ? true : false} validations={{required: "Username is required", minLength: { value: 5, message: "Username must be at least 5 characters."}}} name="username" placeholder="Username"/>
                    {errors?.username && <FormError errorText={errors.username.message!}/>}
                    <Input type="password" register={register} hasError={errors?.password?.message ? true : false } name="password" placeholder="Password" validations={{required: "Password is required"}} />
                    {errors?.password && <FormError errorText={errors.password.message!}/>}
                    <Button content="Log in" disabled={isValid} />
                </form>
                <Divider />
                <LogInWithFacebookContainer href="#">
                    <FontAwesomeIcon icon={faFacebookSquare} color="#385185" />
                    <span>Log in with Facebook</span>
                </LogInWithFacebookContainer>
            </FormBox>
            <BottomBox context="Don't have an account?" slug={routes.signUp} slugText="Sign Up" />
        </AuthLayout>
    )
}

export default Login;