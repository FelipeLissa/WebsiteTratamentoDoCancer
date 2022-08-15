import styled from 'styled-components';

export const ToggleStyled = styled.div`

    div.style {
    display: flex;
    flex-direction: column;
    padding: 1vw 0vw 1vw 1vw;
    border-bottom: 0.06vw solid black;
    width: 70vw;
    
}

    h4{
    color: ${({theme}) => theme.black};
    cursor: pointer;
    margin-bottom: 1vw;
    font-size: 1vw;
    margin-left: 5vw;

    a {
        color: ${({theme}) => theme.error};
    }
    }

    div.content-parent {
        overflow: hidden;
        transition: all ease 0.3s;
        
    }
        

      .content {
            font-weight: 800;
            width: 75vw;
        }
            
`;
