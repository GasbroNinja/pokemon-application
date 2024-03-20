import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../redux/actions/pokemonActions";
import { Link } from 'react-router-dom';

const PokemonList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemonsState.pokemons);
  const error = useSelector((state) => state.pokemonsState.error);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

/*   useEffect(() => {
    if(pokemons.length > 0){
      pokemons.map( pokemon => dispatch(fetchPokemonsDetails(pokemon.url)) )
    }
  }, [pokemons]); */

  return (
    <div>
      <h2>Pokémon List</h2>
      <ul>
        {pokemons.length > 0 ? (
          pokemons.map((pokemon, idx) => (
            <li key={idx}>
              <Link to={`/pokemon/${idx}`}>{pokemon.name}</Link>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default PokemonList;
