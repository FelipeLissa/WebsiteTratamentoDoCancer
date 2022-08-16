import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 3vw;
   background-color: aliceblue;
   margin: 0 1vw 0 1vw;
   box-shadow: 0 0 0.5vw ${({ theme }) => theme.black};
   border-radius: 1vw;
   border: 0.06vw solid black;

   p {
      font-size: 1vw;
      text-align: left;
      font-weight: 600;
      max-width: 80vw;
      margin-bottom: 2vw;
   }
   li {
      font-size: 1vw;
   }

   h3 {
      color: ${({ theme }) => theme.primary};
      font-size: 2vw;
      margin: 4vw 0 1vw 0;
      text-transform: uppercase;
   }

   li {
      margin: 0vw 0vw 1vw 6vw;
      max-width: 65vw;
      align-items: center;
   }
   margin-top: 0.25vw;
`;
