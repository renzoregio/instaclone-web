import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from "@fortawesome/free-brands-svg-icons";

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
    const LogoContainer = styled.div`
        margin: 20px;
        display: flex;
        align-items: center;
        h1 {
            margin-left: 15px;
        }
    `

    const WhiteBox = styled.div`
        background-color: white;
        border: 1px solid rgb(219, 219, 219);
    `

    const Separator = styled.div`
        display: flex;
        justify-content: space-evenly; 
        align-items: center;
        width: 90%;
        margin-top: 5px;
        div {
            background-color: #ededed;
            height: 2px;
            width: 100%;
        }

        span {
            color: #959393d9;
            text-transform: uppercase;
            margin: 0px 25px;
            font-size: 15px;
            font-weight: bold;
        }
    `

    const TopBox = styled(WhiteBox)`
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        height: 385px;
        

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            
            input {
                padding: 5px 8px;
                width: 258px;
                height: 36px;
                margin: 5px 28px; 
                border-radius: 5px;
            }

            input[type="text"], input[type="password"] {
                background: #fafafa;
                border: 1px solid #eaeaea;
                
            }

            input[type="submit"]{
                background: #007fd4;
                border: 1px solid #007fd4;
                color: white;
                font-weight: bold;
                margin: 15px;
                width: 278px;
                font-size: 15px;
            }
        }
    `
    const LogInWithFacebookContainer = styled.a`
        display: flex; 
        justify-content: space-evenly;
        width: 60%;
        align-items: center;
        margin: 35px;
        text-decoration: none;
        
        span {
            font-size: 15px;
            font-weight: 500;
            color: #385185;
            margin-left: 5px;
        }
    `

    const BottomBox = styled(WhiteBox)`
        padding: 20px;
        display: flex;
        justify-content: center;
        margin: 20px 0px;
        font-size: 15px;

        a {
            text-decoration: none;
            margin-left: 5px;
            color: #0395f6;
        }
    `

    return (
        <Container>
            <Wrapper>
                <TopBox>
                    <LogoContainer>
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                        <h1>instaclone</h1>
                    </LogoContainer>
                    
                    <form>
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <input type="submit" value="Log in"/>
                    </form>
                    <Separator>
                        <div></div>
                        <span>or</span>
                        <div></div>
                    </Separator>
                    <LogInWithFacebookContainer href="#">
                        <FontAwesomeIcon icon={faFacebookSquare} color="#385185" />
                        <span>Log in with Facebook</span>
                    </LogInWithFacebookContainer>
                </TopBox>
                <BottomBox>
                    <span>Don't have an account?</span>
                    <a href="#">Sign up</a>
                </BottomBox>
            </Wrapper>
        </Container>
    )
}

export default Login;