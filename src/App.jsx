import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Importing necessary components from 'react-router-dom'
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import "./App.css"; 

// Defining the main App component
function App() {
  return (
    <div className="App">
      {/* Render the App component within a div with class 'App' */}
      <BrowserRouter>
        {/* Start the routing configuration */}
        <Routes>
          {/* Define the routes for the application */}
          <Route path="/" element={<PokemonList />} />
          {/* Define a route for the homepage with PokemonList component */}
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          {/* Define a route for the PokemonDetail component with dynamic id */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
