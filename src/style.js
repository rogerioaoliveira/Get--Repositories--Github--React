import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-itens: center;
    width: 98%;
    text-align: center;
    
`
export const Title = styled.h1`
    text-align: center;
    font-size: 2rem;
    font-family: sans-serif;
    color: #333;
`;
export const List = styled.ul`
    list-style: none;
    padding: none;
    font-family: sans-serif;
`;
export const ListItem = styled.li`
    margin: .5rem 0;
    background: #000;
    color: #fff;
    padding: .5rem;
`;
export const LinkHome = styled(Link)`
    display: block;
    width: 4rem;
    text-align: center;
    margin: 2rem auto;
    background-color: #000;
    color: #fff;
    text-decoration: none;
    padding: .5rem;
    border-radius: .7rem
`;