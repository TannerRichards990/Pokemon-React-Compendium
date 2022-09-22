import { useState } from 'react';

export default function Search({ setSearchPokemon }) {
  const [currentSearchPokemon, setCurrentSearchPokemon] = useState('');
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        setSearchPokemon(currentSearchPokemon);
      }}>
        <input
          value={currentSearchPokemon}
          onFocus={() => setCurrentSearchPokemon('')}
          onChange={(e) => setCurrentSearchPokemon(e.target.value)}
          type="text"
          placeholder="Search Pokemon"
        />
        <button type="submit">Search</button>
      </form>
      <button className='search-button' onClick={() => setSearchPokemon('')}>Clear Search</button>
    </div>
  );
}