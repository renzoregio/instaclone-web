
import routes from "../routes";
import { AuthLayout, FormBox, BottomBox, Input, Logo, Button, Divider } from "../components/auth"

const SignUp = () => {

    return (
        <AuthLayout>
            <FormBox>
                <Logo />
                <h1>Sign up to see photos and videos from your friends</h1>
                <Button content="Log in with Facebook" isDiv={true} />
                <Divider />
                <form>
                    <Input inputType="text" inputPlaceholder="Mobile Number or Email" />
                    <Input inputType="text" inputPlaceholder="Full Name" />
                    <Input inputType="text" inputPlaceholder="Username" />
                    <Input inputType="password" inputPlaceholder="Password" />
                    <span>People who use our service may have uploaded your contact information to Instagram. <b>Learn More</b></span>
                    <span>By signing up, you agree to our <b>Terms, Privacy Policy</b> and <b>Cookies Policy.</b></span>
                    <Button content="Sign up" />
                </form>
            </FormBox>
            <BottomBox context="Have an account?" slug={routes.home}slugText="Log in" />
        </AuthLayout>
    )
}


export default SignUp;