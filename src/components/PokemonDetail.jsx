
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import {React,  useEffect, useState } from "react";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const pokemonData = useSelector((state) =>
  state.pokemonsState.pokemons[id]
  );
  
  
  useEffect(() => {
    if (pokemonData?.url) { // Check if pokemon exists and if details are not already fetched
      fetchPokemonDetails(pokemonData.url);
    }
  }, [pokemonData]);

  const fetchPokemonDetails = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      // Dispatch action to update details in the Redux store
      setPokemonDetail(data)
    } catch (error) {
      console.error('Error fetching Pokemon details:', error);
    }
  };

  //if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
    {pokemonDetail ? (
      <div>
        <h2>{pokemonDetail.name}</h2>
        <p>Height: {pokemonDetail.height}</p>
        <p>Weight: {pokemonDetail.weight}</p>
        <p>Abilities:</p>
        <ul>
        {pokemonDetail.abilities.map((abilityItem, index) => (
            <li key={index}>{abilityItem.ability.name}</li>
          ))}
        </ul>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  );
};

export default PokemonDetail;
