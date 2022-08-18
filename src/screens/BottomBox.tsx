import { Link } from "react-router-dom";
import styled from "styled-components";

const BottomBoxTag = ({ context, slug, slugText } : { context: string, slug: string, slugText: string }) => {
    const WhiteBox = styled.div`
        background-color: white;
        border: 1px solid ${props => props.theme.borderColor};
    `

    const BottomBox = styled(WhiteBox)`
        padding: 20px;
        display: flex;
        justify-content: center;
        margin: 20px 0px;
        font-size: 15px;

        a {
            text-decoration: none;
            margin-left: 5px;
            font-weight: 500;
            color: ${props => props.theme.accent};
        }
    `
    return (
        <BottomBox>
            <span>{context}</span>
            <Link to={slug}>{slugText}</Link>
        </BottomBox>
    )
}

export default BottomBoxTag;