import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 2vw;
   .main-div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 41.6vw;
      width: 100vw;
   }
   .text-div {
      display: flex;
      flex-direction: column;
      width: 28.3vw;
      justify-content: center;
   }

   .img-travel {
      width: 32vw;
      height: 16vw;
   }
   .div-img1 {
      width: 32vw;
      height: 16vw;
   }
   .div-img2 {
      width: 40vw;
      height: 48vw;
   }
   .img-mulher {
      width: 40vw;
      height: 48vw;
   }
   .title {
      font-family: poppins, sans-serif;
      font-weight: 700;
      color: ${(props) => props.theme.orange};
      font-size: 1.5vw;
   }
   .subtitle {
      font-family: poppins, sans-serif;
      font-weight: 500;
      color: ${(props) => props.theme.purple};
      font-size: 1vw;
   }
   .buttons {
      display: flex;
      justify-content: flex-start;
      margin-top: 3vw;
   }
   .button-img {
      width: 9vw;
      height: 2.8vw;
      margin-left: 1.5vw;
   }
   .img-button {
      width: 9vw;
      height: 2.8vw;
   }.img-button{
      cursor: pointer;  
   }
   .button1 {
      background-image: linear-gradient(
         ${(props) => props.theme.lightorange},
         #FE9444
      );
      border-radius: 0.6vw;
      border: none;
      width: 8.8vw;
      height: 3.1vw;
      font-size: 1vw;
      transition: all 0.2s ease-in-out;
   }.button1:hover{
      transform: scale(1.1);
   }
`;
