import styled from "styled-components"
import { IComments } from "../../types/photo"
import Comment from "./Comment"

const CommentsContainer = styled.div`
    margin-top: 20px;
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
            <Comment user={user} caption={caption} /> 
            <CommentCount>{commentCount === 1 ? "1 comment" : `${commentCount} comments`}</CommentCount>
            {comments.map(comment => (
                <Comment key={comment.id} user={comment.user.userName} caption={comment.payload} />
            ))}
        </CommentsContainer>
    )
}

export default Comments;