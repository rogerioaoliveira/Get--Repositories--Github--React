import styled from "styled-components";

export const HomeContainer = styled.div`
    height: 100%;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itens: center;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;
    margin-top: 50vh;
`;
export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: .5rem 0 0 .5rem;
    height: 3rem;
    padding: 0 .5rem;        
    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;
export const Button = styled.button`
    height: 3rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .5rem .5rem 0;
    cursor: pointer;
`;
export const Error = styled.p`
    color: red;
    display: block;
    font-size: 1rem;
    font-weigth: 600;
    margin-top: 1rem;
    margin-left: 52rem;
`;