import {lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    display: flex;
    height: 5rem;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;


    >div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            background: none;
            border: none;
            color: ${({theme}) => lighten(0.5, theme.black)};
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1rem;
            transition:0.3s;

            &:hover {
                color: ${({theme}) => theme.black};
            }
        }

        section {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        svg {
            width: 2rem;
            height: 2rem;
            color: ${({theme}) => lighten(0.5, theme.black)};
            transition: 0.5s;
            cursor: pointer;

            &:hover {
                color: ${({theme}) => theme.black};
            }
        }
    
    @media (max-width: 700px) {
        button {
            font-size: 0.9rem;
        }

        >section {
            gap: 0.5rem;
            svg {
                width: 1.5rem;
                height: 1.5rem;
            }
        }
    }
    }
`;
