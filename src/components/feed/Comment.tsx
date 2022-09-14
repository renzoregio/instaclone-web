import { useMutation } from "@apollo/client";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DELETE_COMMENT_MUTATION } from "../../mutations/comment";
import { ICommentComponent } from "../../types/photo";
import { FatText } from "../shared";

const CommentContainer = styled.div`
    display: flex; 
    align-items: center;
    margin: 8px 0px;

    :hover {
        button {
            opacity: 1;
        }
    }
`

const CommentCaption = styled.span`
    margin-left: 5px;

    a {
        background-color: inherit;
        color: ${props => props.theme.accent};

        :hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`

const DeleteCommentButtonContainer = styled.button`
    margin-left: 20px;
    opacity: 0;
    background: none;
    border: none;
    color: red;
    cursor: pointer;
    
`

const Comment = ({ id, user, caption, isMyComment, photoId } : ICommentComponent) => {
    const deleteCommentUpdate = (cache: any, result: any) => {
        const { data: { deleteComment: { ok }}} = result;
        if(ok){
            cache.evict({ id: `Comment:${id}`})
            cache.modify({
                id: `Photo:${photoId}`,
                fields: {
                    commentCount(prev: number){
                        return prev - 1;
                    }
                }
            })
        }
    }
    const [ deleteCommentMutation] = useMutation(DELETE_COMMENT_MUTATION, { variables: { id }, update: deleteCommentUpdate})
    
    return (
        <CommentContainer>
            <FatText>{user.userName}</FatText>
            <CommentCaption>{caption.split(" ").map((word, i) => (
                /[#@][\w]+/g.test(word) ? 
                    <React.Fragment key={i}>
                        <Link to={`/hashtags/${word}`}>{word}{" "}</Link>
                    </React.Fragment>
                :
                    <React.Fragment key={i}>
                        { word } { " " }
                    </React.Fragment> 
            ))}</CommentCaption>
            { isMyComment && 
                <DeleteCommentButtonContainer>
                    <FontAwesomeIcon onClick={() => deleteCommentMutation()} icon={faTrash} size="1x" />
                </DeleteCommentButtonContainer>
            }   
        </CommentContainer>
    )
}

export default Comment;