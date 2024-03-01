import React from 'react';
import './Pokemon.css';
import {Link} from 'react-router-dom';

export default function PokemonList({name,image,id}) {
  return (

    <div className='container'>
      <Link to={`/pokemon/${id}`}>
      <div className='name' >{name}</div>
      <div className='pock-img'><img src={image} alt="" /></div>
      
      </Link>
    </div>
  )
}
