import routes from "../routes";
import { AuthLayout, FormBox, BottomBox, Input, Logo, Button, Divider, FormError } from "../components/auth"
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";
import { FormValues } from "./Login";
import { gql, useMutation } from "@apollo/client";
import { logUserIn } from "../apollo";
import { useNavigate } from "react-router-dom";

const CREATE_ACCOUNT_MUTATION = gql`
    mutation createAccount($firstName: String!, $lastName: String, $userName: String!, $email: String!, $password: String!){
        createAccount(firstName: $firstName, lastName: $lastName, userName: $userName, email: $email, password: $password){
            ok
            error
        }
    }
`

const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid }, setError, clearErrors } = useForm<FormValues>({ mode: "onChange" });
    const clearSignUpErrors = () => clearErrors("result")
    const onCompleted = (data : any) => {
        const { createAccount: { ok, error }} = data;
        if(!ok){
            return setError("result", { 
                message: error
            });
        }
        navigate(routes.home)

    }
    const [signUp, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, { onCompleted  })
    const onValidSubmit = (data : any) => {
        if(loading){
            return;
        }

        const { firstName, lastName, username, email, password} = data;
        signUp({
            variables: {
                firstName,
                lastName,
                userName: username,
                email,
                password
            }
        })
    }
    
    return (
        <AuthLayout>
            <PageTitle pageTitle="Sign Up" />
            <FormBox>
                <Logo />
                <h1>Sign up to see photos and videos from your friends</h1>
                <Button content="Log in with Facebook" />
                <Divider />
                <form onSubmit={handleSubmit(onValidSubmit)}>
                    <Input type="text" placeholder="First Name" register={register} name="firstName" validations={{ required: "First Name is required."}}/>
                    { errors?.firstName && <FormError errorText={errors.firstName.message!} /> }
                    <Input type="text" placeholder="Last Name" register={register} name="lastName" />
                    <Input type="text" placeholder="Username" onFocus={clearSignUpErrors} register={register} name="username" validations={{ required: "Username is required.", minLength: { value: 5, message: "Username should be at least 5 characters."}}}/>
                    { errors?.username && <FormError errorText={errors.username.message!} /> }
                    <Input type="text" placeholder="Email" onFocus={clearSignUpErrors} register={register} name="email" validations={{ required: "Email is required."}}/>
                    { errors?.email && <FormError errorText={errors.email.message!} /> }
                    <Input type="password" placeholder="Password" onFocus={clearSignUpErrors} register={register} name="password" validations={{ required: "Password is required.", minLength: { value: 8, message: "Password should be at least 8 characters."}}}/>
                    { errors?.password && <FormError errorText={errors.password.message!} /> }
                    <span>People who use our service may have uploaded your contact information to Instagram. <b>Learn More</b></span>
                    <span>By signing up, you agree to our <b>Terms, Privacy Policy</b> and <b>Cookies Policy.</b></span>
                    { errors?.result && <FormError errorText={errors.result.message!} />}
                    <Button content={loading ? "Loading..." : "Sign Up"} disabled={!isValid || loading} />
                </form>
            </FormBox>
            <BottomBox context="Have an account?" slug={routes.home} slugText="Log in" />
        </AuthLayout>
    )
}


export default SignUp;