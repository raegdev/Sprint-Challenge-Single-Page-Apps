import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from "./components/WelcomePage.js";
import CharacterCard from './components/CharacterCard';
import LocationList from './components/LocationsList';
import EpisodeList from './components/EpisodeList';
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
      {/* <Header /> */}
      {/* <WelcomePage />
      <CharacterList /> */}
      <Header/>
      
      <Route path='/'><WelcomePage/></Route>
      <Route path='/chars/'><CharacterList/></Route>

      {/* STRETCH */}
      <Route path='/location/'><LocationList/></Route>
      <Route path='/episode/'><EpisodeList/></Route>
      
      
      
    </Main>
  );
}
