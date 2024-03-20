import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../redux/actions/pokemonActions";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  console.log(pokemons);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

   if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Pokémon List</h2>
      {/*href={`/pokemon/${pokemon.id}`}*/}
      <ul>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
