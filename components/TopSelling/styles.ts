import styled from 'styled-components';

export const Container = styled.div`
   height: 5    0vw;
   width: 100vw;
   margin-top: 5vw;

   img {
      width: 100vw;
      height: 56.25vw;
   }
   .category {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1vw;
   }
   .div-title {
      display: flex;
      justify-content: space-around;
      width: 16.4vw;
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
      margin-top: 5vw;
      gap: 1vw;
      height: 23.5vw;
      width: 16.4vw;
      border: none;
      border-radius: 2vw;
      transition: all 0.2s ease-in-out;
   }
   .card:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 0.18vw 0.48vw;
      transform: scale(1.1);
   }
   .card-img {
      width: 16.4vw;
      height: 17vw;
      border-radius: 2vw 2vw 0vw 0vw;
   }
   .card-title {
      font-size: 1vw;
      font-weight: 600;
      color: ${(props) => props.theme.purple};
   }
   .card-price {
      color: ${(props) => props.theme.purple};
      font-size: 1vw;
   }
   .card-subtitle {
      text-align: center;
      font-size: 0.8vw;
      font-weight: 600;
      width: 10vw;
      line-height: 1.3vw;
   }
`;
