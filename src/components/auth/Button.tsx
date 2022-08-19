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
`

const BtnContainer = styled.button`
    display: flex;
    align-items:center;
    justify-content: center;
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
    span {
        margin-left: 7px;
    }
`

const Button = ({ content, isDiv } : { content : any, isDiv? : boolean,  }) => {

    return(
       <>
       {!isDiv ? (
        <Btn type="submit" value={content}/>
       ) : 
        <BtnContainer>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Log in with Facebook</span>
        </BtnContainer>
        }
        </>
    )
}

export default Button;