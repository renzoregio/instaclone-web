import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Btn = styled.input`
    background: ${props => props.theme.accent};
    border: 1px solid ${props => props.theme.accent};
    color: white;
    font-weight: bold;
    margin: 15px;
    width: 258px;
    font-size: 15px;
    padding: 5px 8px;
    height: 36px;
    margin: 5px 28px; 
    border-radius: 5px;
    margin: 20px 0px;
    cursor: pointer;
    display: flex; 
    justify-content: center;
    align-items: center;
    opacity: ${props => !props.disabled ? "0.2" : "1"};
`

const Button = ({ content, disabled } : { content : string, disabled?: boolean }) => {
    return(
        <Btn type="submit" value={content} disabled={disabled} />
    ) 
}

export default Button;