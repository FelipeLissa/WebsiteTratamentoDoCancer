import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.header`
display: flex;
justify-content: center;
height: 7vw;
margin-bottom: -2px;

img {
    width:15vw;
    height:7vw;
}

ul {
    width: 90%;
    display: flex;
    align-items: center;
    text-align:center;
    justify-content: space-between;
}

@media only screen and (min-width: 768px) {
   /* default iPad screens */
   ul {
gap:0.5rem;
        }
}
@media only screen and (min-width: 900px) {
        /* styles for browsers larger than 960px; */
        ul {
    gap:1rem;
            }
    }
    @media only screen and (min-width: 1440px) {
        /* styles for browsers larger than 1440px; */
        ul {
    gap:3rem;
            }
    }
    @media only screen and (min-width: 2000px) {
        /* for sumo sized (mac) screens */
    }
    @media only screen and (max-device-width: 480px) {
       /* styles for mobile browsers smaller than 480px; (iPhone) */
    }
     
    }
`;





interface NavLinkProps {
    isActive: boolean
}
export const NavLinkContainer = styled.li<NavLinkProps>`
p{  max-width: 10rem;
    padding-top: 0.75vw;
    font-family: gravesend-sans, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1.2vw;
    text-transform: uppercase;
    color: ${(props) => props.isActive ? props.theme.black : lighten(0.5, props.theme.black)};
    transition: 0.5s;
    

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
        color:${props => props.isActive 
        ? lighten(0.2, props.theme.black) 
        : lighten(0.2, props.theme.black) }
    } }  
    
    
    @media only screen and (max-width: 1080px) {
        /* styles for browsers larger than 960px; */

    }
    @media only screen and (max-width: 1440px) {
        /* styles for browsers larger than 1440px; */
    }
    @media only screen and (max-width: 2000px) {
        /* for sumo sized (mac) screens */
    }
    @media only screen and (max-device-width: 480px) {
       /* styles for mobile browsers smaller than 480px; (iPhone) */
    }
    @media only screen and (device-width: 768px) {
       /* default iPad screens */
    }
    `
