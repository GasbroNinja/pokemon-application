import { configureStore, combineReducers} from "@reduxjs/toolkit";
import pokemonReducer from '../reducers/pokemonReducer';
//import pokemonDetailsReducer from '../reducers/pokemonDetailsReducer';

const rootReducer = combineReducers({
  pokemonsState: pokemonReducer
  //pokemonsDetails: pokemonDetailsReducer
});

const store = configureStore
({
  reducer: rootReducer,
});

export default store;