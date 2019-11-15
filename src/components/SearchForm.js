import React, { useState, useEffect } from "react";

export default function SearchForm() {
 
      const [search, setSearch] = useState("");

      const [searchResults, setSearchResults] = useState([]);

      useEffect(() => {
        
        const results = characters.filter(character =>
          
          character.toLowerCase().includes(search.toLowerCase())
        );

        setSearchResults(results);
      }, [searchTerm]);
      
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
              value={searchTerm}
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
