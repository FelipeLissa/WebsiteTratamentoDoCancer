import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: flex-end;
   align-items: center;
   width: 60.5vw;
   height: 2.6vw;
   margin: 2vw 7.6vw 0 15.2vw;
   gap: 2vw;

   a{
      font-size: 1vw;
      transition: all 0.2s ease-in-out;
   } a:hover {
      transform: scale(1.1);
      text-decoration: underline;
      color: black;
   }

   .header-logo{
      width: 6vw;
      height: 1.75vw;
      transition: all 0.2s ease-in-out;
      margin-top: 0.5vw;
      margin-left: 2vw;
   }.header-logo:hover{
      transform: scale(1.3);
   }
   .sign{
      border: 0.06vw solid black;
      padding: 0.5vw;
      border-radius: 0.5vw;
      background: none;
   }

`;
