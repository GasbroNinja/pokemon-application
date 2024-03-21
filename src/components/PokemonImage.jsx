import React from 'react'


const PokemonImage = ({pokeimages}) => {
  return (
    <div>
        <h3>{pokeimages.id}</h3>
      <div className="poke-image">
        <img src={pokeimages.image} className="img-fluid" alt={pokeimages.id} />
      </div>
    </div>
  );
}

export default PokemonImage