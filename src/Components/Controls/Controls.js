import Filter from '../Filter/Filter';
import SearchPokemon from '../SearchPokemon/SearchPokemon';
import PageChange from '../PageChange/PageChange';
import './Controls.css';




export default function Controls({ types, selectedType, setSelectedType, setSearchPokemon, pageTotal, changePage, setChangePage }) {
  return (
    <div className="controls"> 
      <div className='filter-part'>
        <Filter types={types} selectedType={selectedType} setSelectedType={setSelectedType} />
      </div> 
      <div className='search-part'>
        <SearchPokemon setSearchPokemon={setSearchPokemon} />
        <PageChange pageTotal={pageTotal} changePage={changePage} setChangePage={setChangePage} />
      </div>
    </div>
  );
}
  
