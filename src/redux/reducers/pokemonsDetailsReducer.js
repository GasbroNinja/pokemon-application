const pokemonDetailReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POKEMONS_SUCCESS':
      return [
        ...state,
        action.payload,
      ];
    case 'FETCH_POKEMONS_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonDetailReducer;