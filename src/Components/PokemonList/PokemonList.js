import './PokemonList.css';
import PokemonCard from '../PokemonCard/PokemonCard';

export default function PokemonList({ pokemonList }) {
  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}