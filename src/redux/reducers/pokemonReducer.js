const initialState = {
  pokemons: [],
  error: null,
};

{/*.map((pokemon, index) => ({
          id: index + 1,
          name: pokemon.name,
        })), */}

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