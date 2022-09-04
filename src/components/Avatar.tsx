import styled from "styled-components";

const SAvatar = styled.div`
    border-radius: 15px; 
    width: 25px;
    height: 25px;
    background-color: #2c2c2c;
`

const Img = styled.img`
    max-width: 100%;
`
const Avatar = ({ url } : { url: string | undefined }) => {
    return (
        <SAvatar>
            { url && url.length && <Img src={url} /> }
        </SAvatar>
    )
}

export default Avatar;