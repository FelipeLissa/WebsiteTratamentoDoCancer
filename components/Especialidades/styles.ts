
import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3vw;
    background-color: aliceblue;
    margin-left: 1vw;
    margin-right: 1vw;
    box-shadow: 0px 0px 0.5vw ${({ theme }) => theme.black};
    border-radius: 1vw;
    border: 0.06vw solid black;

    

    .divelement {
        margin-top: 3vw;

        p{
            font-size: 1vw;
        }

        h1 {
            color: ${({theme}) => theme.primary};
            font-size: 2vw;
            padding-bottom: 0.5vw;
            padding: 2vw 2vw 2vw 1vw;
    }
    >img {
        cursor: pointer;
        box-shadow: 0 0 0.25vw ${({ theme }) => theme.black};

    }
    }
`;