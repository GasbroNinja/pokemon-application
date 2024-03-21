import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokemons } from "../redux/actions/pokemonActions";
import { Link } from 'react-router-dom';
import '../components/css/pokemonlist.css';
import pokeimages from '../components/pokeimages.json';
/*
This is a JSON (JavaScript Object Notation) array of objects, where each object represents a Pokemon with an "id" and an "image" property.
The "id" property is an integer that uniquely identifies the Pokemon.
The "image" property is a string that contains the URL of the image of the Pokemon.
The array contains 20 objects, each representing a different Pokemon, with IDs ranging from 1 to 20.
*/

import PokemonImage from "./PokemonImage";

// This is a functional component in React that displays a list of Pokemon
const PokemonList = () => {

  // Dispatch is a function that sends an action to the Redux store
  const dispatch = useDispatch();

  // Pokemons and error are being selected from the Redux store
  const pokemons = useSelector((state) => state.pokemonsState.pokemons);
  const error = useSelector((state) => state.pokemonsState.error);

  // This useEffect hook will run once when the component mounts
  // and will dispatch an action to fetch the list of Pokemon from the API
  useEffect(() => {
    dispatch(fetchPokemons());
  }, []);

/*   // This useEffect hook will run when the pokemons state changes
  useEffect(() => {
    if(pokemons.length > 0){
      // It will map over the pokemons array and for each pokemon,
      // it will dispatch an action to fetch the details of that pokemon
      pokemons.map( pokemon => dispatch(fetchPokemonsDetails(pokemon.url)) )
    }
  }, [pokemons]); */

  // The component returns a JSX element that contains:
  // a main container, a title, a subtitle, and two main sections
  return (
    <div className="main-container">
      <h1>Pokémon List</h1>
      <h5>Click Pokemon's names for detail</h5>
      <main className="container">
        <section className="card">
          <div className="">
            {/* It maps over the pokeimages array and for each pokeimage,
            it returns a PokemonImage component */}
            {pokeimages.map((pokeimages) => (
              <PokemonImage key={pokeimages.id} pokeimages={pokeimages} />
            ))}
          </div>
        </section>

        <main className="card2">
          <ul>
            {/* If the length of pokemons is greater than 0,
            it maps over the pokemons array and for each pokemon,
            it returns a div with the pokemon's name and a link to the pokemon's page */}
            {pokemons.length > 0 ? (
              pokemons.map((pokemon, idx) => (
                <div className="poke-info">
                  <h2>
                    <li>
                      <Link className="link-unstyled" to={`/pokemon/${idx}`}>
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
    

