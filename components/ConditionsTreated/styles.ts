
import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem;
    background-color: aliceblue;
    margin-left: 1rem;
    margin-right: 1rem;
    box-shadow: 0px 0px 0.5em ${({ theme }) => theme.black};
    border-radius: 1rem;
    border: 1px solid black;

    

    .divelement {
        margin-top: 3rem;

        h1 {
            color: ${({theme}) => theme.primary};
            font-size: 2rem;
            padding-bottom: 0.5rem;
            padding: 2rem 2rem 2rem 1rem;
    }
    >img {
        cursor: pointer;
        box-shadow: 0 0 0.25em ${({ theme }) => theme.black};

    }
    }
`;