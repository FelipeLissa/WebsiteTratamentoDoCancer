import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   align-content: center;
   .content {
      display: flex;
      margin-top: 20vw;
      gap: 10vw;
   }
   .left-content {
      display: flex;
      flex-direction: column;
      width: 26vw;
      height: 28vw;
   }
   .right-content {
      width: 26vw;
      height: 26vw;
      display: flex;
      flex-direction: column;
   }
   .right-card {
      border-radius: 1vw;
      box-shadow: rgba(50, 50, 93, 0.25) 0vw 0.5vw 1vw -0.1vw,
         rgba(0, 0, 0, 0.3) 0vw 0.5vw 0.2vw -0.5vw;
      width: 26vw;
      height: 16vw;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      background-color: white;
      position: relative;
   }
   .avatar-img {
      height: 4vw;
      width: 4vw;
      margin-top: 0.5vw;
      margin-left: 0.5vw;
      transform: translate(-3vw, -3vw);
   }
   .left-title {
      font-size: 1vw;
      color: ${(props) => props.theme.purple};
      font-weight: 600;
   }
   .left-subtitle {
      font-size: 3vw;
      color: black;
      font-weight: 700;
      height: 12vw;
   }
   .right-card-description {
      font-size: 1vw;
      color: ${(props) => props.theme.purple};
      font-weight: 500;
      width: 25vw;
      margin-left: 0.5vw;
      margin-bottom: 2.5vw;
      line-height: 2.5vw;
   }
   .right-card-content {
      display: flex;
      flex-direction: column;
   }
   .right-card-name {
      font-size: 1vw;
      color: black;
      font-weight: 600;
      width: fit-content;
      height: 1vw;
      margin-left: 0.5vw;
      margin-bottom: 0.2vw;
   }
   .right-card-location {
      height: 2vw;
      margin-bottom: 0.5vw;
      margin-left: 0.5vw;
      font-size: 0.8vw;
   }
`;
