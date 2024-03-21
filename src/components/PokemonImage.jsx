import React from 'react'


const PokemonImage = ({pokeimages}) => {
  return (
    <div className="poke-image">
        <img src={pokeimages.image} className="img-fluid" alt={pokeimages.id} />
    </div>
  );
}

export default PokemonImage