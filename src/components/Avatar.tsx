import styled from "styled-components";

interface SAvatarProps {
    size?: number;
}

const SAvatar = styled.div<SAvatarProps>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    border-radius: 50%; 
    background-color: #2c2c2c;
    overflow: hidden;
`

const Img = styled.img`
    max-width: 100%;
    width: 100%;
    height: 100%;
`
const Avatar = ({ url, size = 30 } : { url: string | undefined, size: number }) => {
    return (
        <SAvatar size={size}>
            { url && url.length && <Img src={url} /> }
        </SAvatar>
    )
}

export default Avatar;