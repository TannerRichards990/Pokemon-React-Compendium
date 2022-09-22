import Filter from '../Filter/Filter';
import SearchPokemon from '../SearchPokemon/SearchPokemon';


export default function Controls({ types, selectedType, setSelectedType, setSearchPokemon }) {
  return (
    <div className="controls">
      <div className='filter-part'>
        <Filter types={types} selectedType={selectedType} setSelectedType={setSelectedType} />
      </div> 
      <div className='search-part'>
        <SearchPokemon setSearchPokemon={setSearchPokemon} />
      </div>
    </div>
  );
}
  
