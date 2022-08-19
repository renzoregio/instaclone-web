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
            font-weight: bold;
            margin-left: 15px;
        }
    `


    return (
        <LogoContainer>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <span>instaclone</span>
        </LogoContainer>
    )
}

export default Logo;