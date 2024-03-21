
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import {React,  useEffect, useState } from "react";
import "../components/css/pokemondetail.css";

// This is a functional component in React that displays the details of a single Pokemon
const PokemonDetail = () => {

  // Extract the id from the URL parameters
  const { id } = useParams();

  // State variable to store the details of the Pokemon
  const [pokemonDetail, setPokemonDetail] = useState(null);

  // Selected pokemon from the Redux store
  const pokemonData = useSelector((state) => state.pokemonsState.pokemons[id]);

  // useEffect hook to fetch the details of the Pokemon when the component mounts
  useEffect(() => {
    if (pokemonData?.url) { // Check if pokemon exists and if details are not already fetched
      fetchPokemonDetails(pokemonData.url);
    }
  }, [pokemonData]);

  // Function to fetch the details of the Pokemon
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

  // if the pokemonDetail is null, return a loading message
  //if (!pokemon) return <div>Loading...</div>;

  return (
    <div className="main-container">
      {pokemonDetail ? (
        <div className="container">
          <div className="">
            <h1>{pokemonDetail.name}</h1>
            <h1>#00{pokemonDetail.order}</h1>
          </div>
          <section className="card">
            <div>
              <h4>Type:</h4>
              <ul className="link-unstyled">
                {pokemonDetail.types.map((typesItem, index) => (
                  <li className="name_value_type_ability" key={index}>
                    {typesItem.type.name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Stats:</h4>
              <ul className="link-unstyled">
                {pokemonDetail.stats.map((statsItem, index) => (
                  <li c key={index}>
                    <span className="name_value_type_ability2">
                      {statsItem.stat.name}
                    </span>
                    <span className="value_stat">{statsItem.base_stat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4>Exp:</h4>
              <div className="container_2">
                <p className="name_value_type_ability2">
                  {pokemonDetail.base_experience}
                </p>
              </div>
            </div>
            <div>
              <h4>Height:</h4>
              <div className="container_2">
                <p className="name_value_type_ability2">{pokemonDetail.height}</p>
              </div>
            </div>
            <div>
              <h4>Weight:</h4>
              <div className="container_2">
                <p className="name_value_type_ability2">{pokemonDetail.weight}</p>
              </div>
            </div>

            <h4>Abilities:</h4>
            <ul className="link-unstyled">
              {pokemonDetail.abilities.map((abilityItem, index) => (
                <li className="name_value_type_ability" key={index}>
                  {abilityItem.ability.name}
                </li>
              ))}
            </ul>
          </section>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PokemonDetail;
