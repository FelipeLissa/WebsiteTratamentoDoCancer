import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    align-items: flex-start;
    padding: 4rem;
    justify-content: center;
    align-content: center;
    gap: 6rem;
    margin-left: 1rem;
    margin-right: 1rem;
    box-shadow: 0 0 0.5em ${({ theme }) => theme.black};
    margin-bottom: -1px;
    background-color: aliceblue;
    border-radius: 15px 15px 0px 0px;
    border: 1px solid black;
    

    img {
        margin-top: 2rem;
        width: 550px;
        height: 440px;
        border-radius: 5px;
        width: fit-content;
    }
    
    div { 
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    h1{
    color: ${({theme}) => theme.black};
    .a1{
    font-family: adage-script-jf, sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size:7rem;
    }
    .a2{
    font-family: adage-script-jf, sans-serif;;
    font-style: italic;
    font-weight: 500;
    font-size:6rem;
    }
}
    h2{
    margin-bottom: 2rem;
    font-size:1.75rem;
    color:${({theme}) => theme.primary}  ;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
}

    li {
        margin-bottom: 10px; 
        font-weight: 300;
        font-family: 'Inter', sans-serif;
        font-size: 1.05rem;
    }
`

export const Container1 = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;    
    padding: 2rem;
    background-color: aliceblue;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: -1px;
    box-shadow: 0px 0px 0.5em ${({ theme }) => theme.black};
    clip-path: inset(0px -0.25em 0em -0.25em);
    gap:3rem;


    img {
        cursor: pointer;
        width: 12rem;
        height: 6rem;
        border-radius: 5px;
        transition:0.5s;
        box-shadow: 0 0 0.25em ${({ theme }) => theme.black};

    } img:hover { 
    	transform: scale(1.2); 
        cursor: pointer;
    }
`;
export const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 4rem;
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: aliceblue;
    box-shadow: 0px 0px 0.5em ${({ theme }) => theme.black};
    clip-path: inset(0px -0.25em -0.25em -0.25em);
    border-radius: 0px 0px 15px 15px;
    margin-top: -8px;
    
    .title {
    font-size:3rem;
    margin-bottom:1.5rem;
    color:${({theme}) => theme.black}  ;
    font-family: scotch-display, sans-serif;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    width: 100%;
    }
    section {
        display: flex;
        align-content: center;
        justify-content: center;
        gap: 3rem;
        
    }
  
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        background-color: aliceblue;
        padding: 20px;
        border-radius: 5px;
        transition: 0.5s; 
        border: 1px solid black;
        width: 100%;
        gap: 1rem;
        cursor: pointer;
    }div:hover {
        transform: scale(1.05); 
    }
    h1{
        font-size: 20px;
        font-weight: 500;
        width: 100%;
        letter-spacing: 0.01px;
    }
    p {
        text-align: center;
        font-weight: 300;
        color: black;
    }
    a {
        scale: 2;
        color: black;
    }a:hover {
        color: ${({theme}) => theme.primary};
    }
`;;

