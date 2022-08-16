import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.footer`
   display: flex;
   height: 5vw;
   align-items: center;
   justify-content: center;
   margin: 2vw;

   > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
         background: transparent;
         border: none;
         color: ${({ theme }) => lighten(0.5, theme.black)};
         text-transform: uppercase;
         font-weight: 600;
         font-size: 1vw;
         transition: 0.3s;

         &:hover {
            color: ${({ theme }) => theme.black};
         }
      }

      section {
         display: flex;
         align-items: center;
         gap: 1vw;
      }

      svg {
         width: 2vw;
         height: 2vw;
         color: ${({ theme }) => lighten(0.5, theme.black)};
         transition: 0.5s;
         cursor: pointer;

         &:hover {
            color: ${({ theme }) => theme.black};
         }
      }
   }
`;
