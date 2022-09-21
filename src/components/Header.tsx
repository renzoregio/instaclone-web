import { useReactiveVar } from "@apollo/client";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCompass, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { isLoggedInVar } from "../apollo";
import useUser from "../hooks/useUser";
import routes from "../routes";
import Avatar from "./Avatar";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-shadow: 0px 1px 12px rgba(0, 0, 0, 0.265);
    position: absolute;
    height: 55px;
    top: 0;
    left: 0;
    right: 0;
`

const Wrapper = styled.div`
    max-width: 930px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Column = styled.div`
    display: flex;
`

const Icon = styled.div`
    margin-left: 15px;
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
`

const Button = styled.button`
    background-color: ${props => props.theme.accent};
    color: white;
    font-weight: 600;
    border: 0px;
    padding: 5px 15px;
    border-radius: 3px;
`

const Header  = () => {
    const isLoggedIn = useReactiveVar(isLoggedInVar)
    const data = useUser();
    const avatarUrl = data?.data?.getMyProfile.avatar
    return(
        <Container>
            <Wrapper>
                <Column>
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </Column>
                <Column>
                    { isLoggedIn ?
                    <IconContainer>
                        <Link to="/">
                            <Icon> 
                                <FontAwesomeIcon icon={faHome} size="lg" />
                            </Icon>
                        </Link>
                        <Icon>
                            <FontAwesomeIcon icon={faCompass} size="lg" />
                        </Icon>
                        <Link to={`/users/${data?.data?.getMyProfile.userName}`}>
                            <Icon>
                                <Avatar url={avatarUrl} size={25} />
                            </Icon>
                        </Link>
                    </IconContainer>  
                    :
                    <Link to={routes.home}>
                        <Button>Login</Button>
                    </Link>
                    }
                </Column>
            </Wrapper>
        </Container>
    )
}

export default Header;