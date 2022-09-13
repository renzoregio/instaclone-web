import { gql, useMutation } from "@apollo/client"
import { useForm } from "react-hook-form"
import styled from "styled-components"
import useUser from "../../hooks/useUser"
import { CREATE_COMMENT_MUTATION } from "../../mutations/comments"
import { FormValues } from "../../types/auth"
import { IComments } from "../../types/photo"
import Avatar from "../Avatar"
import Comment from "./Comment"
import Input from "./Input"

const AddCommentContainer = styled.div`
    display: flex;
    align-items: center;
    input {
        display: block;
        margin-left: 5px;
    }
    
`

const CommentsContainer = styled.div`
    margin-top: 20px;
`

const CommentCount = styled.span`
    opacity: 0.7;
    display: block;
    font-size: 12px;
    font-weight: 700;
    margin-top: 10px; 
    margin-bottom: 5px;
`

const Comments = ({ photoId, user, caption, comments, commentCount } : IComments) => {
    const data = useUser();
    const loggedInUserAvatar = data?.data?.getMyProfile.avatar
    const { register, handleSubmit, setValue, getValues } = useForm<FormValues>()
    
    const createCommentUpdate = (cache: any, result: any) => {
        
        const { data: { createComment: { ok, id }}} = result;
        const { payload } = getValues();

        if(ok && data?.data?.getMyProfile){
            const newComment = {
                __typename: "Comment",
                createdAt: Date.now().toString(),
                id,
                isMine: true,
                payload,
                user: {
                    ...data?.data.getMyProfile
                }
    
            }

            setValue("payload", "")
            const newCacheComment = cache.writeFragment({
                data: newComment,
                fragment: gql`
                    fragment createComment on Comment {
                        id
                        createdAt
                        isMine
                        payload
                        user {
                            userName
                            avatar
                        }
                    }
                `
            })
            cache.modify({
                id: `Photo:${photoId}`,
                fields: {
                    comments(prev: any){
                        return [...prev, newCacheComment]
                    },
                    commentCount(prev: number){
                        return prev + 1
                    }
                }
            })
        }
    }

    const [ createCommentMutation, { loading } ] = useMutation(CREATE_COMMENT_MUTATION, { update: createCommentUpdate  }) 


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

    }

    return ( 
        <CommentsContainer>
            <Comment user={user} caption={caption} /> 
            <CommentCount>{commentCount === 1 ? "1 comment" : `${commentCount} comments`}</CommentCount>
            {comments.map(comment => (
                <Comment key={comment.id} user={comment.user} caption={comment.payload} />
            ))}
            <form onSubmit={handleSubmit(onValid)}>
                <AddCommentContainer>
                    <Avatar url={loggedInUserAvatar} isLarge={false} />
                    <Input type="text" placeholder="Add a comment..." register={register} name="payload" validations={{ required : true }} />
                </AddCommentContainer>
            </form>
        </CommentsContainer>
    )
}

export default Comments;