import styled from 'styled-components';




export const Container = styled.div`
   align-self: center;
   margin-bottom: 4vw;
   
   
   
   
   h1 { width: fit-content;
        text-align: center;
        background-image: linear-gradient(lightblue, aliceblue);
        border-radius: 1vw;
        font-family: gravesend-sans, sans-serif;
        font-weight: 500;
        font-size: 3.5vw;
        color: ${({theme}) => theme.primary };
        padding: 1vw;
        border:0.12vw solid ${({theme}) => theme.primary };

        }
`;
