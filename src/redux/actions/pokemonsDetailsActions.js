export const fetchPokemonDetails = (url) => async (dispatch) => {
  try {
    const response = await fetch('url');
    const data = await response.json();
    dispatch({ type: 'FETCH_POKEMONDETAILS_SUCCESS', payload: data.results });
  } catch (error) {
    dispatch({ type: 'FETCH_POKEMONDETAILS_FAILURE', payload: error.message });
  }
};