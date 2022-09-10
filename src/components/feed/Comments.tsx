import styled from "styled-components"
import { IComments } from "../../types/photo"
import { FatText } from "../shared"

const CommentsContainer = styled.div`
    margin-top: 20px;
`

const Comment = styled.div`
    display: flex; 
    align-items: center;
`

const CommentCaption = styled.span`
    margin-left: 10px;
`

const CommentCount = styled.span`
    opacity: 0.7;
    display: block;
    font-size: 12px;
    font-weight: 700;
    margin-top: 10px;
`

const Comments = ({ user, caption, comments, commentCount } : IComments) => {
    
    
    return (
        <CommentsContainer>
            <Comment>
                <FatText>{user}</FatText>
                <CommentCaption>{caption}</CommentCaption>
            </Comment>
            <CommentCount>{commentCount === 1 ? "1 comment" : `${commentCount} comments`}</CommentCount>
            {comments.map(comment => (
                <Comment>
                    <FatText>{comment.user.userName}</FatText>
                    <CommentCaption>{comment.payload}</CommentCaption>
                </Comment>
            ))}
        </CommentsContainer>
    )
}

export default Comments;