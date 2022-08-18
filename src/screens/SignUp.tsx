
import styled from "styled-components";
import BottomBoxTag from "./BottomBox";
import ButtonTag from "./Button";
import HeaderTag from "./Header";
import SeparatorTag from "./Separator";
import TextInputTag from "./TextInput";

const SignUp = () => {

    const Container = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
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

        form {
            display: flex;
            flex-direction: column;
            align-items: center;

            span {
                font-size: 12px;
                margin: 10px 23px;
                color: rgb(142,142,142,1)
            }
        }
    `

    const HeaderTagline = styled.span`
        color: #8e8e8e;
        font-weight: 600;
        font-size: 17px;
        width: 88%;
    `


    return (
        <Container>
            <Wrapper>
                <TopBox>
                    <HeaderTag />
                    <HeaderTagline>Sign up to see photos and videos from your friends</HeaderTagline>
                    <ButtonTag content="Log in with Facebook" isDiv={true} />
                    <SeparatorTag />
                    <form>
                        <TextInputTag inputType="text" inputPlaceholder="Mobile Number or Email" />
                        <TextInputTag inputType="text" inputPlaceholder="Full Name" />
                        <TextInputTag inputType="text" inputPlaceholder="Username" />
                        <TextInputTag inputType="password" inputPlaceholder="Password" />
                        <span>People who use our service may have uploaded your contact information to Instagram. <b>Learn More</b></span>
                        <span>By signing up, you agree to our <b>Terms, Privacy Policy</b> and <b>Cookies Policy.</b></span>
                        <ButtonTag content="Sign up" />
                    </form>
                </TopBox>
                <BottomBoxTag context="Have an account?" slug="/" slugText="Log in" />
            </Wrapper>
        </Container>
    )
}


export default SignUp;