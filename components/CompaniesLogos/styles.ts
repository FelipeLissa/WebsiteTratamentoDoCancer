import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 10vw;
.container-logos {
    gap: 4vw;
    width: 60vw;
    height: 20vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
 .logo-img {
    width: 10vw;
    height: 10vw;
    transition: all 0.2s ease-in-out; 
 } .logo-img:hover{
    transform: scale(1.1);
 }
`;
