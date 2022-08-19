import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Logo = () => {
    const LogoContainer = styled.div`
        margin: 20px;
        display: flex;
        align-items: center;
        span {
            font-size: 27px;
            margin-left: 15px;
            font-family: Pacifico;
        }
    `


    return (
        <LogoContainer>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <span>Instaclone</span>
        </LogoContainer>
    )
}

export default Logo;