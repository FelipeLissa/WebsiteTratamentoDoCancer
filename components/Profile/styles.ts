import styled from 'styled-components';


export const Container0 = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin: 0 1vw 0 1vw;
box-shadow: 0 0 0.5vw ${({ theme }) => theme.black};
background-color: aliceblue;
border-radius: 1vw;
border: 0.06vw solid black;
padding: 4vw;
gap:5vw;`


export const Container = styled.section`
    display: flex;
    

    img {
        width: 34vw;
        height: 27vw;
        border-radius: 5px;
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
    font-size:7vw;
    }
    .a2{
    font-family: adage-script-jf, sans-serif;;
    font-style: italic;
    font-weight: 500;
    font-size:6vw;
    }
}
    h2{
    margin-bottom: 2vw;
    font-size:1.75vw;
    color:${({theme}) => theme.primary}  ;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
}

    li {
        margin-bottom: 1vw; 
        font-weight: 300;
        font-size: 1.05vw;
        font-family: 'Inter', sans-serif;
    }


    @media only screen and (max-width: 960px) {
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

export const Container1 = styled.div`
    display: flex; 

    a {
        margin: 1vw;
    }
    img {
        cursor: pointer;
        width: 12vw;
        height: 6vw;
        border-radius: 0.3vw;
        transition:0.5s;
        box-shadow: 0 0 0.25vw ${({ theme }) => theme.black};

    } img:hover { 
    	transform: scale(1.1);
    }
`;
export const Container2 = styled.div`
    display: flex;
    flex-direction: column;


    .title {
    font-size:3vw;
    color:${({theme}) => theme.black}  ;
    font-family: scotch-display, sans-serif;
    font-style: normal;
    font-weight: bold;
    text-align: center;
    }


    .content {
        display: flex;
    }
  
    .content-children {
        display: flex;
        width:25vw;
        margin: 1vw;
        padding: 0.2vw;
        flex-direction: column;
        text-align: center;
        border-radius: 0.3vw;
        border: 0.06vw solid black;
        gap: 1vw;
        transition: 0.5s; 
        cursor: pointer;
    }.content-children:hover {
        transform: scale(1.05); 
    }
    h1{
        font-size: 1.2vw;
        font-weight: 500;
        width: 100%;
    }
    p {
        text-align: center;
        font-size: 0.8vw;
        font-weight: 300;
        color: black;
    }
    a { 
        color: black;
    }a:hover {
        color: ${({theme}) => theme.primary};
    }
`;;

