import './Main.css';

import usePokemon from '../../Hooks/usePokemon';
import PokemonList from '../PokemonList/PokemonList';


export default function Main() {
  const {
    pokemonList,
    loading,
    types,  
    selectedType,
    setSelectedType,
    setSearchPokemon,
  } = usePokemon();
  if (loading) {
    return <div className="loading">Loading...</div>;
    return (
      <div className="main">
        
    )
  