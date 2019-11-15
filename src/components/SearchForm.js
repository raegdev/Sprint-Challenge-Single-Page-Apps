import React, { useState, useEffect } from "react";


export default function SearchForm() {
 
      const [search, setSearch] = useState("");

      const [searchResults, setSearchResults] = useState([]);

      const [chars, setChars] = useState([]);

      useEffect(() => {
        
        const results = chars.filter(character =>
          
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
