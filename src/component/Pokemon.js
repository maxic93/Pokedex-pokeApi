import React from 'react'
import "./pokemon.css"


const Pokemon = ({name}) => {
  


  return (
    <div className='pokemon'>
       <h1 className='name'>{name}</h1>
       <div className='imgPokemon'>
        <img  alt='imgpokemon'/>
       </div>
       
    </div>
  )
}

export default Pokemon
