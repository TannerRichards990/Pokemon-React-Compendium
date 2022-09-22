import { useState, useEffect } from 'react';

import { fetchPokemon, fetchTypes } from '../services/pokemon.js';

export default function usePokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [types, setTypes] = useState([]);
}

useEffect(() => {
  const fetchData = async (selectedType, searchPokemon) => {
    try {
      
    }