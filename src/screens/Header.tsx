import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const HeaderTag = () => {
    const LogoContainer = styled.div`
        margin: 20px;
        display: flex;
        align-items: center;
        h1 {
            margin-left: 15px;
        }
    `


    return (
        <LogoContainer>
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <h1>instaclone</h1>
        </LogoContainer>
    )
}

export default HeaderTag;