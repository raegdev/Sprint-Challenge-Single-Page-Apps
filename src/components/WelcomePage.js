import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

const Welcome = styled.section`
  text-align:center;
`  

export default function WelcomePage() {
  return (
    <Router>
      <Welcome>
        <header>
          <h1>Welcome to the ultimate fan site!</h1>

            <img
              className="main-img"
              src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
              alt="rick"
            />
        </header>
      </Welcome>
    </Router>
  );
}
