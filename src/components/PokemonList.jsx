import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../redux/actions/pokemonActions";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

   if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Pokémon List</h2>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>
            <a href={`/pokemon/${pokemon.id}`}>{pokemon.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
