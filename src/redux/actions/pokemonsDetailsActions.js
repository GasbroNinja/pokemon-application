// Export an asynchronous action creator called 'fetchPokemonDetails' that takes in a single argument 'url'
export const fetchPokemonDetails = (url) => async (dispatch) => {

  // Define a try-catch block to handle any errors that may occur during the fetch request
  try {

    // Make a GET request to the provided URL
    const response = await fetch(url);

    // If the request is successful, convert the response to JSON format
    const data = await response.json();

    // Dispatch a 'FETCH_POKEMONDETAILS_SUCCESS' action with the payload containing the pokemon data
    dispatch({ type: 'FETCH_POKEMONDETAILS_SUCCESS', payload: data.results });

  // If an error occurs during the fetch request, dispatch a 'FETCH_POKEMONDETAILS_FAILURE' action with the error message as the payload
  } catch (error) {
    dispatch({ type: 'FETCH_POKEMONDETAILS_FAILURE', payload: error.message });
  }
};