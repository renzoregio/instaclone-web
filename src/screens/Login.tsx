import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import routes from "../routes"
import { AuthLayout, FormBox, BottomBox, Input, Logo, Button, Divider, FormError } from "../components/auth"
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { logUserIn } from "../apollo";
import { useLocation } from "react-router-dom";
import { LOGIN_MUTATION } from "../mutations/auth";
import { FormValues, LocationState } from "../types/auth";

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

const Notification = styled.div`
    color: #2ecc71;
    font-size: 15px;
    margin: 10px 25px;
`

const Login = () => {
    const { state } = useLocation();
    const locationState = state as LocationState;
    const { register, handleSubmit, formState: { errors, isValid }, getValues, setError, clearErrors }  = useForm<FormValues>({ mode: "onChange", defaultValues: { username: locationState?.username || "", password: locationState?.password || ""} })
    const clearLoginErrors = () => clearErrors("result")
    const onCompleted = (data : any) => {
        const { login: {ok, token, error}} = data;
        if(!ok){
            return setError("result", {
                message: error
            })
        }

        logUserIn(token)
    }
    const [login, { loading }] = useMutation(LOGIN_MUTATION, { onCompleted })

    const isValidSubmit = () => {
        if(loading){
            return 
        }
        const { username: userName, password } = getValues();
        login({
            variables: {
                userName, password
            }
        })
    }

    return (
        <AuthLayout>
            <PageTitle pageTitle="Login" />
            <FormBox>
                <Logo />
                {locationState?.postMessage && <Notification>{locationState.postMessage}</Notification>}
                <form onSubmit={handleSubmit(isValidSubmit)}>
                    <Input onFocus={clearLoginErrors} type="text" register={register} hasError={errors?.username?.message ? true : false} validations={{required: "Username is required", minLength: { value: 5, message: "Username must be at least 5 characters."}}} name="username" placeholder="Username"/>
                    {errors?.username && <FormError errorText={errors.username.message!}/>}
                    <Input onFocus={clearLoginErrors} type="password" register={register} hasError={errors?.password?.message ? true : false } name="password" placeholder="Password" validations={{required: "Password is required"}} />
                    {errors?.password && <FormError errorText={errors.password.message!}/>}
                    <Button content={loading ? "Loading..." : "Log in"} disabled={!isValid || loading} />
                    {errors?.result && <FormError errorText={errors.result.message!} />}
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