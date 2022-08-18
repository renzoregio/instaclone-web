import { faFacebookF, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ButtonTag = ({ content, isDiv } : { content : any, isDiv? : boolean,  }) => {
   
    const Button = styled.input`
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
    `

    const BtnContainer = styled.div`
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

        span {
            margin-left: 7px;
        }
    `

    return(
       <>
       {!isDiv ? (
        <Button type="submit" value={content}/>
       ) : 
        <BtnContainer>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Log in with Facebook</span>
        </BtnContainer>
        }
        </>
    )
}

export default ButtonTag;