import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   width: 100vw;
   height: 50vw;
   .subscribe-container {
      width: 80vw;
   }
   .subscribe-content {
      display: flex;
      flex-direction: column;
      height: 46vw;
      width: 60vw;
      justify-content: center;
      align-items: center;
      margin-left: 8vw;
      bottom: 0.8vw;
   }
   .subscribe-img {
      height: 26vw;
      width: 70vw;
      margin-top: 10vw;
      margin-left: 6vw;
   }
   .subscribe-title {
      width: 45vw;
      height: 5vw;
      font-size: 1.6vw;
      text-align: center;
      color: ${(props) => props.theme.purple};
      font-weight: 700;
   }
   .subscribe-buttons {
      height: 10vw;
      display: flex;
      gap: 10vw;
      font-size: 1vw;
      font-weight: 500vw;
      color: black;
      align-items: center;
   }
   .subscribe-button-1 {
      width: 12vw;
      height: 5vw;
      border-radius: 0.5vw;
      font-size: 1vw;
      text-align: center;
      font-weight: 800vw;
      background-color: #EAEAEA;
      color: black;
      transition: all 0.2s ease-in-out;
   }
   .subscribe-button-2 {
      width: 12vw;
      height: 5vw;
      border-radius: 0.5vw;
      font-size: 1vw;
      font-weight: 700;
      text-align: center;
      background-image: linear-gradient(
         ${(props) => props.theme.orange},
         #ff7d68
      );
      color: white;
   }
`;
