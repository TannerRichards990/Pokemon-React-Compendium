import './Main.css';

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
  } = usePokemon();
 
  if (loading) return <div className="loading"></div>;
  return (
    <div className="main">
      <Controls types={types} selectedType={selectedType} 
        setSelectedType={setSelectedType} setSearchPokemon={setSearchPokemon} />
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}