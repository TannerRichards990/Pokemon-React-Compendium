import { useState, useEffect } from 'react';

import { fetchPokemon, fetchPokemonTypes } from '../services/pokemon.js';

export default function usePokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [types, setTypes] = useState([]);


  useEffect(() => {
    const fetchData = async (selectedType, searchPokemon) => {
      try {
        const data = await fetchPokemon (selectedType, searchPokemon);
        setPokemonList(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(selectedType, searchPokemon);
  }, [selectedType, searchPokemon]);

  useEffect(() => {
    const fetchPokemonTypes = async () => {
      try {
        const data = await fetchPokemonTypes();
        setTypes(data.map((type) => type.type));
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchPokemonTypes();
  }, []);

  return { pokemonList, loading, types, selectedType, setSelectedType, searchPokemon, setSearchPokemon };

} 
