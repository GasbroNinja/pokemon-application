const initialState = {
  pokemons: [],
  error: null,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POKEMONS_SUCCESS':
      return {
        ...state,
        pokemons: action.payload,
        error: null,
      };
    case 'FETCH_POKEMONS_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;