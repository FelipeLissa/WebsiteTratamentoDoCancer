import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    padding: 3rem;
    background-color: aliceblue;
    margin-left: 1rem;
    margin-right: 1rem;
    box-shadow: 0 0 0.5em ${({ theme }) => theme.black};
    border-radius: 1rem;
    border: 1px solid black;

    .a1{
        font-weight:700;
        text-decoration: underline;
      }
    div {
      gap: 1rem;

      li {
        padding: 0.2rem;
      }
      >h1{
        margin-bottom: 1rem;
      }

      
    }

    section {
        display: flex;
        flex-direction: row;
        gap: 14rem;
        
      }
`;

export const FormStructure = styled.div`
display:flex;
flex-direction:column;

>h1{
  margin-bottom: 1rem;
  
}
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;

    button {
    border: none;
    padding: 1rem 2.5rem;
    color: white;
    font-weight: 500;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: #1E40FF6E;
    transition: 0.5s;
    &:disabled {
      opacity: 0.5;
    }
    &:not(:disabled):hover {
      background: ${({ theme }) => theme.primary};
      
    }
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 25rem;
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  outline: none;
  transition: 0.5s;
  border-color: ${({ theme }) => theme.primary};
`
export const TextArea = styled.textarea`
    height: 10rem;
    width: 25rem;
    border: 1px solid ${({ theme }) => theme.border};
    padding: 1.7rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    outline: none;
    transition: 0.5s;
    resize: none;
    border-color: ${({ theme }) => theme.primary};
`;


