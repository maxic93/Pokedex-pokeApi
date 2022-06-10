import React from 'react'
import "./pokemon.css"


const Pokemon = ({name, img=""}) => {
  


  return (
    <div className='pokemon'>
       <h1 className='name'>{name.toUpperCase()}</h1>
       <div className='imgPokemon'>
        <img src={img} alt={'imgpokemon'}/>
       </div>
       
    </div>
  )
}

export default Pokemon
