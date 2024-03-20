import React from "react";
import { useSelector } from "react-redux";

const PokemonDetail = ({ match }) => {
  const { id } = match.params;
  const pokemon = useSelector((state) =>
    state.pokemons.find((p) => p.id.toString() === id)
  );

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Abilities:</p>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonDetail;
