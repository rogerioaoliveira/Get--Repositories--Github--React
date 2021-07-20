import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useHistory } from 'react-router-dom';

export default function Repositorios() {
  let [repositorios, setRepositorios] = useState([]);
  const history = useHistory();
  useEffect(() => {
    let repositoriosNome = localStorage.getItem("repositoriosNomes");
    if (repositoriosNome !== null){
      repositoriosNome = JSON.parse(repositoriosNome);
      setRepositorios(repositoriosNome);
      localStorage.clear()
    } else{
        history.push('/');
    }
  }, []);

  return (
    <S.Container>
      <S.Title>Repositórios</S.Title>
      <S.List>
         { repositorios.map(repository => {
               return (
                  <S.ListItem>Repositório: { repository }</S.ListItem>
              )
        })}
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
    )
  }
  
  