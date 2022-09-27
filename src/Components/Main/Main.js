import './Main.css';
import { BarLoader } from 'react-spinners';
import usePokemon from '../../Hooks/usePokemon';
import PokemonList from '../PokemonList/PokemonList';
import Controls from '../Controls/Controls';



export default function Main() {
  const {
    pokemonList,
    loading,
    types,  
    selectedType,
    setSelectedType,
    setSearchPokemon,
    pageTotal,
    changePage,
    setChangePage,
  } = usePokemon();

  if (loading) return <div className="loading"><BarLoader
    color="#272db9"
    height={8}
    width={200}
  /></div>;
  return (
    <div className="main">
      <Controls types={types} selectedType={selectedType} 
        setSelectedType={setSelectedType} setSearchPokemon={setSearchPokemon}
        pageTotal={pageTotal} changePage={changePage} setChangePage={setChangePage} />
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}