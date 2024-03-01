import React from 'react';
import {Routes,Route} from 'react-router-dom';
import Useeffect from '../API/Useeffect';
import Pokemondetail from '../PokemonDetails/Pokemondetail';

export default function CustomRoutes() {
  return (
    <Routes>
     <Route path='/' element={<Useeffect/>}></Route>
     <Route path='/pokemon/:id' element={<Pokemondetail/>}></Route>
    </Routes>
  )
}
