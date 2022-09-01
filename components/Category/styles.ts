import styled from 'styled-components';

export const Container = styled.div`
   height: 50vw;
   width: 100vw;
   margin-top: 10vw;

   img {
      width: 100vw;
      height: 46.8vw;
   }
   .category {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1vw;
   }
   .title {
      font-size: 2vw;
      font-weight: 600;
      color: ${(props) => props.theme.purple};
   }
   .subtitle {
      font-size: 3vw;
      color: black;
      font-weight: 700;
      margin-top: 1vw;
   }
   .cards {
      display: flex;
      gap: 2vw;
   }
   .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 5vw;
      gap: 1vw;
      height: 16.3vw;
      width: 14vw;
      border: none;
      border-radius: 2vw;
      transition: all 0.2s ease-in-out;
   }
   .card:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 0.18vw 0.48vw;
      transform: scale(1.1);
   }
   .card-img {
      width: 14vw;
      height: 7.5vw;
      border-radius: 4vw;
   }
   .card-title {
      font-size: 1vw;
      font-weight: 600;
   }
   .card-subtitle {
      color: ${(props) => props.theme.purple};
      text-align: center;
      font-size: 0.8vw;
      font-weight: 600;
      width: 10vw;
      line-height: 1.3vw;
   }
`;
