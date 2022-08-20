import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import routes from "../routes"
import { AuthLayout, FormBox, BottomBox, Input, Logo, Button, Divider } from "../components/auth"
import PageTitle from "../components/PageTitle";

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

const Login = () => {
    
    return (
        <AuthLayout>
            <PageTitle pageTitle="Login" />
            <FormBox>
                <Logo />
                <form>
                    <Input type="text" placeholder="Username"/>
                    <Input type="password" placeholder="Password"/>
                    <Button content="Log in"/>
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