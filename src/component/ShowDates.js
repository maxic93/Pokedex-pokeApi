import React, { useEffect, useState } from 'react'
import Pokemon from './Pokemon'
import "./showdates.css"
import Swal from 'sweetalert2'


const ShowDates = ({pokemon}) => {
   
  const [pokemonInfo, setPokemonInfo] = useState({
    name: "",
    img: "",
  });

 useEffect(()=>{
  consumeApi(pokemon)
 },[pokemon])

  const consumeApi = async(searchPokemon)=> {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
      const data = await res.json()
     
      setPokemonInfo({
        name: data.name,
        img: data.sprites.other.dream_world.front_default,
      })
      
    } catch (error) {
      if(error){
        Swal.fire({
          title: 'Error!',
          text: 'the pokemon was not found',
          icon: 'error',
        })
      }
    }
}

  return (
    <div className='container_pokemon'>
     
     <Pokemon 
     name={pokemonInfo.name} 
     img={pokemonInfo.img}
     
     />
    </div>
  )
}

export default ShowDates
