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
  } = usePokemon();

  if (loading) return <div className="loading"><BarLoader
    color="#272db9"
    height={8}
    width={200}
  /></div>;
  return (
    <div className="main">
      <Controls types={types} selectedType={selectedType} 
        setSelectedType={setSelectedType} setSearchPokemon={setSearchPokemon} />
      <PokemonList pokemonList={pokemonList} />
    </div>
  );
}