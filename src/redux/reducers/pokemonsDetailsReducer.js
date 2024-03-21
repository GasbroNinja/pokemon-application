// Define the pokemonDetailReducer function with a state argument that defaults to an empty array and an action argument
const pokemonDetailReducer = (state = [], action) => {

  // Use a switch statement to determine how to update the state based on the action type
  switch (action.type) {

    // If the action type is 'FETCH_POKEMONS_SUCCESS', return a new state array with the updated pokemon data
    case 'FETCH_POKEMONS_SUCCESS':
      return [
        ...state,
        action.payload,
      ];

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

// Export the pokemonDetailReducer as the default export
export default pokemonDetailReducer;