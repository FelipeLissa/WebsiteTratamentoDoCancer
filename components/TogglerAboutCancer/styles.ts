import styled from 'styled-components';

export const ToggleStyled = styled.div`

    div.style {
    display: flex;
    flex-direction: column;
    padding: 1rem 0rem 1rem 1rem;
    border-bottom: 1px solid black;
    width: 1000px;
    
}

    h4{
    color: ${({theme}) => theme.black};
    cursor: pointer;
    margin-bottom: 1rem;
    font-size: 1rem;
    margin-left: 5rem;

    a {
        color: ${({theme}) => theme.error};
    }
    }

    div.content-parent {
        overflow: hidden;
        height: 0px;
        transition: all ease 0.3s;
        
    }
        

      .content {
            font-weight: 800px;
            width: 1200px;
        }
            
`;
