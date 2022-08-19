import { Link } from "react-router-dom";
import styled from "styled-components";
import { BaseBox } from "../shared";

const BottomBoxStyle = styled(BaseBox)`
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

const BottomBox = ({ context, slug, slugText } : { context: string, slug: string, slugText: string }) => {

    return (
        <BottomBoxStyle>
            <span>{context}</span>
            <Link to={slug}>{slugText}</Link>
        </BottomBoxStyle>
    )
}

export default BottomBox;