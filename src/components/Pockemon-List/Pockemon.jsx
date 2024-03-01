import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Pockemon.css';

import PokemonList from '../pokemon/PokemonList';


export default function Pockemon() {
  const [pockeList, setPockeList] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [pokedexURL, setPokedexURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextURL, setNextURL] = useState("");
  const [PrevURL, setPrevURL] = useState("");

  async function Apifetching() {
    setIsloading(true);
    const response = await axios.get(pokedexURL);
    console.log(response.data);
    setNextURL(response.data.next);
    setPrevURL(response.data.previous);
    const pokemonResults = response.data.results;


    // console.log(pokemonResults);0
    const PockemonResultPromise = pokemonResults.map((pokemon) =>
      axios.get(pokemon.url));
    // console.log(PockemonResultPromise);
    const pokemonData = await axios.all(PockemonResultPromise);
    console.log(pokemonData);
    // in this line we acesss data from all data
    const res = pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;

      return {
        id: pokemon.id,
        name: pokemon.name,
        image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
        type: pokemon.types
      }
    })
    console.log(res);
    setPockeList(res);
    setIsloading(false);
  }

  useEffect(() => {
    Apifetching();
  },[pokedexURL]);

  return (
    <div>
      {/* <div>    Pockemon list</div>  */}
      <div className='pokomen-container'>
        {isloading ? "Loading..........." :
          pockeList.map(
            (p) => {return <PokemonList name={p.name} id={p.id}  image={p.image} /> })
        }</div>


      <div className='btns'>
        <button disabled={PrevURL == null} onClick={() => { setPokedexURL(PrevURL) }} className='btn1'>prev</button>
        <button disabled={nextURL == null} onClick={() => { setPokedexURL(nextURL) }} className='btn2'>next</button>
      </div>


    </div>
  )
}
