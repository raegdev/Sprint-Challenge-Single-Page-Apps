import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from "./components/WelcomePage.js";
import CharacterCard from './components/CharacterCard';
import SearchForm from './components/SearchForm';
import { Route } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <SearchForm />

      <Route exact path='/' component={CharacterCard} />
      <Route exact path='/chars/:id' component={CharacterList} />
      
      {/* <CharacterList /> */}
    </main>
  );
}
