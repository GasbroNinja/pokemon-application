// Import the necessary dependencies, including the configureStore and combineReducers functions from the @reduxjs/toolkit package, the pokemonReducer, and the pokemonDetailsReducer (which is currently commented out)
import { configureStore, combineReducers} from "@reduxjs/toolkit";
import pokemonReducer from '../reducers/pokemonReducer';
//import pokemonDetailsReducer from '../reducers/pokemonDetailsReducer';

// Define the rootReducer by combining the pokemonReducer and pokemonDetailsReducer (which is currently not being used) using the combineReducers function
const rootReducer = combineReducers({
  pokemonsState: pokemonReducer
  //pokemonsDetails: pokemonDetailsReducer
});

// Configure the Redux store with the rootReducer and any necessary middleware or enhancers
const store = configureStore
({
  reducer: rootReducer,
});

// Export the Redux store as the default export
export default store;