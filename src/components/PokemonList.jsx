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
    <div className="main-container">
      <h1>Pokémon List</h1>
      <h4>Click Pokemon's names for detail</h4>
      <main className="container">
        <section className="card">
          <div className="">
            {pokeimages.map((pokeimages) => (
              <PokemonImage key={pokeimages.id} pokeimages={pokeimages} />
            ))}
          </div>
        </section>

        <main className="card2">
          <ul>
            {pokemons.length > 0 ? (
              pokemons.map((pokemon, idx) => (
                <div className="poke-info">
                  <h2>
                    <li>
                      <Link className="link-unstyled " to={`/pokemon/${idx}`}>
                        {pokemon.name}
                      </Link>
                    </li>
                  </h2>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>
        </main>
      </main>
    </div>
  );
};

export default PokemonList;
    

