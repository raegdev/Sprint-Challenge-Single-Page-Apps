import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchForm from './SearchForm';

const Welcome = styled.section`
  text-align:center;
`  

export default function WelcomePage() {

  return (
    
      <Welcome>
        <header>
          <Link to={`/chars/`}>Welcome to the ultimate fan site!</Link>

            <img
              className="main-img"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="rick" 
            />
            <SearchForm />
        </header>
      </Welcome>
    
  );
}
