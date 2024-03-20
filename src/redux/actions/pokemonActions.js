export const fetchPokemons = () => async (dispatch) => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
    const data = await response.json();
    dispatch({ type: 'FETCH_POKEMONS_SUCCESS', payload: data.results });
  } catch (error) {
    dispatch({ type: 'FETCH_POKEMONS_FAILURE', payload: error.message });
  }
};