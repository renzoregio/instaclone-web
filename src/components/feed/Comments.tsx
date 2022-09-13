import { useMutation } from "@apollo/client"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import { CREATE_COMMENT_MUTATION } from "../../mutations/comments"
import { FormValues } from "../../types/auth"
import { IComments } from "../../types/photo"
import { Input } from "../auth"
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

const Comments = ({ photoId, user, caption, comments, commentCount } : IComments) => {
    const onCompleted = (data : any) => {
        console.log(data)
    }
    const updateComments = (cache: any, result: any) => {
        console.log(cache, result)
    }

    const [ createCommentMutation, { loading } ] = useMutation(CREATE_COMMENT_MUTATION, { onCompleted, update: updateComments  }) 
    const { register, handleSubmit, setValue } = useForm<FormValues>()

    const onValid = ( data : any ) => {
        const { payload } = data;

        if(loading){
            return;
        }

        createCommentMutation({
            variables: {
                photoId,
                payload
            }
        })

        setValue("payload", "")
    }

    return ( 
        <CommentsContainer>
            <Comment user={user} caption={caption} /> 
            <CommentCount>{commentCount === 1 ? "1 comment" : `${commentCount} comments`}</CommentCount>
            {comments.map(comment => (
                <Comment key={comment.id} user={comment.user.userName} caption={comment.payload} />
            ))}
            <form onSubmit={handleSubmit(onValid)}>
                <Input type="text" placeholder="Add a comment..." register={register} name="payload" validations={{ required : true }} />
            </form>
        </CommentsContainer>
    )
}

export default Comments;