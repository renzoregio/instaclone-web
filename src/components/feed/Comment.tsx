import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ICommentComponent } from "../../types/photo";
import { FatText } from "../shared";

const CommentContainer = styled.div`
    display: flex; 
    align-items: center;
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

const Comment = ({ user, caption } : ICommentComponent) => {
    return (
        <CommentContainer>
            <FatText>{user}</FatText>
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
        </CommentContainer>
    )
}

export default Comment;