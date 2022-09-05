import styled from "styled-components";

interface SAvatarProps {
    isLarge: boolean,
}

const SAvatar = styled.div<SAvatarProps>`
    width: ${props => props.isLarge ? "30px" : "25px"};
    height: ${props => props.isLarge ? "30px" : "25px"};
    border-radius: 50%; 
    background-color: #2c2c2c;
    overflow: hidden;
`

const Img = styled.img`
    max-width: 100%;
    width: 100%;
    height: 100%;
`
const Avatar = ({ url, isLarge } : { url: string | undefined, isLarge: boolean }) => {
    return (
        <SAvatar isLarge={isLarge}>
            { url && url.length && <Img src={url} /> }
        </SAvatar>
    )
}

export default Avatar;