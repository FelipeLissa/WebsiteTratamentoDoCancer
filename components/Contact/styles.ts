import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 3vw;
   background-color: aliceblue;
   margin-left: 1vw;
   margin-right: 1vw;
   box-shadow: 0 0 0.5vw ${({ theme }) => theme.black};
   border-radius: 1vw;
   border: 0.06vw solid black;

   .a1 {
      font-weight: 700;
      text-decoration: underline;
   }
   div {
      gap: 1vw;

      li {
         padding: 0.2vw;
         font-size: 1vw;
      }
      .title {
         margin-bottom: 1vw;
         font-size: 2vw;
      }
   }

   section {
      display: flex;
      flex-direction: row;
      gap: 14vw;

      div {
         iframe {
            width: 25vw;
            height: 20vw;
         }
      }
   }
`;

export const FormStructure = styled.div`
   display: flex;
   flex-direction: column;

   .title {
         margin-bottom: 1vw;
         font-size: 2vw;
      }
`;

export const FormContainer = styled.form`
   display: flex;
   flex-direction: column;
   gap: 1.75vw;

   button {
      border: none;
      padding: 1vw 2.5vw;
      color: white;
      font-weight: 500;
      font-size: 1.2vw;
      border-radius: 0.5vw;
      background: #1e40ff6e;
      transition: 0.5s;
      &:disabled {
         opacity: 0.5;
      }
      &:not(:disabled):hover {
         background: ${({ theme }) => theme.primary};
      }
   }
`;

export const Input = styled.input`
   height: 3vw;
   width: 25vw;
   border: 0.06vw solid ${({ theme }) => theme.border};
   padding: 1.7vw 1.5vw;
   border-radius: 0.5vw;
   font-size: 1.1vw;
   outline: none;
   transition: 0.5s;
   border-color: ${({ theme }) => theme.primary};
`;
export const TextArea = styled.textarea`
   height: 10vw;
   width: 25vw;
   border: 0.06vw solid ${({ theme }) => theme.border};
   padding: 1.7vw 1.5vw;
   border-radius: 0.5vw;
   font-size: 1.1vw;
   outline: none;
   transition: 0.5s;
   resize: none;
   border-color: ${({ theme }) => theme.primary};
`;
