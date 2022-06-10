import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'
import "./showdates.css"



const ShowDates = ({pokemon}) => {
   
  const [pokemonInfo, setPokemonInfo] = useState({});

 useEffect(()=>{
  consumeApi(pokemon)
 },[pokemon])

  const consumeApi = async(searchPokemon)=> {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
      const data = await res.json()
      setPokemonInfo(data)
      console.log(pokemonInfo)
    } catch (error) {
      console.log(error)
    }
}

  return (
    <div className='container_pokemon'>
     
     <Pokemon 
     name={pokemonInfo.name} 
    
     
     />
    </div>
  )
}

export default ShowDates
