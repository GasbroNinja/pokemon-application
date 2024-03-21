// Define the initial state of the pokemon reducer with an empty pokemons array and null error
const initialState = {
  pokemons: [],
  error: null,
};

// Define the pokemon reducer function with a state argument that defaults to the initial state and an action argument
const pokemonReducer = (state = initialState, action) => {

  // Use a switch statement to determine how to update the state based on the action type
  switch (action.type) {

    // If the action type is 'FETCH_POKEMONS_SUCCESS', return a new state object with the updated pokemons array and null error
    case 'FETCH_POKEMONS_SUCCESS':
      return {
        ...state,
        pokemons: action.payload,
        error: null,
      };

    // If the action type is 'FETCH_POKEMONS_FAILURE', return a new state object with the updated error message
    case 'FETCH_POKEMONS_FAILURE':
      return {
        ...state,
        error: action.payload,
      };

    // If the action type does not match any cases, return the current state
    default:
      return state;
  }
};

// Export the pokemon reducer as the default export
export default pokemonReducer;