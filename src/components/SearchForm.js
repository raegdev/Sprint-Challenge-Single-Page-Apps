import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

export default function SearchForm() {
 
      const [search, setSearch] = useState("");

      const [searchResults, setSearchResults] = useState([]);

      useEffect(() => {
        
        const results = CharacterList.filter(character =>
          
          character.toLowerCase().includes(search.toLowerCase())
        );

        setSearchResults(results);
      }, [search]);
      
      const handleChange = e => {
        setSearch(e.target.value)
      };
      return (
        <div className="App">
          <form>
           
            <label htmlFor="name">Search:</label>
            <input
              id="name"
              type="text"
              name="textfield"
              placeholder="Search"
              onChange={handleChange}
              value={search}
            />
          </form>
          <div className="character-list">
            <ul>
              {searchResults.map(character => (
                <li key={character}>{character}</li>
              ))}
            </ul>
          </div>
        </div>
      );
    
}
