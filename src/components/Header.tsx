import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCompass, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

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

const Header  = () => {
    return(
        <Container>
            <Wrapper>
                <Column>
                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </Column>
                <Column>
                    <Icon> 
                        <FontAwesomeIcon icon={faHome} size="lg" />
                    </Icon>
                    <Icon>
                        <FontAwesomeIcon icon={faCompass} size="lg" />
                    </Icon>
                    <Icon>
                        <FontAwesomeIcon icon={faUser} size="lg" />
                    </Icon> 
                </Column>
            </Wrapper>
        </Container>
    )
}

export default Header;