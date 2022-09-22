export async function fetchPokemon(selectedType, searchPokemon) {
  const params = new URLSearchParams();
  params.set('perPage', 15);
  if (selectedType !== 'all') params.set('type', selectedType);
  params.set('pokemon', searchPokemon);

  const response = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`);
  const data = await response.json();
  return data.results;
}

export async function fetchPokemonTypes() {
  const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
  const data = await response.json();
  return data;
}