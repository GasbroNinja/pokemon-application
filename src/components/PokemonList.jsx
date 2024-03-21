import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../redux/actions/pokemonActions";
import { Link } from 'react-router-dom';
import '../components/css/pokemonlist.css';
import pokeimages from '../components/pokeimages.json';
import PokemonImage from "./PokemonImage";

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
      <h1>Pokémon List</h1>
      <main className="container">
        <section className="">
          <div className="poke-image">
            {pokeimages.map((pokeimages) => (
              <PokemonImage key={pokeimages.id} pokeimages={pokeimages} />
            ))}
          </div>
        </section>
        <ul>
          {pokemons.length > 0 ? (
            pokemons.map((pokemon, idx) => (
              <div className="poke-info">
                <h2>
                  <Link className="link-unstyled" to={`/pokemon/${idx}`}>
                    {pokemon.name}
                  </Link>
                </h2>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </main>
    </div>
  );
};

export default PokemonList;
    

