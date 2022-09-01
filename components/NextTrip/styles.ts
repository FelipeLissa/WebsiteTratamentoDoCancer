import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    height: 60vw;
    .content {
        display: flex;
        margin-top: 20vw;
        gap: 10vw;
    }
    .left-content{
        width: 26vw;
        height: 28vw;
        display: flex;
        flex-direction:column;
    }
    .left-title {
        font-size: 1vw;
        color: ${(props) => props.theme.purple};
        font-weight: 600;
        width: fit-content;
    }
    .left-subtitle{
        font-size: 3vw;
        color: black;
        font-weight: 700;
        height: 12vw;
    }
    .left-card {
        margin-top: 3vw;
        width: 30vw;
        padding: 2.5vw;
        border-radius: 5vw;
    }
    .left-subcard {
        display: flex;
        width: 22vw;
        align-items: center;
        gap: 2vw;
        height: 5vw;
        
    }
    .left-subcard-img {
        width: 10vw;
        height: 2.5vw;
    }
    .left-subcard-title{
        font-size: 0.8vw;
        color: ${(props) => props.theme.purple};
        font-weight: 800;
        width: 25vw;
        height: 2vw;
    }
    .left-subcard-subtitle {
        font-weight: 400;
        font-size: 1vw;
        width: 40vw;
    }
    .right-content{
        width: 26vw;
        height: 28vw;
        display: flex;
        flex-direction: column;
    }
    .right-card{
        display: flex;
        flex-direction: column;
        width: 19.3vw;
        height: 20.8vw;
        border-radius: 2vw;
        background-color: white;
        gap: 1vw;
        padding-left: 1vw;
        transition: all 0.2s ease-in-out;
    } .right-card:hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0vw 0.18vw 0.8vw;
        transform: scale(1.2);
    }

    .right-card-img{
        width: 17vw ;
        height: 8vw;
        margin-top: 1vw;
    }
    .right-title{
        height: 1vw;
        font-size: 1vw;
        font-weight: 600;
        color:black;
        margin-top: 1vw;
    }
    .right-subtitle{
        width: 19.3vw;
        height: 2vw;
        font-size: 1vw;
        color: ${(props) => props.theme.purple};
        font-weight: 600;
    }
    .right-footer{
        height: 2vw;
        font-size: 1vw;
        color: black;
    }
    .right-icons{
        display: flex;
        height: 2vw;
        width: 2vw;
        font-size: 1vw;
    }
`;
