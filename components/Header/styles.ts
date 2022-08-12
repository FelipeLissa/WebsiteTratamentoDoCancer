import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.header`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 7rem;
margin-top: 5px;


ul {
    display: flex;
    justify-content: space-between;
    gap: 4rem;
    align-items: center;
    text-align:center;
}

    
img { 
        width: 15rem;
        height: 7rem;
    }


`;

interface NavLinkProps {
    isActive: boolean
}
export const NavLinkContainer = styled.li<NavLinkProps>`
p{  
    margin-top: 0.75rem;
    max-width: 180px;
    font-family: gravesend-sans, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: ${(props) => props.isActive ? props.theme.black : lighten(0.5, props.theme.black)};
    transition: 0.5s;
    line-height: 25px;
    

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        color:${props => props.isActive 
        ? lighten(0.2, props.theme.black) 
        : lighten(0.2, props.theme.black) }
    } }    
    `
