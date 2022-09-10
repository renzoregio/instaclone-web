import styled from "styled-components";
import { ICommentComponent } from "../../types/photo";
import { FatText } from "../shared";

const CommentContainer = styled.div`
display: flex; 
align-items: center;
`

const CommentCaption = styled.span`
margin-left: 10px;
`

const Comment = ({ user, caption } : ICommentComponent) => {
    return (
        <CommentContainer>
            <FatText>{user}</FatText>
            <CommentCaption>{caption}</CommentCaption>
        </CommentContainer>
    )
}

export default Comment;