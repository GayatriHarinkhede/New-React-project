import React from 'react'
import CustomRoutes from './components/routes/CustomRoutes'
import Useeffect from './components/API/Useeffect'
import './App.css';
import { Link } from 'react-router-dom';


export default function App() {
  return (
    <div className='outer-pokedex'>
    {/* <Useeffect/> */}
   <Link to="/"> <p>Pokedex</p></Link>
    <CustomRoutes/>
    </div>
  )
}
