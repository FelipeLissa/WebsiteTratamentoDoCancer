import styled from 'styled-components';

export const Container = styled.div`
   display: flex;
   justify-content: center;
   box-shadow: 0 0 0.5vw ${({ theme }) => theme.black};
   width: 80vw;
`;
