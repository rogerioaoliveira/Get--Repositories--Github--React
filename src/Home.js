import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [ usuario, setState ] = useState("");
  const [ erro, setErro ] = useState(false);

    function handlePesquisa(){
      axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {      
          let repositorios = response.data;
          let repositoriosNome = [];
          repositorios.map((repository) => {
            repositoriosNome.push(repository.name)              
          });

          localStorage.setItem("repositoriosNomes", JSON.stringify(repositoriosNome));
          setErro(false);
          history.push('/repositorios');
        })

      .catch(err => {
        setErro(true);
      });      
    }
    
  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input name="usuario" id="usuario" claaName="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setState(e.target.value)}/>
        <S.Button type="button" onClick= {handlePesquisa}>Pesquisar</S.Button>        
      </S.Content>
      { erro ? <S.Error>Ocorreu um erro, tente novamente!</S.Error> : ''}
    </S.HomeContainer> 
  );
}

export default App;
