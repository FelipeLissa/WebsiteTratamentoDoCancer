import styled from 'styled-components';




export const Container = styled.div`
   align-self: center;
   margin-bottom: 4rem;
   
   
   
   
   h1 { width: fit-content;
        text-align: center;
        background-image: linear-gradient(lightblue, aliceblue);
        border-radius: 15px;
        font-family: gravesend-sans, sans-serif;
        font-weight: 500;
        font-size: 3.5rem;
        color: ${({theme}) => theme.primary };
        padding: 1rem;
        border:2px solid ${({theme}) => theme.primary };

        }
`;
