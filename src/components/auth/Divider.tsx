import styled from "styled-components";

const Divider = () => {

    const Divider = styled.div`
        display: flex;
        justify-content: space-evenly; 
        align-items: center;
        width: 90%;
        margin-bottom: 10px;

        div {
            background-color: #ededed;
            height: 1px;
            width: 100%;
        }

        span {
            color: #959393d9;
            text-transform: uppercase;
            margin: 0px 25px;
            font-size: 14px;
            font-weight: bold;
        }
    `

    return (
        <Divider>
            <div></div>
            <span>or</span>
            <div></div>
        </Divider>
    )
}

export default Divider;