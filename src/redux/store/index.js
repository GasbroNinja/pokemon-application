import { configureStore, combineReducers} from "@reduxjs/toolkit";
import pokemonReducer from '../reducers/pokemonReducer';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
});

const store = configureStore
({
  reducer: rootReducer,
});

export default store;