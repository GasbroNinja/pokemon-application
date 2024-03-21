// Export an asynchronous action creator called 'fetchPokemons' that takes in no arguments
export const fetchPokemons = () => async (dispatch) => {

  // Define a try-catch block to handle any errors that may occur during the fetch request
  try {

    // Make a GET request to the PokeAPI to retrieve the first 20 pokemon
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');

    // If the request is successful, convert the response to JSON format
    const data = await response.json();

    // Dispatch a 'FETCH_POKEMONS_SUCCESS' action with the payload containing the pokemon data
    dispatch({ type: 'FETCH_POKEMONS_SUCCESS', payload: data.results });

  // If an error occurs during the fetch request, dispatch a 'FETCH_POKEMONS_FAILURE' action with the error message as the payload
  } catch (error) {
    dispatch({ type: 'FETCH_POKEMONS_FAILURE', payload: error.message });
  }
};