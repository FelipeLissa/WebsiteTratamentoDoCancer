import styled from 'styled-components';

export const Container = styled.div`
   height: 2vw;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding: 0vw 20vw 0vw 3vw;
   background-color: darkseagreen;

   a {
      font-weight: bold;
      font-size: 1.1vw;
      border-right: 0.06vw solid black;
      border-left: 0.06vw solid black;
      padding: 0vw 1vw 0vw 1vw;
   }
`;
