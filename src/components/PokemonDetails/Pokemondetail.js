import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './pokemondetail.css'



export default function Pokemondetail() {
  const {id}=useParams();
  const [pokemon,setPokemon]=useState({});
  // console.log(id);
  // download data with the help of api axios for pokemon details
  async function downpoke(){
  
  const response=await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  // console.log(response.data);
  setPokemon(
    {
      name:response.data.name,
      height:response.data.height,
      weight:response.data.weight,
      id:response.data.id,
      image:response.data.sprites.other.dream_world.front_default,
      // types:response.data.types.map((t) => t.types.name)

    }
  )
  }
  useEffect(()=>{
    downpoke();
  },[])
  return (
    <div className='pokemon-detail-conainer'>
      <div>
      
      <img  className='pokemon-image' src={pokemon.image} alt="" />
      <div className='pokemon-name'>{pokemon.name}</div>
      <div className='pokemon-height'>Height:{pokemon.height}</div>
      <div className='pokemon-weight'>Weight:{pokemon.weight}</div>
      <div className='pokemon-id'>Id:{pokemon.id}</div>
      {/* <div>
        types:{pokemon.types && pokemon.types.map((t)=><div key={t}>{t}</div>)}
        </div> */}
        
    </div>
    </div>
  )
}
