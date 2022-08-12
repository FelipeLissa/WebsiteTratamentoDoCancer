import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem;
    background-color: aliceblue;
    margin-left: 1rem;
    margin-right: 1rem;
    box-shadow: 0 0 0.5em ${({ theme }) => theme.black};
    border-radius: 1rem;
    border: 1px solid black;

p { 
    text-align:left;
    font-weight: 600;
    max-width: 1200px;
    margin-bottom: 1rem;
}

h3 {
    color: ${({theme}) => theme.primary};
    font-size: 2rem;
    padding-bottom: 0.5rem;
    padding: 2rem 2rem 2rem 1rem;
}

li {margin-left: 6rem;
    margin-bottom:10px;
    
    max-width: 900px;
    align-items: center;
}
ul {
    margin-top: 0.25rem;
}
`;
