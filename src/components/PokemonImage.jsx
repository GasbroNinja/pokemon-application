import React from 'react'



// This is a functional component in React that displays a single Pokemon image
const PokemonImage = ({pokeimages}) => {

  // The component accepts a single prop, pokeimages, which is an object
  // containing information about a single Pokemon

  // The component returns a JSX element that contains:
  // a div, a h3 with the pokemon's id, and an image of the pokemon
  return (
    <div>
        <h3>{pokeimages.id}</h3>
      <div className="poke-image">
        <img src={pokeimages.image} className="img-fluid" alt={pokeimages.id} />
      </div>
    </div>
  );
};

export default PokemonImage