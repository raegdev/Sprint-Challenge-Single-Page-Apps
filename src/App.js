import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from "./components/WelcomePage.js";
import CharacterCard from './components/CharacterCard';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.section`
  padding: 4em;
  margin: 5%;
  background: papayawhip;
`  

export default function App() {
  return (
    <Main>
      <Header />
      <WelcomePage />
      

      <Route exact path='/' component={CharacterCard} />
      <Route exact path='/chars/:id' component={CharacterList} />
      
      {/* <CharacterList /> */}
    </Main>
  );
}
