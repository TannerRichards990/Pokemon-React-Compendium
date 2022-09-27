import { useState, useEffect } from 'react';

import { fetchPokemon, fetchPokemonTypes } from '../services/pokemon.js';

export default function usePokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [types, setTypes] = useState([]);
  const [pageTotal, setPageTotal] = useState(1);
  const [changePage, setChangePage] = useState(1);


  useEffect(() => {
    const fetchData = async (selectedType, searchPokemon, changePage) => {
      try {
        setLoading(true);
        const data = await fetchPokemon (selectedType, searchPokemon, changePage);
        setPokemonList(data);
        setPageTotal(Math.ceil(data.count / 15));
        setLoading(false);
      } catch (err) {
        //eslint-disable-next-line no-console
        console.error(err);
      }
    };

    fetchData(selectedType, searchPokemon, changePage);
  }, [selectedType, searchPokemon, changePage]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const data = await fetchPokemonTypes();
        setTypes(data.map((type) => type.type));
      }
      catch (err) {
        //eslint-disable-next-line no-console
        console.error(err);
      }
    };
    fetchTypes();
  }, []);

  return { pokemonList, loading, types, selectedType, setSelectedType, searchPokemon, setSearchPokemon, pageTotal, changePage, setChangePage };

} 
