
import "./form.css"
import Swal from 'sweetalert2'
import { useState } from "react"

const Form = ({setPokemon}) => {
  
  const [newPokemon, setNewPokemon] = useState("")
  
  const handleChange = e => {
    setNewPokemon(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newPokemon.trim()){
      Swal.fire({
        title: 'Error!',
        text: 'Please write a pokemon',
        icon: 'error',
      })
    }
    setPokemon(newPokemon.trim().toLowerCase()) 
  }
  
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        className='input_form'
        type="text"
        placeholder='Enter Pokemon'
        onChange={handleChange}
        name="pokemon"
      />
      <button
      className='button_form'
      type='submit'
      >
        Search Pokemon
      </button>
    </form>
  )
}

export default Form
