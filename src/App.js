import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from "./components/WelcomePage.js";
import CharacterCard from './components/CharacterCard';
import { Route } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />

      <Route exact path='/' component={CharacterList} />
      <Route exact path='/chars/:id' component={CharacterCard} />
      
      {/* <CharacterList /> */}
    </main>
  );
}
