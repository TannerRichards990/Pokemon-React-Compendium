import './PokemonCard.css';

export default function PokemonCard({ pokemon, url_image, type_1, type_2, hp }) {
  return (
    <div className="pokemon-card">
      <div className="pokemon-card__image">
        <img className='pokemon_img' src={url_image} alt={pokemon} />
      </div>
      <div className="pokemon-card__info">
        <h3 className="pokemon-card__name">{pokemon}</h3>
        <div className="pokemon-card__types">
          <div className="pokemon-card__type">Type 1: {type_1}</div>
          {type_2 !== 'NA' && <div className="pokemon-card__type">Type 2: {type_2}</div>}
        </div>
        <div className="card-stats">
          <div className="card__stat">
            <div className="pokemon-card__stat-name">HP:</div>
            <div className="pokemon-card__stat-value">{hp}</div>
          </div>
        </div>
      </div>
    </div>
  );
}