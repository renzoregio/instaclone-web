import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import SeparatorTag from "./Separator";
import ButtonTag from "./Button";
import HeaderTag from "./Header";
import TextInputTag from "./TextInput";
import BottomBoxTag from "./BottomBox";

const Login = () => {

    const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    `

    const Wrapper = styled.div`
        width: 350px;
    `

    const WhiteBox = styled.div`
        background-color: white;
        border: 1px solid ${props => props.theme.borderColor};
    `


    const TopBox = styled(WhiteBox)`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        height: 380px;
        

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    `

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

    return (
        <Container>
            <Wrapper>
                <TopBox>
                    <HeaderTag />
                    <form>
                        <TextInputTag inputType="text" inputPlaceholder="Username"/>
                        <TextInputTag inputType="password" inputPlaceholder="Password"/>
                        <ButtonTag content="Log in"/>
                    </form>
                    <SeparatorTag />
                    <LogInWithFacebookContainer href="#">
                        <FontAwesomeIcon icon={faFacebookSquare} color="#385185" />
                        <span>Log in with Facebook</span>
                    </LogInWithFacebookContainer>
                </TopBox>
                <BottomBoxTag context="Don't have an account?" slug="/sign-up" slugText="Sign Up" />
            </Wrapper>
        </Container>
    )
}

export default Login;