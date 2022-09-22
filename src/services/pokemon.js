export async function fetchPokemon(selectedType, searchPokemon) {
  const params = new URLSearchParams();
  if (selectedType !== 'all') params.set('type', selectedType);
  params.set('pokemon', searchPokemon);

  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`);
  const json = await response.json();
  return json;
}

export async function fetchPokemonTypes() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const json = await response.json();
  return json;
}