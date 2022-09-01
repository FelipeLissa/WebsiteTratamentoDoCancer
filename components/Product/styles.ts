import styled from 'styled-components';

interface ProductContainerProps {
   imgUrl: string;
}
export const ProductCard = styled.div<ProductContainerProps>`
   display: flex;
   flex-direction: column;
   background-color: white;
   height: 25vw;
   width: 18vw;
   box-shadow: 0vw 0vw 0.2vw black;
   border-radius: 0.2vw;
   transition: all 0.2s ease-in-out;
   :hover {
      transform: scale(1.05);
   }
   .Card-PromoBox {
      height: 3vw;
      width: 3vw;
      background-color: #FF6500;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      border-radius: 0.2vw 0vw 0vw 0vw;
   }
   .Card-PromoBox-a1 {
      font-size: 1vw;
      font-weight: bolder;
      color: white;
   }
   .Card-img {
      height: 15vw;
      width: 18vw;
      background: url(${(props) => props.imgUrl}) no-repeat ;
      background-size: cover;
   }
   .Card-Description {
      display: flex;
      flex-direction: column;
   }
   .Card-Description-title {
      font-size: 1vw;
   }
   .Card-Description-oldPrice {
      font-size: 1vw;
      text-decoration: line-through;
      color: grey;
   }
   .Card-Description-newPrice {
      font-size: 1vw;
      color: black;
      font-weight: 600;
   }
   .Card-Description-a1 {
      font-size: 1vw;
      color: black;
   }
   .Card-button {
      background-color: #FF6500;
      height: 2.5vw;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0vw 0vw 0.2vw 0.2vw;
   }
   .Card-button-icon-clock {
   }
   .Card-button-text {
      display: flex;
      flex-direction: column;
      font-size: 1vw;
   }
   .Card-button-text-a1 {
      font-size: 1vw;
      color: white;
   }
   .Card-button-text-a2 {
      font-size: 1vw;
      color: white;
   }
   .Card-button-hover {
      display: flex;
   }
   .Card-button-hover-text-a1 {
      font-size: 1vw;
      color: white;
   }
`;
export const ProductIndexContainer = styled.div`
   display: flex;
   justify-content: center;
   flex-direction: row;
   flex-wrap: wrap;
   gap: 5vw;
   padding: 2vw;
   background-image: url('./Sem título1.png');
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
`;
