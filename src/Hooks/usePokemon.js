import { useState, useEffect } from 'react';

import { fetchPokemon, fetchTypes } from '../services/pokemon.js';

export default function usePokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [types, setTypes] = useState([]);


  useEffect(() => {
    const fetchData = async (selectedType, searchPokemon) => {
      try {
        const fetchData = async (selectedType, searchPokemon) => {
          setPokemonList(data);
          setLoading(false);
        };
      } catch (error) {
        console.log(error);
      }
    }; 

    fetchData(selectedType, searchPokemon);
  }, [selectedType, searchPokemon]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const data = await fetchTypes();
        setTypes(data.map((type) => type.type));
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchTypes();
  }, []);

  return { pokemonList, loading, types, selectedType, setSelectedType, searchPokemon };

} 
