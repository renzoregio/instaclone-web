import routes from "../routes";
import { AuthLayout, FormBox, BottomBox, Input, Logo, Button, Divider } from "../components/auth"
import PageTitle from "../components/PageTitle";
import { useForm } from "react-hook-form";

const SignUp = () => {
    const { register } = useForm();
    return (
        <AuthLayout>
            <PageTitle pageTitle="Sign Up" />
            <FormBox>
                <Logo />
                <h1>Sign up to see photos and videos from your friends</h1>
                <Button content="Log in with Facebook" />
                <Divider />
                <form>
                    {/* <Input register={register} name="email" type="text" validations={{required: true}} placeholder="Email" />
                    <Input register={register} name="fullName" type="text" validations={{required: true}} placeholder="Full Name" />
                    <Input register={register} name="username" type="text" validations={{required: true}} placeholder="Username" />
                    <Input register={register} name="password" type="password" validations={{required: true}} placeholder="Password" /> */}
                    <span>People who use our service may have uploaded your contact information to Instagram. <b>Learn More</b></span>
                    <span>By signing up, you agree to our <b>Terms, Privacy Policy</b> and <b>Cookies Policy.</b></span>
                    <Button content="Sign up" />
                </form>
            </FormBox>
            <BottomBox context="Have an account?" slug={routes.home} slugText="Log in" />
        </AuthLayout>
    )
}


export default SignUp;